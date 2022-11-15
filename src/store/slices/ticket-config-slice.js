import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  date: new Date().valueOf(),
  seance: null,
  availableSeats: [],
  selectedSeats: [],
};

const ticketConfigSlice = createSlice({
  name: 'ticketConfig',
  initialState,
  reducers: {
    setTicketInfo: (state, action) => {
      const ticketInfo = action.payload;
      return {
        ...state,
        ...ticketInfo,
      };
    },
    clearTicketConfig: (state) => ({
      ...state,
      ...initialState,
    }),
  },
});

export const {
  setTicketInfo,
  clearTicketConfig,
} = ticketConfigSlice.actions;

export default ticketConfigSlice.reducer;
