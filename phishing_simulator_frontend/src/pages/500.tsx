import { Box, Grid, Typography } from '@mui/material'
import { PrimaryWhiteButtonStyled } from 'src/@core/components/styled/Button'
import { BlackHeaderTypographyMediumStyled } from 'src/@core/components/styled/Typography'

function Error500Page() {
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
      <BlackHeaderTypographyMediumStyled>500 - Internal server error</BlackHeaderTypographyMediumStyled>
      <Typography>We apologize for the inconvenience. Please try again leter.</Typography>
      <Grid sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
        <PrimaryWhiteButtonStyled href='/'>Go back home</PrimaryWhiteButtonStyled>
      </Grid>
    </Box>
  )
}

Error500Page.guestGuard = true

export default Error500Page
