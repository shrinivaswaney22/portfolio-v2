import { navLinks } from '@/data'
import React from 'react'

const NavLinks = () => {
  return (
    <>
    <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
    </>
  )
}

export default NavLinks