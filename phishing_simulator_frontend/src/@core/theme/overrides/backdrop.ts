// ** Type Import
import { OwnerStateThemeType } from './'

const Backdrop = () => {
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          backgroundColor:
            theme.palette.mode === 'light' ? `rgba(${theme.palette.customColors.main}, 0.5)` : '#4544444D'
        }),
        invisible: {
          backgroundColor: 'transparent'
        }
      }
    }
  }
}

export default Backdrop
