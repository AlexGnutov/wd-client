import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import BuyingSchemeLegend from "./buying-scheme-legend/BuyingSchemeLegend";
import {format} from "date-fns";
import {useEffect} from "react";
import {requestTicketsThunk} from "../../store/thunks/tickets-thunk";
import {minutesToTimeString} from "../../utils/utils";
import ChairLayout from "./chair-layout/ChairLayout";
import BackToMain from "../../components/back-to-main/BackToMain";

function HallPage() {
    const {seance, date, selectedSeats} = useSelector(state => state.ticketConfig);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(requestTicketsThunk(date, seance));
    }, [date, seance])

    if (seance === null || date === null) {
        return (
            <BackToMain/>
        )
    }

    const {filmData, hallData} = seance;
    const bookSeats = () => {
        if (selectedSeats && selectedSeats[0]) {
            navigate('/payment');
        }
    }

    return (
        <section className="buying">
            <div className="buying__info">
                <div className="buying__info-description">
                    <h2 className="buying__info-title">{filmData.title}</h2>
                    <p className="buying__info-start">Дата: {format(new Date(date), 'yyyy-MM-dd')}</p>
                    <p className="buying__info-start">Начало сеанса: {minutesToTimeString(seance.startTime)}</p>
                    <p className="buying__info-hall">{hallData.title}</p>
                </div>
                <div className="buying__info-hint">
                    <p>Тапните дважды,<br/>чтобы увеличить</p>
                </div>
            </div>
            <div className="buying-scheme">
                <ChairLayout/>
                <BuyingSchemeLegend hall={hallData}/>
            </div>
            <button className="acceptin-button" onClick={bookSeats}>Забронировать</button>
        </section>
    )
}

export default HallPage;