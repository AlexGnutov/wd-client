import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DatesLine from './dates-line/DatesLine';
import Movies from './movies/Movies';
import { dataThunk } from '../../store/thunks/data-thunk';
import { clearTicketConfig } from '../../store/slices/ticket-config-slice';
import { clearBookingData } from '../../store/slices/booking-slice';

function IndexPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dataThunk());
    dispatch(clearTicketConfig());
    dispatch(clearBookingData());
  }, [dispatch]);

  return (
    <>
      <DatesLine />
      <Movies />
    </>
  );
}

export default IndexPage;
