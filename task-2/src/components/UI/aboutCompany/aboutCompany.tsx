import React from 'react'
import TitleBlock from '../titleBlock/titleBlock'
import { aboutFooterLinks } from '../../../data/data'
import './styles.scss'
export default function AboutCompany() {
  return (
    <div className='about-company'>
        <TitleBlock title='О компании' classTitle='title-block_about-company' />
        <ul className='about-footer-links'>
        {aboutFooterLinks.map((item) => 
            <li key={item.id} className='about-footer-item'>
                <a href={item.url} className='about-footer-item__link'>{item.title}</a>
            </li>
        )}
        </ul>
    </div>
  )
}
