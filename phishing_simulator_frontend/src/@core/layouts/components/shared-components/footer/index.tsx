// ** MUI Imports
import Box from '@mui/material/Box'

// ** Type Import
import { LayoutProps } from 'src/@core/layouts/types'

// ** Footer Content Component
import { styled } from '@mui/material'

interface Props {
  settings: LayoutProps['settings']
  saveSettings: LayoutProps['saveSettings']
  footerStyles?: NonNullable<LayoutProps['footerProps']>['sx']
  footerContent?: NonNullable<LayoutProps['footerProps']>['content']
}

const FooterBoxStyled = styled(Box)(({ theme }) => ({
  height: '150px',
  zIndex: 10,
  display: 'flex',
  marginTop: 6,
  paddingInline: '4.5rem',
  backgroundColor: theme.palette.customColors.surfaceColorBg,
  alignItems: 'end',
  [theme.breakpoints.down('md')]: {
    height: '370px',
    paddingInline: '3rem'
  },
  [theme.breakpoints.down('sm')]: {
    paddingInline: '1.5rem'
  },
  [theme.breakpoints.down('xs')]: {
    height: '400px',
  }
}))

const Footer = (props: Props) => {
  const { settings, footerStyles } = props
  const { skin, layout, footer } = settings

  if (footer === 'hidden') {
    return null
  }

  return (
    <FooterBoxStyled
      component='footer'
      className='layout-footer'
      sx={{
       
        ...(footer === 'fixed' && {
          bottom: 0,
          position: 'sticky',
          ...(layout === 'vertical'
            ? { px: [4, 6] }
            : {
                ...(skin === 'bordered'
                  ? { borderTop: theme => `1px solid ${theme.palette.divider}` }
                  : { boxShadow: 6 })
              })
        }),
        ...footerStyles
      }}
    >
    </FooterBoxStyled>
  )
}

export default Footer
