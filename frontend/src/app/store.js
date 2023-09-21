import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import guideReducer from '../features/guides/guideSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    guide: guideReducer
  },
});