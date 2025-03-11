import { Box, Link } from '@mui/material'
import { ReactNode } from 'react'
import { BlackHeaderTypographyMediumStyled } from 'src/@core/components/styled/Typography'
import GlobalLayout from 'src/layouts/GlobalLayout'

function Error404Page() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBlock: 10,
        paddingBottom: 30,
        gap: 5
      }}
    >
      <BlackHeaderTypographyMediumStyled>404 - Page not found</BlackHeaderTypographyMediumStyled>
      <BlackHeaderTypographyMediumStyled>Are you sure the page URL is correct? Get in touch with the site owner.</BlackHeaderTypographyMediumStyled>
      <Link sx={{ cursor: 'pointer' }} href='/phishing-attempts'>
        Go to Phishing Attempts page
      </Link>
    </Box>
  )
}

Error404Page.getLayout = (page: ReactNode) => <GlobalLayout useHeader={false}>{page}</GlobalLayout>
Error404Page.guestGuard = true

export default Error404Page
