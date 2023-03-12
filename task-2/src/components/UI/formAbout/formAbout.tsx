import React, {useState, useContext} from 'react'
import {ModalContext} from '../../../context/ModalContext'
import './styles.scss'
interface IProduct {
    title: string
}
export default function FormAbout({title}: IProduct) {
  const {handleChange, values, errors} = useContext(ModalContext)
  
  return (
    <React.Fragment>
        <h4 className="form-submit__title">{title}</h4>
        <input minLength={2} maxLength={20} onChange={(e) => handleChange(e)} value={values.name}  className='form-popup__input form-popup__input_name' type='text'  placeholder='Имя' name='name' required  />
        <span className='form-popup__error'>{errors.name}</span>
        <input maxLength={11} onChange={(e) => handleChange(e)} value={values.phone}  className='form-popup__input form-popup__input_phone' type='tel' placeholder='Телефон' name='phone' required onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}} />
        <span className='form-popup__error'>{errors.phone}</span>
        <input className='form-popup__input' onChange={(e) => handleChange(e)} placeholder='Email' name='email' required value={values.email} />
        <span className='form-popup__error'>{errors.email}</span>
        <textarea minLength={2} maxLength={50} onChange={(e) => handleChange(e)} value={values.comment} className='form-popup__text' placeholder='Комментарий' name='comment'></textarea>
        <span className='form-popup__error'>{errors.comment}</span>
    </React.Fragment>

  )
}
