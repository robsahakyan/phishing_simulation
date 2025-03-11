// ** React Imports
import { ReactNode, ReactElement, useEffect } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Hooks Import
import { useAuth } from 'src/@core/hooks/useAuth'

interface GuestGuardProps {
  children: ReactNode
  fallback: ReactElement | null
}

const GuestGuard = (props: GuestGuardProps) => {
  const { children, fallback } = props
  const auth = useAuth();
  const router = useRouter();
  const restrictedAuthorizedUsers = ['/login', '/login/forgot-password', 'register'];

  useEffect(() => {
    // if (!router.isReady) {
    //   return
    // }

    if (window.localStorage.getItem('userData') && restrictedAuthorizedUsers.includes(router.route)) {
      router.replace('/phishing-attempts')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.route])

  if (auth.loading || (auth.loading && auth.user !== null)) {
    return fallback
  }

  return <>{children}</>
}

export default GuestGuard
