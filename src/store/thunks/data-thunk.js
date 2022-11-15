import { appDataErr, appDataOk, appDataReq } from '../slices/data-slice';

const HOST = process.env.REACT_APP_BASE_URL || window.location;

// eslint-disable-next-line import/prefer-default-export
export const dataThunk = () => async (dispatch) => {
  dispatch(appDataReq());

  try {
    const replyF = await fetch(HOST + process.env.REACT_APP_FILMS).then((x) => x.json());
    const replyS = await fetch(HOST + process.env.REACT_APP_SEANCES).then((x) => x.json());
    const replyH = await fetch(HOST + process.env.REACT_APP_HALLS).then((x) => x.json());
    if (replyF.status === 'ok'
                && replyS.status === 'ok'
                && replyH.status === 'ok') {
      dispatch(appDataOk({
        films: replyF.data,
        seances: replyS.data,
        halls: replyH.data,
      }));
    }
  } catch (e) {
    dispatch(appDataErr());
  }
};
