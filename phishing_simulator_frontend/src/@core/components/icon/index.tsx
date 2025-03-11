import { Icon, IconProps } from '@iconify/react'

const IconifyIcon = ({ icon, fontSize = '22px', ...rest }: IconProps) => {
  return <Icon icon={icon} fontSize={fontSize} {...rest} />
}

export default IconifyIcon
