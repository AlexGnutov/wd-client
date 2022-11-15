import { configureStore } from '@reduxjs/toolkit';
import appReducer from './slices/data-slice';
import ticketConfigReducer from './slices/ticket-config-slice';
import bookingReducer from './slices/booking-slice';

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    app: appReducer,
    ticketConfig: ticketConfigReducer,
    booking: bookingReducer,
  },
});
