// what the initial state of the application will be?

import { createStore } from 'redux'
import mainReducer from '../reducers'

export const initialState = {
  favourites: {
    jobs: [],
  }
}

const configureStore = () =>
  createStore(mainReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default configureStore