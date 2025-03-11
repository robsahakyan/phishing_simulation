import { createContext, useEffect, useState, ReactNode } from 'react'
import { useRouter } from 'next/router'
import authConfig from 'src/configs/auth'
import { AuthValuesType, LoginParams, ErrCallbackType } from './types'
import { UserLoginDto } from 'src/types/auth'
import { MessageTypeEnum } from 'src/types/enums/message.enum'
import { customToast } from '../styles/libs/react-toastify'
import { Role } from 'src/types/enums/role.enum'
import { verifyToken } from '../utils/jwt-verify'
import axios from 'axios'

const defaultProvider: AuthValuesType = {
  user: null,
  loading: true,
  setUser: () => null,
  getToken: () => '',
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve()
}

const AuthContext = createContext(defaultProvider)

type Props = {
  children: ReactNode
  notRequireAuth?: boolean
}

const AuthProvider = ({ children, notRequireAuth = false }: Props) => {
  const [user, setUser] = useState<UserLoginDto | null>(defaultProvider.user)
  const [loading, setLoading] = useState<boolean>(defaultProvider.loading)
  const router = useRouter()
  
  useEffect(() => {
    const initAuth = async (): Promise<void> => {
      const storedToken = window.localStorage.getItem(authConfig.storageTokenKeyName);

      if (storedToken) {
        setLoading(true)

        if (notRequireAuth) {
          const userData = window.localStorage.getItem('userData');
          const verifiedToken = verifyToken(storedToken);
          
          if (!verifiedToken.valid) {
            localStorage.removeItem('userData');
            localStorage.removeItem(authConfig.storageTokenKeyName)
            router.push('/login');
          } 
          if (userData) {
            const userDataParsed = JSON.parse(userData); 
            setLoading(false);   
            setUser({ ...userDataParsed });
          }
        } else {
          await axios
          .get(authConfig.meEndpoint, {
            headers: {
              Authorization: `Bearer ${storedToken}`
            }
          })
          .then(async response => {
            if (response.data?.user?.role === Role.SUPER_ADMIN) {
              const errorMessage = 'Super admin is not permitted to use the app';
              customToast.error(errorMessage);
              throw new Error(errorMessage);
            } else {
              if (response.data.accessToken !== storedToken) {
                setLoading(false)
                setUser({ ...response.data.user })
                window.localStorage.setItem(authConfig.storageTokenKeyName, response.data.accessToken)
                window.localStorage.setItem('userData', JSON.stringify(response.data.user))
              }
            }
          })
          .catch(() => {
            localStorage.removeItem('userData')
            localStorage.removeItem('refreshToken')
            localStorage.removeItem(authConfig.storageTokenKeyName)
            setUser(null)
            setLoading(false)
            if (!router.pathname.includes('login')) {
              router.replace('/login')
            }
          })
        }
      } else {
        setLoading(false)
      }
    }

    initAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleLogin = (params: LoginParams, errorCallback?: ErrCallbackType) => {
    axios
      .post(authConfig.loginEndpoint, params)
      .then(async response => {
        if (response.data?.user?.role === Role.SUPER_ADMIN) {
          router.replace('/login')
        } else {
          window.localStorage.setItem(authConfig.storageTokenKeyName, response.data.accessToken)
          const returnUrl = router.query.returnUrl
          setUser({ ...(response.data.user as UserLoginDto) })
          window.localStorage.setItem('userData', JSON.stringify(response.data.user))
          const redirectURL = returnUrl && returnUrl !== '/phishing-attempts' ? returnUrl : '/phishing-attempts'

          router.replace(redirectURL as string)

          // setLoading(false);
        }
      })

      .catch(err => {
        if (
          typeof err?.response?.data === 'object' &&
          'messageType' in err.response?.data &&
          err.response.data.messageType === MessageTypeEnum.VERIFY_YOUR_EMAIL
        ) {
          customToast.info(err.response.data.message)
        } else {
          customToast.error('Invalid email or password')
        }
        if (errorCallback) errorCallback(err)
      })
  }

  const handleLogout = (withoutRedirection?: boolean) => {
    setUser(null)
    window.localStorage.removeItem('userData')
    window.localStorage.removeItem(authConfig.storageTokenKeyName);

    if (!withoutRedirection) {
      router.push('/login')
    } 
  }

  const getToken = () => {
    return window.localStorage.getItem(authConfig.storageTokenKeyName)
  }

  const values = {
    user,
    loading,
    setUser,
    setLoading,
    getToken,
    login: handleLogin,
    logout: handleLogout
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
