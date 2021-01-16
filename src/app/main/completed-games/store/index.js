import { combineReducers } from '@reduxjs/toolkit';
import contacts from './completedGameSlice';
import user from './userSlice';
import data from './gameDashboardSlice'

const reducer = combineReducers({
	contacts,
	user,
	data
});

export default reducer;
