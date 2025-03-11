import { Grid, styled, Typography } from '@mui/material'
import { Link } from '@mui/material'
import Box from '@mui/material/Box'
import { PrimaryWhiteButtonStyled } from 'src/@core/components/styled/Button'
import { Settings } from 'src/@core/context/settingsContext'
import { useAuth } from 'src/@core/hooks/useAuth'
import { UtilsProvider } from 'src/@core/utils'

interface Props {
  hidden: boolean
  settings: Settings
  useHeaderBackgroundImage?: boolean
  menuOpenHandler: () => void
  saveSettings: (values: Settings) => void
}

const BoxStyled = styled(Box)(({ theme }) => ({
  display: 'flex', 
  alignItems: 'center', 
  marginRight: '1rem', 
  gap: '4rem',
  [theme.breakpoints.down('lg')]: {
    display: 'none'
  }
}));

const LinkStyled = styled(Link)(({  }) => ({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  color: 'white',
  position: 'relative',
  width: '200px',
  fontWeight: '600',
}))

const HeaderBarContent = ({}: Props) => {
  const auth = useAuth()

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative'
      }}
    >
      <Box sx={{ display: 'flex', }}>
        <LinkStyled
          href={'/phishing-attempts'}
        >
          Attempts page
        </LinkStyled>
        <LinkStyled
          href={'/phishing-simulation'}
        >
          Simulation page
        </LinkStyled>
      </Box>
     
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', width: '30%' }}>
        <BoxStyled>
          {auth?.user &&
          <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem' }}>
            <Typography color={'white'}>{UtilsProvider.getFullNameOfUser(auth.user)}</Typography>
            <PrimaryWhiteButtonStyled onClick={() => auth.logout()}>Log out</PrimaryWhiteButtonStyled>
          </Grid>
          }
        </BoxStyled>
      </Box>
    </Box>
  )
}

export default HeaderBarContent
