// ** Type Import
import { OwnerStateThemeType } from './'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

const Pagination = () => {
  return {
    MuiPaginationItem: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          height: 35,
          minWidth: 35,
          margin: '0 2px',
          borderRadius: '50%',
          fontSize: '.9375rem',
          padding: theme.spacing(2.5, 2),
          '&.Mui-selected': {
            '&.MuiPaginationItem-textPrimary, &.MuiPaginationItem-outlinedPrimary': {
              boxShadow: `0 2px 4px 0 ${hexToRGBA(theme.palette.primary.main, 0.4)}`
            },
            '&.MuiPaginationItem-textSecondary, &.MuiPaginationItem-outlinedSecondary': {
              boxShadow: `0 2px 4px 0 ${hexToRGBA(theme.palette.secondary.main, 0.4)}`
            }
          }
        }),
        rounded: {
          borderRadius: 4
        },
        outlined: ({ theme }: OwnerStateThemeType) => ({
          borderColor: `rgba(${theme.palette.customColors.main}, 0.22)`,
          border: 'none',
          backgroundColor: 'rgba(255, 255, 255, 1)'
        }),
        outlinedPrimary: ({ theme }: OwnerStateThemeType) => ({
          '&.Mui-selected': {
            color: `${theme.palette.primary.contrastText} !important`,
            backgroundColor: `${theme.palette.primary.main} !important`,
          }
        }),
        outlinedSecondary: ({ theme }: OwnerStateThemeType) => ({
          '&.Mui-selected': {
            color: `${theme.palette.secondary.contrastText} !important`,
            backgroundColor: `${theme.palette.secondary.main} !important`,
           
          }
        }),
        sizeSmall: ({ theme }: OwnerStateThemeType) => ({
          height: 24,
          minWidth: 24,
          fontSize: '0.75rem',
          padding: theme.spacing(1.5, 1)
        }),
        sizeLarge: ({ theme }: OwnerStateThemeType) => ({
          height: 46,
          minWidth: 46,
          lineHeight: 1.5,
          fontSize: '1rem',
          borderRadius: '50%',
          padding: theme.spacing(3.75, 2),
          '&.MuiPaginationItem-rounded': {
            borderRadius: 8
          }
        })
      }
    }
  }
}

export default Pagination
