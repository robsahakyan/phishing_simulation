import { ReactNode } from 'react'
import { Theme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Layout from 'src/@core/layouts/Layout'
import HeaderBarContent from './components/vertical/HeaderBarContent'
import { useSettings } from 'src/@core/hooks/useSettings'

interface Props {
  children: ReactNode
  contentHeightFixed?: boolean
  useHeaderBackgroundImage?: boolean
  pageName?: string
  useHeader?: boolean
  useFooter?: boolean
  usePadding?: boolean
}

const GlobalLayout = ({
  children,
  contentHeightFixed,
  useHeaderBackgroundImage,
  pageName,
  useHeader,
  useFooter,
  usePadding
}: Props) => {
  const { settings, saveSettings } = useSettings()
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))

  if (hidden && settings.layout === 'horizontal') {
    settings.layout = 'vertical'
  }

  return (
    <Layout
      hidden={hidden}
      settings={settings}
      saveSettings={saveSettings}
      usePadding={usePadding ?? true}
      useHeaderBackgroundImage={useHeaderBackgroundImage || false}
      pageName={pageName}
      useHeader={useHeader ?? true}
      useFooter={useFooter ?? true}
      contentHeightFixed={contentHeightFixed}
      verticalLayoutProps={{
        navMenu: {
          // navItems: VerticalNavItems()
          // Uncomment the below line when using server-side menu in vertical layout and comment the above line
          // navItems: verticalMenuItems
        },
        appBar: {
          content: props => (
            <HeaderBarContent
              hidden={hidden}
              settings={settings}
              useHeaderBackgroundImage={useHeaderBackgroundImage}
              saveSettings={saveSettings}
              menuOpenHandler={props.menuOpenHandler}
            />
          )
        }
      }}
      {...(settings.layout === 'horizontal' && {
        horizontalLayoutProps: {
          navMenu: {
            // navItems: HorizontalNavItems()
            // Uncomment the below line when using server-side menu in horizontal layout and comment the above line
            // navItems: horizontalMenuItems
          },
          appBar: {
            // content: () => <HorizontalAppBarContent hidden={hidden} settings={settings} saveSettings={saveSettings} />
          }
        }
      })}
    >
      {children}
    </Layout>
  )
}

export default GlobalLayout
