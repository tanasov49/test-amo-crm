import React from 'react'
import './styles.scss'
import { linksIcons } from '../../../data/data'
interface IIcons {
  classIcons: string;
}
export default function IconsLinks({classIcons}: IIcons) {
  return (
    <ul className={`icons-links ${classIcons}`}>
        {linksIcons.map(({id, url, Svg}) => 
            <li className='icon-link' key={id}>
                <a className='icon-link__url' href={url}>
                    <Svg />
                </a>
            </li>
        )}
    </ul>
  )
}
