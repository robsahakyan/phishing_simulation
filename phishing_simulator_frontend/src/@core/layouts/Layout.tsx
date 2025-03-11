// ** Type Import
import { LayoutProps } from 'src/@core/layouts/types'

// ** Layout Components
import VerticalLayout from './VerticalLayout'

// import HorizontalLayout from './HorizontalLayout'

const Layout = (props: LayoutProps) => {
  const { children } = props

  // if (settings.layout === 'horizontal') {
  //   return <HorizontalLayout {...props}>{children}</HorizontalLayout>
  // }

  return <VerticalLayout {...props}>{children}</VerticalLayout>
}

export default Layout
