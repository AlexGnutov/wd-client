import React, { useState } from 'react';
import {
  addWeeks, eachDayOfInterval, getDate, getDay, isSameDay, isToday, isWeekend,
} from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { setTicketInfo } from '../../../store/slices/ticket-config-slice';

const today = new Date();
const dayNames = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
const daysC = eachDayOfInterval(
  {
    start: today,
    end: addWeeks(today, 1),
  },
);

const configDayStyle = (day, selected) => {
  const todayClass = isToday(day) ? 'page-nav__day_today' : '';
  const weekendClass = isWeekend(day) ? 'page-nav__day_weekend' : '';
  const chosenClass = isSameDay(day, selected) ? 'page-nav__day_chosen' : '';
  return `page-nav__day ${todayClass} ${weekendClass} ${chosenClass}`;
};

function DatesLine() {
  const { date } = useSelector((state) => state.ticketConfig);
  const dispatch = useDispatch();

  // eslint-disable-next-line no-unused-vars
  const [days, setDays] = useState(daysC);

  const setTicketDay = (dt) => {
    dispatch(setTicketInfo({ date: dt.valueOf() }));
  };

  return (
    <nav className="page-nav">
      {days.map((day) => (
        <a
          className={configDayStyle(day, new Date(date))}
          key={day.valueOf()}
          draggable={false}
          href="#0"
          onClick={(e) => {
            e.preventDefault();
            setTicketDay(day);
          }}
        >
          <span className="page-nav__day-week">{dayNames[getDay(day)]}</span>
          <span
            className="page-nav__day-number"
          >
            {getDate(day)}
          </span>
        </a>
      ))}
      {/* eslint-disable-next-line max-len */}
      {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/control-has-associated-label */}
      <a
        className="page-nav__day page-nav__day_next"
        href="#0"
        onClick={(e) => e.preventDefault()}
      />
    </nav>
  );
}

export default DatesLine;
