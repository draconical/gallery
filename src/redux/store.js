import {createStore, combineReducers} from 'redux';
import galleryReducer from './galleryReducer';

let reducers = combineReducers({
    gallery: galleryReducer
})

let store = createStore(reducers)

window.store = store;

export default store;