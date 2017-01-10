import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div>
    <h1>#r</h1>
    <IndexLink to='/dummy' activeClassName='route--active'>
      Blocks, redux
    </IndexLink>
  </div>
)

export default Header
