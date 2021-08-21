import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import {favReducer, jobReducer, loadingReducer } from '../reducers'
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const initialState = {
  favourites: [],
  jobs: {},
  loading: false
}

const sonicReducer = combineReducers({
favourites: favReducer,
jobs: jobReducer,
loading: loadingReducer
})

export const configureStore = createStore(
	sonicReducer,
	initialState,
	composeEnhancers(applyMiddleware(thunk))
);