import React from 'react'

import LogoImage from '../../assets/images/logo.svg'

interface Props { }

const Logo: React.FC<Props> = () => {
  return <img src={LogoImage} alt="Favicon" />
}

Logo.defaultProps = {}

export default Logo
