import { configureStore } from '@reduxjs/toolkit';
import {areaScreenReducer, locationsReducer} from './slice';

export default configureStore({
	reducer: {
		areaScreens: areaScreenReducer,
		locations: locationsReducer,
	},
});