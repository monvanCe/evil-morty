import { appTheme, storageKeys } from '@/utils/enums';
import storage from '@/utils/storage';

import { createSlice } from '@reduxjs/toolkit';

interface AppConfigState {
  appTheme: appTheme;
  contentPage: number;
}

const initialState: AppConfigState = {
  appTheme: appTheme.Dark,
  contentPage: 0,
};

export const appConfigSlice = createSlice({
  name: 'appConfig',
  initialState,
  reducers: {
    setAppTheme: (state, action) => {
      state.appTheme = action.payload;
      storage.setItem(storageKeys.AppTheme, action.payload);
    },
    setPage: (state, action) => {
      state.contentPage = action.payload;
    },
  },
});

export const { setAppTheme, setPage } = appConfigSlice.actions;

export default appConfigSlice.reducer;
