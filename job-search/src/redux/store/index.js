import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import {favReducer, jobReducer} from '../reducers'
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const initialState = {
  favourites: [],
  jobs: {}
}

const sonicReducer = combineReducers({
favourites: favReducer,
jobs: jobReducer
})

export const configureStore = createStore(
	sonicReducer,
	initialState,
	composeEnhancers(applyMiddleware(thunk))
);