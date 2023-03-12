// Для использования всех имеющихся обработчиков на странице
import React, { createContext, useEffect, useRef, useState} from "react";
// Интерфейс для использования ModalContext

interface iModalContext {
  values: any,
  errors: any,
  closePopup: () => void,
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void,
  rootRef: any,
  isOpenPopup: boolean,
  openPopup: () => void,
  canSubmitWithEmail: boolean,
  handleSubmitPopup: (e: React.SyntheticEvent<EventTarget>) => void,
}
// Интерфейс для значений values
interface IValues {
  name: string,
  phone: string | number,
  comment: string,
  email: string
}
// Интерфейс для ошибок валидации
interface IValid {
  validName: boolean,
  validPhone: boolean,
  validComment: boolean,
  validEmail: boolean
}
export const ModalContext =  createContext<iModalContext>({
  values: Array,
  errors: Array,
  closePopup: () => {},
  handleChange: () => {},
  rootRef: null,
  isOpenPopup: false,
  openPopup: () => {},
  canSubmitWithEmail: false,
  handleSubmitPopup: () => {},
})
export const ModalState = ({children}: {children: React.ReactNode}) => {
// Дефолтные значения для инпутов форм
  const defaultValues:IValues = {
    name: '',
    phone: '',
    comment: '',
    email: ''
  }
// Дефолтные значения для валидации форм
  const defaultValid:IValid = {
    validName: false,
    validPhone: false,
    validComment: false,
    validEmail: false
  }
  // Хук состояния values
  const [values, setValues] = useState(defaultValues)
  // Хук состояния ошибок
  const [errors, setErrors] = useState(defaultValues)
  // Хук состояния валидации форм
  const [valid, setValid] = useState(defaultValid)
   // Валидация кнопки submit для окна popup с email
  const [canSubmitWithEmail, setCanSubmitWithEmail] = useState(false)
    // Хук состояния открытия окна Franchise
  const [isOpenPopup, setIsOpenPopup] = useState(false)
  // Хук состояния открытия меню для разрешения < 1024px

  // Хук для отслеживания клика вне окна Popup
  const rootRef = useRef<HTMLDivElement>()

  // Открытие окна Fraschise
  const openPopup = () => {
    setIsOpenPopup(true)
  } 
  // Закрытие всех Popup, приведение дефолтных значений при любом закрытии, а также обнуление ошибок
  const closePopup = () => {
    setValues(defaultValues)
    setErrors(defaultValues)
    setIsOpenPopup(false)
    setCanSubmitWithEmail(false)
  }
    // Клик вне окна popup
  const handleClickOutSide = (e: any) => {
      if (rootRef.current && !rootRef.current.contains(e.target) && e.target.classList.contains('popup_opened')) {
        closePopup()
      } 
    }
    // Отслеживание клика вне элемента
  useEffect(() => {
      document.addEventListener('click', handleClickOutSide, true)
      return () => {
        document.removeEventListener('click', handleClickOutSide, true)
      }
    },[handleClickOutSide])

    // Отправка submit для popup с email
  const handleSubmitPopup = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    setValues(defaultValues);
    closePopup();
    console.log(values)
  }

  // Валидация формы
  const handleValidate = (name: string, value: string) => {
    let regesName = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/;
    let regesPhone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    let regesEmail =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let isErrors = errors
    let {validName, validPhone, validComment, validEmail} = valid
    if (name === 'name') {
      if(!value) {
        isErrors.name = 'Имя обязательно'
        validName = false
      } else {
        validName = regesName.test(value)
        isErrors.name = validName
        ? ''
        : 'Минимум 2 знака'
      }
    }
    if (name === 'phone') {
      value = value.replace(/\D/g, "")
      if(!value) {
        validPhone = false
        isErrors.phone = 'Телефон обязательно'
      } else {
        validPhone = regesPhone.test(value)
        isErrors.phone = validPhone
          ? ''
          : 'Телефон должен быть 11 знаков'
      }
    }
    if (name === 'comment') {
      if (value) {
        validComment = false
        
      } else if (!value) {
        validComment = regesName.test(value)
        isErrors.comment = validComment
        ? ''
        : 'только текст'
      }
    }
    if (name === 'email') {
      if(!value) {
        validEmail = false
        isErrors.email = 'Email обязательно'
      } else {
        validEmail = regesEmail.test(value)
        isErrors.email = validEmail
        ? ''
        : 'Email должен быть корректным'
      }
    }
    setErrors(isErrors)
    setValid({
      validName: validName,
      validPhone: validPhone,
      validComment: validComment,
      validEmail: validEmail
    })
    setCanSubmitWithEmail(validName && validPhone && !validComment && validEmail)
  }
  // Отслежживание value формы и валидация ошибок
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target
    handleValidate(name, value)
    setValues(
      {
        ...values,
        [name]: value
      },
    )
  }
  return (
      <ModalContext.Provider value={{closePopup, rootRef, openPopup, handleSubmitPopup, isOpenPopup, canSubmitWithEmail, handleChange, values, errors}}>
          {children}
      </ModalContext.Provider>
  )
}