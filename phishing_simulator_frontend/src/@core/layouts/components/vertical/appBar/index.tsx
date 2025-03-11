import { styled } from '@mui/material/styles'
import MuiAppBar, { AppBarProps } from '@mui/material/AppBar'
import MuiToolbar, { ToolbarProps } from '@mui/material/Toolbar'
import { LayoutProps } from 'src/@core/layouts/types'
import { Theme, useTheme } from '@mui/material'

interface Props {
  hidden: LayoutProps['hidden']
  menuOpenHandler: () => void
  settings: LayoutProps['settings']
  saveSettings: LayoutProps['saveSettings']
  appBarContent: NonNullable<LayoutProps['verticalLayoutProps']['appBar']>['content']
  appBarProps: NonNullable<LayoutProps['verticalLayoutProps']['appBar']>['componentProps']
  useHeaderBackgroundImage?: boolean
  pageName?: string
}

const AppBar = styled(MuiAppBar)<AppBarProps>(({ theme }) => ({
  transition: 'none',
  alignItems: 'center',
  color: theme.palette.text.primary,
  minHeight: theme.mixins.toolbar.minHeight,

}))

const Toolbar = styled(MuiToolbar)<ToolbarProps>(({ theme }) => ({
  width: '100%',
  zIndex: 1300,
  backdropFilter: 'blur(10px)',
  backgroundColor: theme.palette.primary.dark,
  '&.MuiToolbar-root': {
    paddingInline: theme.spacing(18),
    [theme.breakpoints.down('md')]: {
      paddingInline: theme.spacing(12),
    },
    [theme.breakpoints.down('sm')]: {
      paddingInline: theme.spacing(6),
    }
  },
  [theme.breakpoints.down('md')]: {
    backgroundColor: theme.palette.primary.dark,
    position: 'absolute',
  }
}))

const LayoutAppBar = (props: Props) => {
  const {
    settings,
    appBarProps,
    appBarContent: userAppBarContent,
    useHeaderBackgroundImage
  } = props

  const { appBar } = settings
  const theme = useTheme();

  if (appBar === 'hidden') {
    return null
  }
  let userAppBarStyle = {}
  if (appBarProps && appBarProps.sx) {
    userAppBarStyle = appBarProps.sx
  }
  const userAppBarProps = Object.assign({}, appBarProps)
  delete userAppBarProps.sx

  return (
    <>
      <AppBar
        elevation={0}
        color='default'
        className='layout-navbar'
        sx={{
          ...userAppBarStyle,
          ...(useHeaderBackgroundImage && {
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '100vh',
            overflow: 'auto',

            [theme.breakpoints.down('lg')]: {
              height: '85vh',
            },
            [theme.breakpoints.down('md')]: {
              height: '70vh',
            },
            [theme.breakpoints.down('sm')]: {
              height: '50vh'
            },
            [theme.breakpoints.down('xs')]: {
              height: '35vh'
            }
          })
        }}
        position={appBar === 'fixed' ? 'sticky' : 'static'}
        {...userAppBarProps}
      >
        <Toolbar
          className='navbar-content-container'
          sx={{
            minHeight: (theme: Theme) => `${theme.mixins.toolbar.minHeight as number}px !important`,
            
            ...(useHeaderBackgroundImage && { backgroundColor: 'unset' })
           
          }}
        >
          {(userAppBarContent && userAppBarContent(props)) || null}
        </Toolbar>
      </AppBar>
    </>
  )
}

export default LayoutAppBar
