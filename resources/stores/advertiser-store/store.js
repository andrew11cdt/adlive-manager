import { configureStore } from '@reduxjs/toolkit';
import { adsetReducer } from '../../pages-components/advertiser/campaign/adsetSlice';
import { campaignReducer } from '../../pages-components/advertiser/campaign/campaignSlice';
import { locationsReducer } from '../../pages-components/advertiser/screen/locationSlice';
import { areaScreenReducer } from '../../pages-components/advertiser/screen/screenSlice';


export default configureStore({
	reducer: {
		areaScreens: areaScreenReducer,
		locations: locationsReducer,
		campaigns: campaignReducer,
		adsets: adsetReducer,
	},
});