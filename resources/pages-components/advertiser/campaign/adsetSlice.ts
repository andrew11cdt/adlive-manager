import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import api from "../../../api-clients/advertiser.api-client"

export const getCampaignAdsetsAsync:any = createAsyncThunk(
	'adset/getAdsets',
	async (id: any) => {
		const res: any = await api.getCampaignAdsSet(id);
		if (res?.data?.length) {
			const adset = res.data[0]
      adset.adsSetMediaList = adset.adsSetMediaList?.filter(
        (e) => !!e.withMedia
      );
			return { campaignId: id, data: adset }
    }
	}
);
export const updateAdsetAsync: any = createAsyncThunk(
	'adset/updateAdset',
	async (params: {id, data}) => {
    const res:any = await api.updateAdsSetMedia(params.id, params.data);
		console.log(res);
		if (res?.data) return { campaignId: params.id, adsSetMediaList: res.data }
	}
)


const adsetAdapter = createEntityAdapter()
const initialState = adsetAdapter.getInitialState({
	status: 'idle',
	error: null,
})
const setLoading = (state, action) => { state.status = 'loading' }
export const adsetSlice = createSlice({
	name: 'adsets',
	initialState,
	reducers: {},
	extraReducers: {
		[getCampaignAdsetsAsync.pending.type]: setLoading,
		[getCampaignAdsetsAsync.fulfilled.type]: (state, action) => {
			state.status = 'succeeded'
			const {campaignId, data} = action.payload
			if (data) {
				state.entities[campaignId] = data
				if (!state.ids.includes(campaignId)) state.ids.push(campaignId)
			}
		},
		[updateAdsetAsync.pending.type]: setLoading,
		[updateAdsetAsync.fulfilled.type]: (state:any, action) => {
			state.status = 'succeeded'
			const {campaignId, adsSetMediaList} = action.payload || {}
			if (adsSetMediaList) {
				state.entities[campaignId] = {...state.entities[campaignId], adsSetMediaList}
				if (!state.ids.includes(campaignId)) state.ids.push(campaignId)
			}
		},

	}
});

export const adsetReducer = adsetSlice.reducer;

export const {
	selectAll: selectAdsets,
	selectById: selecAdsetById,
} = adsetAdapter.getSelectors((state: any) => state.adsets)

export const selectAdsetsObj = (state) => state.adsets.entities

