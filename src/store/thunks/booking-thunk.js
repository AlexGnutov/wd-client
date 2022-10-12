import {bookingOk, bookingReq} from "../slices/booking-slice";
import {clearTicketConfig} from "../slices/ticket-config-slice";

const HOST = 'http://localhost:8000/api/';

export const bookTicketThunk = (bookingData, cb) => {
    return async (dispatch) => {
        dispatch(bookingReq());
        try {
            const reply = await fetch(HOST + 'tickets', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(bookingData),
            }).then(r => r.json());

            if (reply.status === 'ok') {
                dispatch(bookingOk(reply.data));
                dispatch(clearTicketConfig());
                cb();
            }
        } catch (e) {
        }
    }
}