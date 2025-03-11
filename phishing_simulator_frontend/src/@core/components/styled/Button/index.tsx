import { Button as ButtonJoy, styled as styledJoy } from '@mui/joy'
import { styled, Button } from '@mui/material'

export const CircleButtonsStyled = styledJoy(ButtonJoy)(() => ({
  color: '#FFFFFF',
  backgroundColor: '#4682A929',
  padding: '10px',
  height: '50px',
  width: '50px',

  // '@media(min-width: 600': {
  //   width: '45px',
  //   height: '45px'
  // },
  borderRadius: '100%',
  boxShadow: '0px 0px 4px 0px #0000001A inset',
  '&:hover': {
    backgroundColor: '#4682A929'
  }
}))

export const PrimaryWhiteButtonStyled = styled(Button)(({ theme }) => ({
  height: '45px',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  fontWeight: 600,
  paddingInline: 40,
  '&:not(.MuiButtonGroup-grouped)': {
    '&:hover': {
      // backgroundColor: 'inherit'
    }
  },
  '&.Mui-disabled': {
    pointerEvents: 'auto',
    cursor: 'not-allowed',
    backgroundColor: 'gray',
    '&:hover': {
      backgroundColor: 'gray'
    }
  }}
))

export const DarkWhiteButtonStyled = styled(Button)(({ theme }) => ({
  height: '50px',
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.primary.main,
  border: '1px solid rgba(255, 255, 255, 0.2)',
  fontSize: '16px',
  fontWeight: 600,
  paddingInline: 20,
  textTransform: 'none',
  [theme.breakpoints.down('md')]: {
    fontSize: '14px'
  },

  '&:not(.MuiButtonGroup-grouped)': {
    '&:hover': {
      backgroundColor: theme.palette.customColors.surfaceColorBg
    }
  }
}))

export const YellowBlackButtonStyled = styled(Button)(({ theme }) => ({
  height: '50px',
  backgroundColor: theme.palette.customColors.yellow,
  color: theme.palette.primary.dark,
  fontSize: '16px',
  fontWeight: 600,
  paddingInline: 20,
  textTransform: 'none',
  textWrap: 'nowrap',
  [theme.breakpoints.down('md')]: {
    fontSize: '14px'
  },

  '&.Mui-disabled': {
    pointerEvents: 'auto',
    cursor: 'not-allowed',
    backgroundColor: theme.palette.customColors.tertiaryColor,
    '&:hover': {
      backgroundColor: theme.palette.customColors.tertiaryColor
    }
  }
}))