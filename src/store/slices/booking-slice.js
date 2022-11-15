import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ticketInformation: null,
  loading: null,
  error: null,
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    bookingReq: (state) => ({
      ...state,
      loading: true,
      error: false,
    }),
    bookingErr: (state) => ({
      ...state,
    }),
    bookingOk: (state, action) => {
      const ticketInformation = action.payload;
      return {
        ...state,
        loading: false,
        ticketInformation,
      };
    },
    clearBookingData: () => ({
      ...initialState,
    }),
  },
});

export const {
  bookingReq,
  bookingErr,
  bookingOk,
  clearBookingData,
} = bookingSlice.actions;

export default bookingSlice.reducer;
