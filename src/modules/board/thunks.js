import * as Actions from './actions'
import * as Model from './model'
const createBoardThunk = (boardData) => {
  return function (dispatch, getState) {
    Model.createBoard(boardData).then((board) => {
      dispatch(Actions.createBoard(board));
      dispatch(Actions.setBoardModalFlag(false));
    })
  };
}

export { createBoardThunk }