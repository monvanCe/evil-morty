import { appTheme, storageKeys } from '@/utils/enums';
import storage from '@/utils/storage';

import { createSlice } from '@reduxjs/toolkit';

interface AppConfigState {
  appTheme: appTheme;
}

const initialState: AppConfigState = {
  appTheme: appTheme.Dark,
};

export const appConfigSlice = createSlice({
  name: 'appConfig',
  initialState,
  reducers: {
    setAppTheme: (state, action) => {
      state.appTheme = action.payload;
      storage.setItem(storageKeys.AppTheme, action.payload);
    },
  },
});

export const { setAppTheme } = appConfigSlice.actions;

export default appConfigSlice.reducer;
