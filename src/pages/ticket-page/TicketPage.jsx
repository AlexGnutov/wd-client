import React from 'react';
import { useSelector } from 'react-redux';
import { combineSelectedSeatsString, minutesToTimeString } from '../../utils/utils';
import BackToMain from '../../components/back-to-main/BackToMain';

function TicketPage() {
  const { ticketInformation } = useSelector((state) => state.booking);

  if (!ticketInformation) {
    return (
      <BackToMain />
    );
  }

  const {
    filmTitle, hallTitle, startTime, seats,
  } = ticketInformation;

  const places = combineSelectedSeatsString(seats);
  return (
    <section className="ticket">
      <header className="ticket__check">
        <h2 className="ticket__check-title">Электронный билет</h2>
      </header>

      <div className="ticket__info-wrapper">
        <p className="ticket__info">
          На фильм:
          <span className="ticket__details ticket__title">
            {' '}
            {filmTitle}
          </span>
        </p>
        <p className="ticket__info">
          Места:
          <span className="ticket__details ticket__chairs">
            {' '}
            {places}
          </span>
        </p>
        <p className="ticket__info">
          В зале:
          <span className="ticket__details ticket__hall">
            {' '}
            {hallTitle}
          </span>
        </p>
        <p className="ticket__info">
          Начало сеанса:
          <span className="ticket__details ticket__start">
            {' '}
            {minutesToTimeString(startTime)}
          </span>
        </p>
        <img className="ticket__info-qr" src={`https://qrcode.tec-it.com/API/QRCode?data=${ticketInformation}`} alt={' '} />

        <p className="ticket__hint">
          Покажите QR-код нашему контроллеру для подтверждения
          бронирования.
        </p>
        <p className="ticket__hint">Приятного просмотра!</p>
      </div>
    </section>
  );
}

export default TicketPage;
