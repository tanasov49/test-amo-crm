import React from 'react'
import TitleBlock from '../titleBlock/titleBlock'
import Contacts from '../contacts/contacts'
import './styles.scss'
export default function ContactsFooter() {
  return (
    <div className='contacts-footer'>
        <TitleBlock title='Контакты' classTitle='title-block_contacts-footer' />
        <Contacts classIcons='icons-links_footer' classContacts='contacts_contacts-footer' />
        <a href='https://yandex.ru/maps/-/CCUOIMtk0D' target='_blank' className='contacts-footer__map'>Москва, Путевой проезд 3с1, к 902</a>
    </div>
  )
}
