import { combineReducers } from '@reduxjs/toolkit';
import purchases from './purchaseSlice';

const reducer = combineReducers({
	purchases,
});

export default reducer;
