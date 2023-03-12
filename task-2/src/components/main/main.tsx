import React, {useContext} from 'react'
import TitleMain from '../UI/titleMain/titleMain'
import DescriptionMain from '../UI/descriptionMain/descriptionMain'
import './styles.scss'


export default function Main() {

  return (
    <main className='main'>
        <TitleMain />
        <DescriptionMain />
    </main>
  )
}
