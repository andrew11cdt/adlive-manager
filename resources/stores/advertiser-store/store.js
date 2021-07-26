import { configureStore } from '@reduxjs/toolkit';
import { locationsReducer } from '../../pages-components/advertiser/screen/locationSlice';
import { areaScreenReducer } from '../../pages-components/advertiser/screen/screenSlice';


export default configureStore({
	reducer: {
		areaScreens: areaScreenReducer,
		locations: locationsReducer,
	},
});