import * as Actions from './actions';
import * as ActionTypes from './action-types';
const initialState = {
  boards: [],
  boardModalBool: false
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_BOARD_MODAL_FLAG:
      return Object.assign({}, state, {
        boardModalBool: action.payload
      })
    case ActionTypes.CREATE_BOARD:
      return Object.assign({}, state, {
        boards: state.boards.concat(action.payload)
      })
    case ActionTypes.SAVE_BOARD:
      return state
    case ActionTypes.REMOVE_BOARD:
      return state

    //    index = _.findIndex(state, { id: action.payload.id });
    //  return state.slice(0, index).concat(state.slice(index + 1))
    default:
      return state
  }
};