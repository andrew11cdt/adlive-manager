import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import api from "../../../api-clients/advertiser.api-client"
import { selectAllAreaIds } from './locationSlice';

export const getScreenAsync = createAsyncThunk(
	'screens/getScreenAsync',
	async (locations: any[]) => {
		if (!locations) return {}
		const areaIds = locations?.reduce(
			(res, cur) => [...res, ...cur.areas],
			[]
		)?.map(e => e.id)

		const resq:any = await new Promise(async (resolve, reject) => {
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
export const createScreenAsync: any = createAsyncThunk(
	'areaScreens/createScreenAsync',
	async (params: any) => {
		const {areaId, data} = params
		const res:any = await api.createScreen(areaId, data)
		if (res?.data) {
			return { id: areaId, data: res.data}	
		}
	}
)
export const deleteScreenAsync: any = createAsyncThunk(
	'areaScreens/deleteScreenAsync',
	async (id) => {
		const res:any = await api.deleteScreen(id)
		return id
	}
)
export const createAreaAsync: any = createAsyncThunk(
	'areaScreens/createAreaAsync',
	async (params: any) => {
		const { locationId, data } = params
		const res: any = await api.createArea(locationId, data)
		if (res?.data) {
			return { [res.data.id]: [] }
		}
	}
)
const areaScreenAdapter = createEntityAdapter()
const initialState = areaScreenAdapter.getInitialState({
    status: 'idle',
    error: null,
  })
const setLoading = (state, action) => {state.status = 'loading'}
export const areaScreensSlice = createSlice({
	name: 'areaScreens',
	initialState,
	reducers: {
		updateScreen: areaScreenAdapter.upsertOne,
		removeScreen: areaScreenAdapter.removeOne
	},
	extraReducers: {
		[getScreenAsync.pending.type]: setLoading,
		[getScreenAsync.fulfilled.type]: (state, action) => {
			state.status = 'succeeded'
			state.entities = action.payload
			state.ids = Object.keys(action.payload).map(e => Number(e))
			// areaScreenAdapter.upsertMany(state, action.payload)
		},
		[createAreaAsync.pending.type]: setLoading,
		[createAreaAsync.fulfilled.type]: (state, action) => {
			state.status = 'succeeded'
			areaScreenAdapter.upsertOne(state, action.payload)
		},
		[createScreenAsync.fulfilled.type]: (state: any, action) => {
			if (action.payload) {
				const {id, data} = action.payload
				state.entities[id] = [...state.entities[id], data]
				state.ids.push(id)
			}
		},
		[deleteScreenAsync.pending.type]: setLoading,
		[deleteScreenAsync.fulfilled.type]: (state: any, action) => {
			state.status = 'succeeded'
			const screenId = action.payload
			const areaIds = Object.keys(state.entities)
			const areaId = areaIds.find(id => {
				const hasScreenId = !!state.entities[id].find(({id}) => id == screenId)
				return hasScreenId
			})
			if (areaId) state.entities[areaId] = state.entities[areaId].filter(e => e.id !== screenId)
		}
	}
});

export const { updateScreen, removeScreen } = areaScreensSlice.actions;
export const areaScreenReducer = areaScreensSlice.reducer;

export const {
	selectAll: selectAreaScreens,
	selectById: selecScreenByAreaId,
	selectIds: selectAreaIds,
  } = areaScreenAdapter.getSelectors((state: any) => state.areaScreens)

  export const selectAreaScreensObj = (state) => state.areaScreens.entities

