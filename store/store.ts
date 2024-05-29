import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';

import slices from './slices';

export const store = configureStore({
  reducer: {
    appConfig: slices.appConfigSlice,
    episode: slices.episodeSlice,
    character: slices.characterSlice,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
