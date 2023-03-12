import React from 'react'
import './styles.scss'
import IconsLinks from '../iconsLinks/iconsLinks'
interface IContacts {
  classContacts: string;
  classIcons: string;
}
export default function Contacts({classContacts,classIcons}: IContacts) {
  return (
    <div className={`contacts ${classContacts}`}>
        <a className='contacts__phone' href='tel:+75555555555'>+7 555 55-55-55</a>
        <IconsLinks classIcons={classIcons} />
    </div>
  )
}
