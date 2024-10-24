import React from 'react'
import { Link } from 'react-router-dom'
const NavItem = ({ text,url }) => {
  return (
    <div>
      <Link to={url} className="text-white p-2">
        {text}
      </Link>
    </div>
  )
}

export default NavItem