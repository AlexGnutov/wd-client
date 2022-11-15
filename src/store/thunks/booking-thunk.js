import { bookingErr, bookingOk, bookingReq } from '../slices/booking-slice';
import { clearTicketConfig } from '../slices/ticket-config-slice';

const HOST = 'http://localhost:8000/api/';

// eslint-disable-next-line import/prefer-default-export
export const bookTicketThunk = (bookingData, cb) => async (dispatch) => {
  dispatch(bookingReq());
  try {
    const reply = await fetch(`${HOST}tickets`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookingData),
    }).then((r) => r.json());

    if (reply.status === 'ok') {
      dispatch(bookingOk(reply.data));
      dispatch(clearTicketConfig());
      cb();
    }
  } catch (e) {
    dispatch(bookingErr());
  }
};
