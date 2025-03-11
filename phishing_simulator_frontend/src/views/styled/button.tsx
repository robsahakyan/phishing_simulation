import { Button, styled } from "@mui/material";

export const YellowBlackButtonStyled = styled(Button)(({ theme }) => ({
    height: '50px',
    backgroundColor: theme.palette.customColors.yellow,
    color: theme.palette.primary.dark,
    fontSize: '16px',
    fontWeight: 600,
    paddingInline: 20,
    textTransform: 'none',
    [theme.breakpoints.down('md')]: {
      fontSize: '14px'
    }

    // '&:not(.MuiButtonGroup-grouped)': {
    //   '&:hover': {
    //     backgroundColor: '#17A017'
    //   }
    // }
  }))