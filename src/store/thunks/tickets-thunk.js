import {format} from "date-fns";
import {getAvailableSeats} from "../../utils/utils";
import {setTicketInfo} from "../slices/ticket-config-slice";

const HOST = 'http://localhost:8000/api/';

export const requestTicketsThunk = (date, seance) => {
    return async (dispatch) => {
        const url = HOST + `tickets/${seance.id}/${format(new Date(date), 'yyyy-MM-dd')}`;

        try {
            const reply = await fetch(url).then(r => r.json());
            if (reply.status === 'ok') {
                const availableSeats = getAvailableSeats(seance['hallData']?.seats, reply.data);
                dispatch(setTicketInfo({availableSeats}));
            }
        } catch (e) {
            console.log(e.message);
        }

    }
}