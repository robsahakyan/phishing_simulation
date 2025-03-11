import { styled } from '@mui/material/styles'
import Box, { BoxProps } from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import { ToastOptions, toast } from 'react-toastify'
import './style.module.css'
import IconifyIcon from 'src/@core/components/icon'

const ReactHotToast = styled(Box)<BoxProps>(({ theme }) => {
  const commonStyles = {
    color: '#303030',
    fontSize: 15,
    fontWeight: 500
  }
  const afterStyleForDifferentColors = {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: theme.shape.borderRadius,
    borderBottomRightRadius: theme.shape.borderRadius,
    borderBottomLeftRadius: theme.shape.borderRadius
  }
  
return {
    '& > div': {
      left: `${theme.spacing(6)} !important`,
      right: `${theme.spacing(6)} !important`,
      bottom: `${theme.spacing(6)} !important`,
      top: '75px !important',
      zIndex: useMediaQuery(theme.breakpoints.down('lg'))
        ? `${theme.zIndex.drawer - 1} !important`
        : `${theme.zIndex.drawer + 1} !important`
    },
    '& .info': {
      backgroundColor: '#E6F2FC'
    },
    '& .toast-class': {
      ...commonStyles
    },
    '& .error': {
      backgroundColor: '#FDEFED'
    },

    '& .toast-class::after': {
      ...afterStyleForDifferentColors
    },
    '& .success::after': {
      backgroundColor: 'green'
    },
    '& .error::after': {
      backgroundColor: 'red'
    },
    '& .info::after': {
      backgroundColor: '#59A5E7'
    },
    '& .loading::after': {
      backgroundColor: '#59A5E7'
    }
  }
})

export const customToast = {
  success: (text: string, otherOptions?: ToastOptions<unknown> | undefined) => {
    return toast.success(text, {
      className: 'success toast-class',
      ...otherOptions
    })
  },
  error: (text: string, otherOptions?: ToastOptions<unknown> | undefined) => {
    return toast.error(text, {
      className: 'error toast-class',
      icon: () => <IconifyIcon icon='fluent-mdl2:status-error-full' color='red' />,
      ...otherOptions
    })
  },
  loading: (text: string, otherOptions?: ToastOptions<unknown> | undefined) => {
    return toast.loading(text, {
      className: 'loading toast-class',
      ...otherOptions
    })
  },
  info: (text: string, otherOptions?: ToastOptions<unknown> | undefined) => {
    return toast.info(text, {
      className: 'info toast-class',
      ...otherOptions
    })
  }
}

//}

export default ReactHotToast
