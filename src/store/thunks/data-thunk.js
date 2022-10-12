import {appDataErr, appDataOk, appDataReq} from "../slices/data-slice";

const HOST = 'http://localhost:8000/api/';

export const dataThunk = () => {
    return async (dispatch) => {
        dispatch(appDataReq());

        try {
            const replyF = await fetch(HOST + 'films').then(x => x.json());
            const replyS = await fetch(HOST + 'seances').then(x => x.json());
            const replyH = await fetch(HOST + 'halls').then(x => x.json());
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
            console.log(e.message);
            dispatch(appDataErr());
        }
    }
}