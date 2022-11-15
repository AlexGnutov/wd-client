import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  films: [],
  halls: [],
  seances: [],
  loading: false,
  error: false,
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    appDataReq: (state) => ({
      ...state,
      loading: true,
      error: false,
    }),
    appDataErr: (state) => ({
      ...state,
      loading: false,
      error: true,
    }),
    appDataOk: (state, action) => {
      const { films, halls, seances } = action.payload;

      return {
        ...state,
        loading: false,
        films,
        halls,
        seances,
      };
    },
  },
});

export const { appDataReq, appDataErr, appDataOk } = dataSlice.actions;

export default dataSlice.reducer;
