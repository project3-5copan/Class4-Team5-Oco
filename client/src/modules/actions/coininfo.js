import axios from 'axios';
import {
    LIST_COIN,
} from './types';

// 코인정보
export function listCoin(coinSym) {
    const request = axios
        .post(`/api/coininfo/${coinSym}`)
        .then(response => response.data);

    return {
        type: LIST_COIN,
        payload: request,
    };
}