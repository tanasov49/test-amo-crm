import React, {useContext} from 'react'
import './styles.scss'
import { textDescriptions } from '../../../data/data'
import ButtonOpen from '../buttonOpen/buttonOpen'
import { ModalContext } from '../../../context/ModalContext'
export default function DescriptionMain() {
    const {openPopup} = useContext(ModalContext);

  return (
    <div className='description-main'>
        <h3 className='description-main__title'>Вместе с <span>бесплатной</span><span>консультацией</span> мы дарим:</h3>
        <ul className="descriptions">
            {textDescriptions.map((item, key) =>
            <li className='description-item' key={key}>
                <h4 className='description-item__title'>{item.title}</h4>
                <h4 className='description-item__title'>{item.titleMobile}</h4>
                <p className='description-item__subtitle'>{item.subtitle}</p>
            </li>
            )}
        </ul>
        <ButtonOpen clickButton={openPopup} text={'Получить консультацию'} classButton={'button-open_descriptions'} />
    </div>
  )
}
