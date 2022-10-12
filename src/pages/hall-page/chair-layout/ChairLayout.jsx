import Chair from "../chair/Chair";
import {useDispatch, useSelector} from "react-redux";
import {setTicketInfo} from "../../../store/slices/ticket-config-slice";

const maskSeats = (available, selected) => {
    const masked = JSON.parse(JSON.stringify(available));
    selected.forEach((seat) => {
        masked[seat.row][seat.col] = 'sl';
    });
    return masked;
}

export default function ChairLayout() {
    const {availableSeats, selectedSeats} = useSelector(state => state.ticketConfig);
    const dispatch = useDispatch();

    const selectSeat = (row, col, seat) => {
        if (seat !== 's' && seat !== 'v' && seat !== 'sl') {
            return;
        }
        if (seat === 'sl') {
            const unselectIdx = selectedSeats.findIndex(seat => (seat.row === row && seat.col === col));
            const reducedSeats = JSON.parse(JSON.stringify(selectedSeats));
            reducedSeats.splice(unselectIdx, 1);
            dispatch(setTicketInfo({selectedSeats: reducedSeats}));
        } else {
            const selected = {row, col, seat};
            const newSeats = JSON.parse(JSON.stringify(selectedSeats));
            newSeats.push(selected);
            dispatch(setTicketInfo({selectedSeats: newSeats}));
        }
    }

    const maskedSeats = maskSeats(availableSeats, selectedSeats);

    return (
        <div className="buying-scheme__wrapper">
            {maskedSeats.map((seatsRow, row) =>
                <div key={row} className="buying-scheme__row">
                    {seatsRow.map((seat, col) =>
                        <Chair key={col} type={seat} onClick={
                            () => {
                                selectSeat(row, col, seat);
                            }
                        }/>
                    )}
                </div>
            )}
        </div>
    )
}