import React from 'react'
import './styles.scss';
interface ITitle {
    title: string;
    classTitle: string;
}
export default function TitleBlock({title, classTitle}: ITitle) {
  return (
    <h3 className={`title-block ${classTitle}`}>{title}</h3>
  )
}
