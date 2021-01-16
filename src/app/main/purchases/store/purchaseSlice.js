import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

export const getPurchases = createAsyncThunk('purchasesApp/purchases', async () => {
	const response = await axios.get('/api/purchases-app/purchases');
	const data = await response.data;
	return data;
});

const purchasesAdapter = createEntityAdapter({});

export const { selectAll: selectOrders, selectById: selectOrderById } = purchasesAdapter.getSelectors(
	state => state.purchasesApp.purchases
);

const purchaseSlice = createSlice({
	name: 'purchasesApp/purchases',
	initialState: purchasesAdapter.getInitialState({
		searchText: ''
	}),
	reducers: {
		setOrdersSearchText: {
			reducer: (state, action) => {
				state.searchText = action.payload;
			},
			prepare: event => ({ payload: event.target.value || '' })
		}
	},
	extraReducers: {
		[getPurchases.fulfilled]: purchasesAdapter.setAll
	}
});

export const { setOrdersSearchText } = purchaseSlice.actions;

export default purchaseSlice.reducer;
