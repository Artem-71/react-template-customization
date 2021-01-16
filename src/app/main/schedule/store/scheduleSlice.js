import { createEntityAdapter, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import moment from 'moment';

export const dateFormat = 'YYYY-MM-DDTHH:mm:ss.sssZ';

export const getEvents = createAsyncThunk('schedule-app/schedule/getSchedule', async () => {
	const response = await axios.get('/api/schedule-app/schedule');
	const data = await response.data;

	return data;
});

export const addEvent = createAsyncThunk('schedule-app/add-schedule', async (newEvent, { dispatch }) => {
	const response = await axios.post('/api/schedule-app/add-schedule', {
		newEvent
	});
	const data = await response.data;

	return data;
});

export const updateEvent = createAsyncThunk('schedule-app/update-schedule', async (event, { dispatch }) => {
	const response = await axios.post('/api/schedule-app/update-schedule', { event });
	const data = await response.data;

	return data;
});

export const removeEvent = createAsyncThunk('schedule-app/remove-schedule', async (eventId, { dispatch }) => {
	const response = await axios.post('/api/schedule-app/remove-schedule', { eventId });
	const data = await response.data;

	return data.id;
});

const eventsAdapter = createEntityAdapter({});

export const {
	selectAll: selectEvents,
	selectIds: selectEventIds,
	selectById: selectEventById
} = eventsAdapter.getSelectors(state => state.scheduleApp.events);

const eventsSlice = createSlice({
	name: 'scheduleApp/schedule',
	initialState: eventsAdapter.getInitialState({
		eventDialog: {
			type: 'new',
			props: {
				open: false
			},
			data: null
		}
	}),
	reducers: {
		openNewEventDialog: {
			prepare: event => {
				const payload = {
					type: 'new',
					props: {
						open: true
					},
					data: {
						start: moment(event.start).format(dateFormat).toString(),
					}
				};
				return { payload };
			},
			reducer: (state, action) => {
				state.eventDialog = action.payload;
			}
		},
		openEditEventDialog: {
			prepare: event => {
				const payload = {
					type: 'edit',
					props: {
						open: true
					},
					data: {
						...event,
						start: moment(event.start).format(dateFormat).toString(),
					}
				};
				return { payload };
			},
			reducer: (state, action) => {
				state.eventDialog = action.payload;
			}
		},
		closeNewEventDialog: (state, action) => {
			state.eventDialog = {
				type: 'new',
				props: {
					open: false
				},
				data: null
			};
		},
		closeEditEventDialog: (state, action) => {
			state.eventDialog = {
				type: 'edit',
				props: {
					open: false
				},
				data: null
			};
		}
	},
	extraReducers: {
		[getEvents.fulfilled]: eventsAdapter.setAll,
		[addEvent.fulfilled]: eventsAdapter.addOne,
		[updateEvent.fulfilled]: eventsAdapter.upsertOne,
		[removeEvent.fulfilled]: eventsAdapter.removeOne
	}
});

export const {
	openNewEventDialog,
	closeNewEventDialog,
	openEditEventDialog,
	closeEditEventDialog
} = eventsSlice.actions;

export default eventsSlice.reducer;
