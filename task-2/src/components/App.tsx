import React, {useContext} from 'react';
import Header from './header/header';
import Main from './main/main';
import Footer from './footer/footer';
import Popup from './popup/popup';
import { ModalContext } from '../context/ModalContext';
import FormAbout from './UI/formAbout/formAbout';
function App() {
  const {handleSubmitPopup, isOpenPopup, canSubmitWithEmail} = useContext(ModalContext)
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
      <Popup
            onSubmit={handleSubmitPopup}
            isOpen={isOpenPopup}
            canSubmit={canSubmitWithEmail}
        >
            <FormAbout title={'Оставьте ваши данные'} />
        </Popup>
    </div>
  );
}

export default App;
