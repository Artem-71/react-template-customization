import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

export const getContacts = createAsyncThunk('scheduled-games-app/scheduled-games/getContacts', async (routeParams, { getState }) => {
	routeParams = routeParams || getState().scheduledGamesApp.contacts.routeParams;
	const response = await axios.get('/api/scheduled-games-app/scheduled-games', {
		params: routeParams
	});
	const data = await response.data;

	return { data, routeParams };
});

const contactsAdapter = createEntityAdapter({});

export const { selectAll: selectContacts, selectById: selectContactsById } = contactsAdapter.getSelectors(
	state => state.scheduledGamesApp.contacts
);

const contactsSlice = createSlice({
	name: 'scheduled-games-app/scheduled-games',
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
