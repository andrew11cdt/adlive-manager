import { configureStore } from '@reduxjs/toolkit';
import areaScreensSlice from './slice';

export default configureStore({
	reducer: {
		areaScreens: areaScreensSlice,
	},
});