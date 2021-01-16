import { combineReducers } from '@reduxjs/toolkit';
import postGame from './postGameSlice';

const reducer = combineReducers({
	postGame
});

export default reducer;