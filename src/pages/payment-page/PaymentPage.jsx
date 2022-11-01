import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {calculateTotalPrice, combineSelectedSeatsString, minutesToTimeString} from "../../utils/utils";
import {bookTicketThunk} from "../../store/thunks/booking-thunk";
import {format} from "date-fns";
import BackToMain from "../../components/back-to-main/BackToMain";

function PaymentPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { seance, selectedSeats, date } = useSelector((state) => state.ticketConfig);

    if (seance === null || selectedSeats === null || date === null) {
        return (
            <BackToMain/>
        )
    }

    const { filmData, hallData } = seance;
    const getBookingCode = () => {
        const bookingData = {
            date: format(new Date(date), 'yyyy-MM-dd'),
            seanceId: seance.id,
            seats: JSON.stringify(selectedSeats),
        }
        dispatch(bookTicketThunk(bookingData, () => navigate('/ticket')));
    }

    const places = combineSelectedSeatsString(selectedSeats);
    const price = calculateTotalPrice(selectedSeats, hallData);

    if (!seance) {
        return (
            <section className="ticket">
                <header className="ticket__check">
                    <h2 className="ticket__check-title">Вы выбрали билеты:</h2>
                </header>
            </section>
        )
    }

    return (
        <section className="ticket">
            <header className="ticket__check">
                <h2 className="ticket__check-title">Вы выбрали билеты:</h2>
            </header>
            <div className="ticket__info-wrapper">
                <p className="ticket__info">На фильм:
                    <span className="ticket__details ticket__title"> {filmData.title}</span>
                </p>
                <p className="ticket__info">Места:
                    <span className="ticket__details ticket__chairs">{places}</span>
                </p>
                <p className="ticket__info">В зале:
                    <span className="ticket__details ticket__hall"> {hallData.title}</span>
                </p>
                <p className="ticket__info">Дата:
                    <span className="ticket__details ticket__start"> {format(new Date(date), 'yyyy-MM-dd')}
                    </span>
                </p>
                <p className="ticket__info">Начало сеанса: <span
                    className="ticket__details ticket__start"> {minutesToTimeString(seance.startTime)}</span>
                </p>
                <p className="ticket__info">Стоимость: <span
                    className="ticket__details ticket__cost">{price}</span> рублей
                </p>

                <button className="acceptin-button" onClick={getBookingCode}>
                    Получить код бронирования
                </button>

                <p className="ticket__hint">После оплаты билет будет доступен в этом окне, а также придёт вам на
                    почту.
                    Покажите QR-код нашему контроллёру у входа в зал.</p>
                <p className="ticket__hint">Приятного просмотра!</p>
            </div>
        </section>
    )
}

export default PaymentPage;