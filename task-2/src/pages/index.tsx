import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../components/App';
import './index.scss'
import { ModalState } from '../context/ModalContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
      <ModalState>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ModalState>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

