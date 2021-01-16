import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

export const getContacts = createAsyncThunk('completed-games-app/dashboard/data', async (routeParams, { getState }) => {
	routeParams = routeParams || getState().completedGameDashboard.data.routeParams;
	const response = await axios.get('/api/completed-games-app/completed-games', {
		params: routeParams
	});
	const data = await response.data;

	return { data, routeParams };
});

const contactsAdapter = createEntityAdapter({});

export const { selectAll: selectContacts, selectById: selectContactsById } = contactsAdapter.getSelectors(
	state => state.completedGameDashboard.data
);

const contactsSlice = createSlice({
	name: 'completed-games-app/completed-games',
	initialState: contactsAdapter.getInitialState({
		searchText: '',
		routeParams: {},
	}),
	reducers: {
		setContactsSearchText: {
			reducer: (state, action) => {
				state.searchText = action.payload;
			},
			prepare: event => ({ payload: event.target.value || '' })
		},
	},
	extraReducers: {
		[getContacts.fulfilled]: (state, action) => {
			const { data, routeParams } = action.payload;
			contactsAdapter.setAll(state, data);
			state.routeParams = routeParams;
			state.searchText = '';
		}
	}
});

export const {
	setContactsSearchText,
} = contactsSlice.actions;

export default contactsSlice.reducer;
