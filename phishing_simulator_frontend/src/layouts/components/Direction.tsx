import { useEffect, ReactNode } from 'react'
import { Direction } from '@mui/material'
import createCache from '@emotion/cache'
import stylisRTLPlugin from 'stylis-plugin-rtl'
import { CacheProvider } from '@emotion/react'

interface DirectionProps {
  children: ReactNode
  direction: Direction
}

const styleCache = () =>
  createCache({
    key: 'rtl',
    prepend: true,
    stylisPlugins: [stylisRTLPlugin]
  })

const DirectionComponent = (props: DirectionProps) => {
  const { children, direction } = props

  useEffect(() => {
    document.dir = direction
  }, [direction])

  if (direction === 'rtl') {
    return <CacheProvider value={styleCache()}>{children}</CacheProvider>
  }

  return <>{children}</>
}

export default DirectionComponent
