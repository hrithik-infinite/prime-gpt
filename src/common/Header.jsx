import React from 'react'
import useAuthChecker from '../hooks/useAuthChecker'

const Header = () => {
useAuthChecker();
  return (
    <div>Header</div>
  )
}

export default Header