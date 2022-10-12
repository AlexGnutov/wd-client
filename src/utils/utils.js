
// Convert start time of séance in minutes to time string HH:MM
export const minutesToTimeString = (number) => {
    let hours = (number - number % 60) / 60;
    let minutes = number % 60;
    hours = hours < 10 ? '0' + hours : '' + hours;
    minutes = minutes < 10 ? '0' + minutes : '' + minutes;
    return `${hours}:${minutes}`;
};

// Puts issued tickets data on seats array and marks seats as 't' - taken
export const getAvailableSeats = (seats, tickets) => {
    const availableSeats = JSON.parse(seats);
    console.log(tickets);

    tickets.forEach((ticket) => {
        JSON.parse(ticket.seats).forEach((seat) => {
            availableSeats[seat.row][seat.col] = 't';
        });
    })
    return availableSeats;
}

// Scan over selected seats and retrieve types, get prices acc. the types and sums them
export const calculateTotalPrice = (selectedSeats, hallData) => {
    return selectedSeats.map((s) => s.seat)
        .map((type) => {
            if (type === 'v') {
                return hallData['vipPrice'];
            }
            if (type === 's') {
                return hallData['standardPrice'];
            }
            return 0;
        }).reduce((acc, curr) => acc + curr);
}

// Combines selected seats information into one string
//TODO: improve this method - add grouping by row
export const combineSelectedSeatsString = (selectedSeats) => {
    if (Array.isArray(selectedSeats)) {
        return selectedSeats.map((s) => `ряд ${s.row + 1} место ${s.col + 1}`).join(', ');
    } else {
        return JSON.parse(selectedSeats).map((s) => `ряд ${s.row + 1} место ${s.col + 1}`).join(', ');
    }
}

