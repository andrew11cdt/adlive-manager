import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import api from "../../../api-clients/advertiser.api-client"


export const getScreenConditionsAsync: any = createAsyncThunk(
	'campaign/getScreenConditions',
	async (id) => {
    const res:any = await api.getCampaignTargetScreenConditions(id);
		if (res?.data) return {id, data: res.data}
	}
)
export const updateScreenConditionsAsync: any = createAsyncThunk(
	'campaign/updateScreenConditions',
	async (params: {id, data}) => {
    const res:any = await api.updateCampaignTargetScreenConditions(params.id, params.data);
		if (res?.data) return {id: params.id, data: res.data}
	}
)

const adapter = createEntityAdapter()
const initialState = adapter.getInitialState({
	status: 'idle',
	error: null,
})
const setLoading = (state, action) => { state.status = 'loading' }
export const screenConditionsSlice = createSlice({
	name: 'screenConditions',
	initialState,
	reducers: {},
	extraReducers: {
		[getScreenConditionsAsync.pending.type]: setLoading,
		[getScreenConditionsAsync.fulfilled.type]: (state, action) => {
			state.status = 'succeeded'
			console.log({action});
      const {id, data} = action.payload
      state.entities[id] = data
      state.ids.push(id)
		},
		[updateScreenConditionsAsync.pending.type]: setLoading,
		[updateScreenConditionsAsync.fulfilled.type]: (state, action) => {
			state.status = 'succeeded'
			const {id, data} = action.payload
      state.entities[id] = data
		}
	}
});

export const screenConditionsReducer = screenConditionsSlice.reducer;

export const {
	selectAll: selectCampaigns,
	selectById: selecCampaignById,
} = adapter.getSelectors((state: any) => state.screenConditions)

export const selectCampaignsObj = (state) => state.screenConditions.entities
export const selectCampaignStt = (state) => state.screenConditions.status

