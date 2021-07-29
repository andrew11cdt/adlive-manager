import { createAsyncThunk, createEntityAdapter, createSelector, createSlice } from '@reduxjs/toolkit';
import api from "../../../api-clients/advertiser.api-client"

export const getLocationAsync = createAsyncThunk('locations/getLocationAsync', async () => {
	const res = await api.getLocations()
	if (res?.data) {
		return res.data.reduce((res, e) => {
			if (e.areas) {
				e.areas = e.areas.sort(({ order: preOrder }, { order: curOrder }) => preOrder && curOrder && preOrder > curOrder ? 1 : -1)
			}
			return { ...res, [e.id]: e }
		}, {})
	}
}
)
const locationsAdapter = createEntityAdapter()
const initialState = locationsAdapter.getInitialState({
	status: 'idle',
	error: null
})
const setLoading = (state, action) => { state.status = 'loading' }

export const locationsSlice = createSlice({
	name: 'locations',
	initialState,
	reducers: {
		updateLocations: locationsAdapter.upsertOne
	},
	extraReducers: {
		[getLocationAsync.pending.type]: setLoading,
		[getLocationAsync.fulfilled.type]: (state, action) => {
			state.status = "succeeded"
			locationsAdapter.upsertMany(state, action.payload)
		}
	}
});


export const locationsReducer = locationsSlice.reducer;

export const {
	selectAll: selectAllAreaIds,
} = locationsAdapter.getSelectors((state: any) => state.locations.reduce((res, location) => [...res, ...location.areas], []))

export const {
	selectAll: selectLocations,
	selectById: selectLocationById,
} = locationsAdapter.getSelectors((state: any) => state.locations)

export const selectAreasObj = (state) => {
	const arr = Object.values(state.locations.entities)
	const obj = {}
	arr.map(l => {
		l['areas']?.map(e => obj[e.id] = e)
	})
	return obj
}
export const selectAreas = (state) => {
	const arr = Object.values(state.locations.entities)
	const res = []
	arr.map(l => {
		l['areas']?.map(e => res.push(e))
	})
	return res
}