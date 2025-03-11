import { AppProps } from 'next/app'
import { Provider } from 'react-redux'

//import themeConfig from 'src/configs/themeConfig'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { createEmotionCache } from 'src/@core/utils/create-emotion-cache'
import { store } from 'src/redux/store'
import { NextPage } from 'next'
import '../../styles/global.css'
import { SettingsConsumer, SettingsProvider } from 'src/@core/context/settingsContext'
import ThemeComponent from 'src/@core/theme/ThemeComponent'
import dynamic from 'next/dynamic'
import { AuthProvider } from 'src/@core/context/AuthContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'react-loading-skeleton/dist/skeleton.css'
import GlobalLayout from 'src/layouts/GlobalLayout'
import { ReactNode } from 'react'
import GuestGuard from 'src/@core/components/auth/GuestGuard'
import Spinner from 'src/@core/components/spinner'
import AuthGuard from 'src/@core/components/auth/AuthGuard'
import { MetaHead } from 'src/components/MetaHead'

const ReactHotToast = dynamic(() => import('src/@core/styles/libs/react-toastify'), { ssr: false })

const clientSideEmotionCache = createEmotionCache()

type ExtendedAppProps = AppProps & {
  Component: NextPage
  emotionCache: EmotionCache
}

type GuardProps = {
  authGuard: boolean
  guestGuard: boolean
  children: ReactNode
}

const Guard = ({ children, authGuard, guestGuard }: GuardProps) => {
  if (guestGuard) {
    return <GuestGuard fallback={<Spinner />}>{children}</GuestGuard>
  } else if (!guestGuard && !authGuard) {
    return <>{children}</>
  } else {
    return <AuthGuard fallback={<Spinner />}>{children}</AuthGuard>
  }
}

function App(props: ExtendedAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  const contentHeightFixed = Component.contentHeightFixed ?? false
  const pageMetadata = props.pageProps.metadata;
  
  const getLayout =
    Component.getLayout ?? (page => <GlobalLayout contentHeightFixed={contentHeightFixed}>{page}</GlobalLayout>)
  const setConfig = Component.setConfig ?? undefined

  const authGuard = Component.authGuard ?? true
  const guestGuard = Component.guestGuard ?? false
  const notRequireAuth = Component.notRequireAuth ?? false;

  // if (typeof window !== 'undefined') {
  //   UtilsProvider.checkAndUpdateLocalStorageVersion();
  // }

  return (
    <>
      {pageMetadata && (
        <MetaHead
          title={pageMetadata.title}
          description={pageMetadata.description}
          image={pageMetadata.imageUrl}
        />
      )}
      <Provider store={store}>
        <CacheProvider value={emotionCache}>
          <AuthProvider notRequireAuth={notRequireAuth}>
            <SettingsProvider {...(setConfig ? { pageSettings: setConfig() } : {})}>
              <SettingsConsumer>
                {({ settings }) => {
                  return (
                    <ThemeComponent settings={settings}>
                      <Guard authGuard={authGuard} guestGuard={guestGuard}>
                        {/* <AbilityProvider> */}
                          {getLayout(<Component {...pageProps} />)}
                          <ReactHotToast>
                            <ToastContainer position={settings.toastPosition} />
                          </ReactHotToast>
                        {/* </AbilityProvider> */}
                      </Guard>
                    </ThemeComponent>
                  )
                }}
              </SettingsConsumer>
            </SettingsProvider>
          </AuthProvider>
        </CacheProvider>
      </Provider>
    </>
  )
}

export default App
