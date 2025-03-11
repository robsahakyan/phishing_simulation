import { Typography, styled } from '@mui/material'

export const BlackHeaderTypographyMediumStyled = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.black,
  fontWeight: 600,
  fontSize: '31px'
}))

export const WhiteTypographyStyled = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
    fontFamily: 'Piazzolla'
}));

export const TertiaryTypographyStyled = styled(Typography)(({ theme }) => ({
    color: theme.palette.customColors.tertiaryColor,
    fontFamily: 'Piazzolla'
})); 

export const YellowTypographyStyled = styled(Typography)(({ theme }) => ({
    color: theme.palette.customColors.yellow,
    fontFamily: 'Piazzolla'
})); 

export const SecondaryWhiteTypographyStyled = styled(Typography)(({ theme }) => ({
    color: theme.palette.secondary.main,
    fontFamily: 'Piazzolla'
})); 