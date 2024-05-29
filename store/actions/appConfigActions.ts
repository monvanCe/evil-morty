import { appTheme, storageKeys } from '@/utils/enums';
import storage from '@/utils/storage';

import { setAppTheme } from '../slices/appConfigSlice';
import { store } from '../store';

export const loadAppTheme = async () => {
  const theme = await storage.getItem(storageKeys.AppTheme);
  const dispath = store.dispatch;

  if (theme) {
    dispath(setAppTheme(theme as appTheme));
  }
};
