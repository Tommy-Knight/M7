import * as React from 'react';

export interface IAppProps {
}

export function App (props: IAppProps) {
  return (
    <div>
      
    </div>
  );
}

// ./src/store/index.ts

// import { combineReducers, Dispatch, Reducer, Action, AnyAction } from "redux";
// import { routerReducer, RouterState } from "react-router-redux";
// import { LayoutState, layoutReducer } from "./layout";

// The top-level state object.
//
// `connected-react-router` already injects the router state typings for us,
// so we can ignore them here.
// export interface ApplicationState {
// 	layout: LayoutState;
// }

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
// export const rootReducer = combineReducers<ApplicationState>({
// 	layout: layoutReducer,
// });

// ///////////////////////////////////////////////////////////////////////////

// what the initial state of the application will be?

// import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
// import favReducer from '../reducers/favourites'
// import jobReducer from '../reducers/jobs'
// import thunk from "redux-thunk"

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


// export const initialState = {
//   favourites: [],
//   jobs: []
// }

// const mainReducer = combineReducers({
// favourites: favReducer,
// jobs: jobReducer
// })

// const configureStore = () =>
//   createStore(mainReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

// export default configureStore


//////////////////////////////////////////////////////////////
// import { createStore, combineReducers, applyMiddleware, compose } from "redux";
// import favouritesReducer from "../reducers/favourites";
// import playlistReducer from "../reducers/playlist";
// import thunk from "redux-thunk";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export const initialState = {
// 	favourites: {
// 		songs: [],
// 	},
// 	currentPlaylist: {
// 		songs: [],
// 		currentSong: {
// 			title: "",
// 			artist: {
// 				name: "",
// 			},
// 		},
// 		cover: "https://developer.spotify.com/assets/branding-guidelines/icon4@2x.png",
// 	},
// };

// const rootReducer = combineReducers({
// 	favourites: favouritesReducer,
// 	currentPlaylist: playlistReducer,
// });

// const configureStore = () =>
// 	createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(thunk)));

// export default configureStore;



// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import { addSongToFavourites, removeSongFromFavourites, getPlaylistAction } from "../actions";
// import { PlayCircle, Heart, HeartFill } from "react-bootstrap-icons";

// const mapStateToProps = (state) => ({
// 	...state,
// });

// const mapDispatchToProps = (dispatch) => ({
// 	addToFavourites: (song) => {
// 		dispatch(addSongToFavourites(song));
// 	},
// 	removeFromFavourites: (song) => {
// 		dispatch(removeSongFromFavourites(song));
// 	},
// 	setPlaylist: (song, album) => {
// 		dispatch(getPlaylistAction(song, album));
// 	},
// });
