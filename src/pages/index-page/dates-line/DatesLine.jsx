//for tests only
import {addWeeks, eachDayOfInterval, getDate, getDay, isSameDay, isToday, isWeekend} from "date-fns";
import {useDispatch, useSelector} from "react-redux";
import {setTicketInfo} from "../../../store/slices/ticket-config-slice";
import {useState} from "react";

const today = new Date();
const dayNames = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
const daysC =  eachDayOfInterval(
    {
        start: today,
        end: addWeeks(today, 1),
    }
);

const configDayStyle = (day, selected) => {
    const today = isToday(day) ? 'page-nav__day_today' : '';
    const weekend = isWeekend(day) ? 'page-nav__day_weekend' : '';
    const choosen = isSameDay(day, selected) ? 'page-nav__day_chosen' : '';
    return `page-nav__day ${today} ${weekend} ${choosen}`
}

function DatesLine() {
    const {date} = useSelector((state) => state.ticketConfig);
    const dispatch = useDispatch();

    //TODO: add Dates line scroll - replace days constant with function
    const [days, setDays] = useState(daysC);

    const setTicketDay = (date) => {
        dispatch(setTicketInfo({date: date.valueOf()}));
    }

    return (
        <nav className="page-nav">
            {days.map(day =>
                <a className={configDayStyle(day, new Date(date))}
                   key={day.valueOf()}
                   draggable={false}
                   href="#0"
                   onClick={(e) => {
                       e.preventDefault();
                       setTicketDay(day);
                   }}>
                    <span className="page-nav__day-week">{dayNames[getDay(day)]}</span><span
                    className="page-nav__day-number">{getDate(day)}</span>
                </a>
            )}
            <a className="page-nav__day page-nav__day_next" href="#0"
               onClick={(e) => e.preventDefault()}
            />
        </nav>
    )
}

export default DatesLine;