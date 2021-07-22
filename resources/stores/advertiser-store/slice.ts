import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from "../../api-clients/advertiser.api-client"
export const getScreenAsync = createAsyncThunk(
	'screens/getScreenAsync',
	async (locations: any[]) => {
		if (!locations) return {}
		const areaIds = locations?.reduce(
			(res, cur) => (res = [...res, ...cur.areas]),
			[]
		)?.map(e => e.id)

		const resq = await new Promise(async (resolve, reject) => {
			let data = {} // [areaId] : screen[]
			areaIds.forEach(async (id, index) => {
				const res: any = await api.getAreaScreen(id)
				if (res.data) {
					data = { ...data, [id]: res.data }
				}
				if (Object.values(data).length === areaIds.length) {
					resolve(data)
				}
			})
		})
		return resq
	}
);
export const getLocationAsync = createAsyncThunk(
	'locations/getLocationAsync',
	async () => {
		const res = await api.getLocations()
		if (res?.code === 0) {
			return res.data.map(e => {
				if (e.areas) {
					e.areas = e.areas.sort((pre, cur) => pre.order && cur.order && pre.order > cur.order ? 1 : -1)
				}
				return e
			})
		}
	}
)
export const createScreenAsync: any = createAsyncThunk(
	'areaScreens/createScreenAsync',
	async (params: any) => {
		const {areaId, data} = params
		const res:any = await api.createScreen(areaId, data)
		if (res?.data) {
			return { id: areaId, data}	
		}
	}
)

export const createAreaAsync: any = createAsyncThunk(
	'areaScreens/createAreaAsync',
	async (params: any) => {
		const { locationId, data } = params
		const res: any = await api.createArea(locationId, data)
		if (res?.data) {
			return { id: res.data.id, data: [res.data] }
		}
	}
)

export const areaScreensSlice = createSlice({
	name: 'areaScreens',
	initialState: {},
	reducers: {
		updateScreen: (state, action: { payload: { areaId: string, data: any } }) => {
			state[action.payload.areaId] = (action.payload.data);
		},
		removeScreen: (state, action) => {
			delete state[action.payload.id];
		},
	},
	extraReducers: {
		[getScreenAsync.fulfilled.type]: (state, action) => {
			return action.payload
		},
		[createAreaAsync.fulfilled.type]: (state, action) => {
			return {
				...state,
				[action.payload.id]: []
			} 
		},
		[createScreenAsync.fulfilled.type]: (state, action) => {
			if (action.payload) {
				const {id, data} = action.payload
				const screens = [...state[id], data]
				return {
					...state,
					[id]: screens
				}
			}
		},
	}
});

export const locationsSlice = createSlice({
	name: 'locations',
	initialState: null,
	reducers: {
		updateLocations: (state, action) => {
			state = (action.payload);
		}
	},
	extraReducers: {
		[getLocationAsync.fulfilled.type]: (state, action) => {
			return action.payload
		},
	}
});

export const { updateScreen, removeScreen } = areaScreensSlice.actions;

export const areaScreenReducer = areaScreensSlice.reducer;
export const locationsReducer = locationsSlice.reducer;