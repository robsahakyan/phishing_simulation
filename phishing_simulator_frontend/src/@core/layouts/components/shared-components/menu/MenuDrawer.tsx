import React from 'react'

// import { useMediaQuery } from '@mui/material'
import MenuContent from './MenuContent'
import { Drawer } from '@mui/material'

type Props = {
  open: boolean
  OnCloseAndOpen: any
  menuOpenHandler: any
}

const MenuDrawer = ({ OnCloseAndOpen, open, menuOpenHandler }: Props) => {
  
  return (
      <Drawer
        open={open}
        onClose={OnCloseAndOpen}
        anchor='right'
        sx={{
          '--Drawer-transitionDuration': '1s',
          '--Drawer-transitionFunction': 'opacity',
          '.MuiDrawer-content': {
            paddingInline: '1.5rem',
            opacity: open ? 1 : 0,
            transition: 'opacity 1s',
            overflow: 'unset',
            width: '100vw',
          },
          '.MuiDrawer-backdrop': {
            opacity: open ? 1 : 0,
            transition: 'opacity 1s',
          },
          '.MuiDrawer-root': {
            opacity: open ? 1 : 0,
          },
          '.MuiDrawer-paper': {
            backgroundColor: 'unset',
            backdropFilter: 'blur(8px)',
          }
        }}
      >
        {open && <MenuContent menuOpenHandler={menuOpenHandler}/>}
      </Drawer>
  )
}

export default MenuDrawer
