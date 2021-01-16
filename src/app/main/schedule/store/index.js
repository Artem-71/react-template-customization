import { combineReducers } from '@reduxjs/toolkit';
import events from './scheduleSlice';

const reducer = combineReducers({
	events
});

export default reducer;
