import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import IndexPage from './pages/index-page/IndexPage';
import HallPage from './pages/hall-page/HallPage';
import PaymentPage from './pages/payment-page/PaymentPage';
import TicketPage from './pages/ticket-page/TicketPage';
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<IndexPage />} />
          <Route path="seance/:seanceId" element={<HallPage />} />
          <Route path="payment" element={<PaymentPage />} />
          <Route path="ticket" element={<TicketPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
