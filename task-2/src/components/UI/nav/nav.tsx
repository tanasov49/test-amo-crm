import React from 'react'
import Logo from '../logo/logo'
import './style.scss'
import Links from '../links/links'
import Contacts from '../contacts/contacts'
export default function Nav() {
  return (
    <nav className='nav'>
        <Logo />
        <Links />
        <Contacts classContacts='contacts_header' classIcons='icons-links_header' />
    </nav>
  )
}
