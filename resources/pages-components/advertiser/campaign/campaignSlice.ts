import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import api from "../../../api-clients/advertiser.api-client"
import { compareTime } from '../../../utils/common.util';

export const getCampaignsAsync = createAsyncThunk(
	'campaign/getCampaigns',
	async () => {
		const res: any = await api.getCampaigns()
		const result = {}
		if (res?.data) res.data.forEach((e: any) => result[e.id] = e)
		return result
		
	}
);
export const createCampaignAsync: any = createAsyncThunk(
	'campaign/createCampaign',
	async (newCampaign) => {
    const res:any = await api.createCampaign(newCampaign);
		if (res?.data) return {id: res.data.id, data: res.data} 
	}
)
export const updateCampaignAsync: any = createAsyncThunk(
	'campaign/updateCampaign',
	async (params: {id, data}) => {
    const res:any = await api.updateCampaign(params.id, params.data);
		if (res) return params 
	}
)

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
		const {id, data} = params
    const res:any = await api.updateCampaignTargetScreenConditions(id, data);
		if (res) return {id, data}
	}
)

export const updateCampaignScheduleAsync: any = createAsyncThunk(
	'campaign/updateSchedule',
	async (params: {id, data}) => {
		const {id, data} = params
    const res:any = await api.updateCampaignSchedule(id, data);
		if (res) return {id, data}
	}
)


const campaignAdapter = createEntityAdapter()
const initialState = campaignAdapter.getInitialState({
	status: 'idle',
	error: null,
})
const setLoading = (state, action) => { state.status = 'loading' }
export const campaignSlice = createSlice({
	name: 'campaigns',
	initialState,
	reducers: {},
	extraReducers: {
		[getCampaignsAsync.pending.type]: setLoading,
		[getCampaignsAsync.fulfilled.type]: (state, action) => {
			state.status = 'succeeded'
			campaignAdapter.upsertMany(state, action.payload)
		},
		[createCampaignAsync.pending.type]: setLoading,
		[createCampaignAsync.fulfilled.type]: (state, action) => {
			state.status = 'succeeded'
			const {id, data} = action.payload || {}
			state.entities[id] = data
			state.ids.push(id)
		},
		[updateCampaignAsync.pending.type]: setLoading,
		[updateCampaignAsync.fulfilled.type]: (state: any, action) => {
			state.status = 'succeeded'
			const { id, data } = action.payload || {}
			if (data) Object.assign(state.entities[id], data) 
		},
		[updateScreenConditionsAsync.pending.type]: setLoading,
		[updateScreenConditionsAsync.fulfilled.type]: (state: any, action) => {
			state.status = 'succeeded'
			const { id, data } = action.payload || {}
			if (data) state.entities[id] = {
				...state.entities[id],
				targetScreenConditions: data
			} 
		},
		[updateCampaignScheduleAsync.pending.type]: setLoading,
		[updateCampaignScheduleAsync.fulfilled.type]: (state: any, action) => {
			state.status = 'succeeded'
			const { id, data } = action.payload || {}
			if (data) state.entities[id] = {
				...state.entities[id],
				...data
			}
		},
	}
});

export const campaignReducer = campaignSlice.reducer;

export const {
	selectAll: selectCampaigns,
	selectById: selecCampaignById,
} = campaignAdapter.getSelectors((state: any) => state.campaigns)

function sortCampaignByUpdateDate(data) {
	return data.sort((pre, cur) => compareTime(pre.updatedAt, cur.updatedAt))
}
export const selectCampaignsObj = (state) => state.campaigns.entities
export const selectCampaignStt = (state) => state.campaigns.status
export const selectSortedCampaignByUpdateDate = (state) => sortCampaignByUpdateDate(Object.values(state.campaigns.entities))

// export const selectCountLocations = (state, id ) => state.campaigns.entities[id]?.targetScreenConditions?.detail?.rules?.find(({ruleTypes}) => ruleTypes === 'LOCATION')?.value?.locationIds?.length
