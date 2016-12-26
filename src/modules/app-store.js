import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger';


import BoardModule from 'app/board';


const RootReducer = (state = {}, action) => {
    return {
        [BoardModule.constants.NAME]: BoardModule.reducer(
            state[BoardModule.constants.NAME],
            action,
        )
    }
}
const Store = createStore(RootReducer, applyMiddleware(thunk, logger()));
export default Store;