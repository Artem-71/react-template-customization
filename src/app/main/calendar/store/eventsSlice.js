import { createEntityAdapter, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const dateFormat = 'YYYY-MM-DDTHH:mm:ss.sssZ';

export const getEvents = createAsyncThunk('calendarApp/events/getEvents', async () => {
	const response = await axios.get('/api/calendar-app/events');
	const data = await response.data;
	return data;
});

const eventsAdapter = createEntityAdapter({});

export const {
	selectAll: selectEvents,
	selectIds: selectEventIds,
	selectById: selectEventById
} = eventsAdapter.getSelectors(state => state.calendarApp.events);

const eventsSlice = createSlice({
	name: 'calendarApp/events',
	initialState: eventsAdapter.getInitialState({
		eventDialog: {
			type: 'new',
			props: {
				open: false
			},
			data: null
		}
	}),
	extraReducers: {
		[getEvents.fulfilled]: eventsAdapter.setAll,
	}
});

export default eventsSlice.reducer;
