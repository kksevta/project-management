import * as Actions from './actions';
import * as ActionTypes from './action-types';
const initialState = {

};
export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_DASHBOARD_MODEL:
      return Object.assign({}, state, {
        dashboardId: action.payload.dashboardId,
        dashboardName: action.payload.dashboardName,
        dashboardInEditMode: action.payload.dashboardInEditMode,
        status: {},
        loader: false
      })
    case ActionTypes.DASHBOARD_REMOVE_STARTED:
      return Object.assign({}, state)
    default:
      return state
  }
};