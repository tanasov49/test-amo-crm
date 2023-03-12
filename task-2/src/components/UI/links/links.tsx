import React from 'react'
import { linksNav } from '../../../data/data'
import './links.scss'
export default function Links() {
  return (
    <ul className='links-nav'>
        {linksNav.map((item: any) =>
        <li className='link-item' key={item.id}>
            <a className='link-item__url' href={item.url}>{item.title}</a>
        </li>
        )}
    </ul>
  )
}
