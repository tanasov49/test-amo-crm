import React from 'react'
import './styles.scss'
interface IButton {
    text: string;
    classButton: string;
    clickButton: (e: React.SyntheticEvent<EventTarget>) => void;
}
export default function ButtonOpen({text, classButton, clickButton}: IButton) {
  return (
    <button onClick={clickButton} className={`button-open ${classButton}`} type='button'>{text}</button>
  )
}
