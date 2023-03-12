import React from 'react'
import LogoSvg from '../../../images/svg/logo_welbex.svg?url';
import './style.scss'
export default function Logo() {
  return (
    <div className='logo'>
        <img className='logo__image' src={LogoSvg} alt='logo' />
        <p className='logo__text'>крупный интегратор CRM в Росcии и ещё 8 странах</p>
    </div>
  )
}
