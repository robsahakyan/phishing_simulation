import { styled } from '@mui/material/styles'
import Box, { BoxProps } from '@mui/material/Box'
import { SignInLayoutProps } from '../@core/layouts/types'

const SignInLayoutWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  height: '100vh',
  [theme.breakpoints.down('lg')]: {
    background: 'linear-gradient(271.41deg, #F8F8F8 61.32%, rgba(248, 248, 248, 0) 98.71%);'
  }
}))

const SignInLayout = ({ children }: SignInLayoutProps) => {
  
return (
    <SignInLayoutWrapper className='layout-wrapper'>
      <Box
        className='app-content'
        sx={{ overflow: 'hidden', minHeight: '100vh', position: 'relative', display: 'flex', justifyContent: 'end' }}
      >
        {children}
      </Box>
    </SignInLayoutWrapper>
  )
}

export default SignInLayout