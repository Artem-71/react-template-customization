import { createEntityAdapter, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import moment from 'moment';

export const dateFormat = 'YYYY-MM-DDTHH:mm:ss.sssZ';

export const getPostGames = createAsyncThunk('postGameApp/pos-game/getPostGame', async () => {
	const response = await axios.get('/api/post-game-app/post-game');
	const data = await response.data;
	return data;
});

export const addPostGame = createAsyncThunk('schedule-app/add-schedule', async (newEvent, { dispatch }) => {
	const response = await axios.post('/api/post-game-app/add-post-game', {
		newEvent
	});
	const data = await response.data;

	return data;
});

const eventsAdapter = createEntityAdapter({});

export const {
	selectAll: selectEvents,
	selectIds: selectEventIds,
	selectById: selectEventById
} = eventsAdapter.getSelectors(state => state.postGamePage.postGame);

const eventsSlice = createSlice({
	name: 'postGameApp/postGame',
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
						dateTime: moment(event.dateTime).format(dateFormat).toString(),
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
		}
	},
	extraReducers: {
		[getPostGames.fulfilled]: eventsAdapter.setAll,
		[addPostGame.fulfilled]: eventsAdapter.addOne,
	}
});

export const {
	openNewEventDialog,
	closeNewEventDialog,
	openEditEventDialog,
	closeEditEventDialog
} = eventsSlice.actions;

export default eventsSlice.reducer;
