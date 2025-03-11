import createCache from '@emotion/cache'

export const createEmotionCache = () => {
  const emotionCache = createCache({ key: 'css' })
  emotionCache.compat = true

  return emotionCache
}
