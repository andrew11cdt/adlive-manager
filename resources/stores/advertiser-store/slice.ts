import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from "../../api-clients/advertiser.api-client"
export const getScreenAsync = createAsyncThunk(
	'screens/getScreenAsync',
	async () => {
		const locations = await api.getLocations()
		if (!locations.data) return { areaScreens: {} }
		const areaIds = locations.data?.reduce(
			(res, cur) => (res = [...res, ...cur.areas]),
			[]
		)?.map(e => e.id)

		const resq = await new Promise(async (resolve, reject) => {
			let data = {} // [areaId] : screen[]
			areaIds.forEach(async (id, index) => {
				const res:any = await api.getAreaScreen(id)
				if (res.data) {
					data = {...data, [id]: res.data}
				}
				if (index + 1 === areaIds.length) {
					resolve(data)
				}
			})
		})
		return { areaScreens: resq }
	}
);

export const areaScreensSlice = createSlice({
	name: 'areaScreens',
	initialState: {},
	reducers: {
		updateScreen: (state, action) => {
			state[action.payload.id] = (action.payload);
		},
		removeScreen: (state, action) => {
			delete state[action.payload.id];
		},
	},
	extraReducers: {
		[getScreenAsync.fulfilled.type]: (state, action) => {
			return action.payload.areaScreens
		},
	}
});

export const { updateScreen, removeScreen } = areaScreensSlice.actions;

export default areaScreensSlice.reducer;