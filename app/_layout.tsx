import { loadAppTheme } from '@/store/actions/appConfigActions';
import { loadFavoriteCharacters, loadInitialCharacters } from '@/store/actions/characterActions';
import { loadInitialEpisodes } from '@/store/actions/episodeActions';
import { store, useAppSelector } from '@/store/store';
import Theme, { themes } from '@/styles/theme';
import { appTheme } from '@/utils/enums';

import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-reanimated';
import { Provider } from 'react-redux';

import * as Notifications from 'expo-notifications';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

SplashScreen.preventAutoHideAsync();

function RootLayout() {
  const currentTheme = useAppSelector(state => state.appConfig.appTheme);
  const colors = themes[currentTheme];

  React.useEffect(() => {
    async function load() {
      await loadAppTheme();
      await loadInitialEpisodes();
      await loadInitialCharacters();
      await loadFavoriteCharacters();
    }
    load().then(() => SplashScreen.hideAsync());
  }, []);

  React.useEffect(() => {
    requestAnimationFrame(() => {
      StatusBar.setBarStyle(currentTheme === appTheme.Light ? 'dark-content' : 'light-content');
    });
  }, [currentTheme]);

  return (
    <Theme.ThemeProvider theme={colors}>
      <Stack>
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        <Stack.Screen name='+not-found' />
      </Stack>
    </Theme.ThemeProvider>
  );
}

export default function ProviderWrapper() {
  return (
    <Provider store={store}>
      <RootLayout />
    </Provider>
  );
}
