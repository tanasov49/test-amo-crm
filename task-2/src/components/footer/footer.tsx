import React from 'react'
import './styles.scss'
import AboutCompany from '../UI/aboutCompany/aboutCompany'
import MenuFooter from '../UI/menuFooter/menuFooter'
import ContactsFooter from '../UI/contactsFooter/contactsFooter'
import CopyrightFooter from '../UI/copyrightFooter/copyrightFooter'
export default function Footer() {
  return (
    <footer className='footer'>
        <AboutCompany />
        <MenuFooter />
        <ContactsFooter />
        <CopyrightFooter />
    </footer>
  )
}
