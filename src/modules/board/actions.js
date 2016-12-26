import * as ActionTypes from './action-types';

export const saveBoard = () => ({
    type: ActionTypes.SAVE_BOARD,
    payload: {}
});
export const createBoard = (payload) => ({
    type: ActionTypes.CREATE_BOARD,
    payload
});

export const setBoardModalFlag = (payload) => ({
    type: ActionTypes.SET_BOARD_MODAL_FLAG,
    payload
})