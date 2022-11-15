import { format } from 'date-fns';
import { getAvailableSeats } from '../../utils/utils';
import { clearTicketConfig, setTicketInfo } from '../slices/ticket-config-slice';

const HOST = 'http://localhost:8000/api/';

// eslint-disable-next-line import/prefer-default-export
export const requestTicketsThunk = (date, seance) => async (dispatch) => {
  const url = `${HOST}tickets/${seance.id}/${format(new Date(date), 'yyyy-MM-dd')}`;

  try {
    const reply = await fetch(url).then((r) => r.json());
    if (reply.status === 'ok') {
      const availableSeats = getAvailableSeats(seance.hallData?.seats, reply.data);
      dispatch(setTicketInfo({ availableSeats }));
    }
  } catch (e) {
    dispatch(clearTicketConfig());
  }
};
