import React from 'react'
import TitleBlock from '../titleBlock/titleBlock'
import { menuFooterLinks } from '../../../data/data'
import './styles.scss'
export default function MenuFooter() {
  return (
    <div className='menu-footer'>
        <TitleBlock title='Меню' classTitle='title-block_menu-footer' />
        <ul className='menu-footer-links'>
            {menuFooterLinks.map((item) => 
            <li className='menu-footer-item' key={item.id}>
                <a className='menu-footer-item__link' href={item.url}>{item.title}</a>
            </li>
            )}
        </ul>
    </div>
  )
}
