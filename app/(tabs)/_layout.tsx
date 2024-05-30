import AndroidSafeArea from '@/components/AndroidSafeArea';
import IosSafeArea from '@/components/IosSafeArea';
import theme from '@/styles/theme';

import React from 'react';
import { Platform } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import * as Notifications from 'expo-notifications';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  const colors = theme.useTheme();
  const [permissionResponse, requestPermission] = Notifications.usePermissions();

  React.useEffect(() => {
    requestPermission().then(e => console.log(e));
  }, []);

  return (
    <>
      {Platform.OS === 'ios' ? <IosSafeArea /> : <AndroidSafeArea />}
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.border,
          tabBarStyle: {
            backgroundColor: colors.background,
            borderTopWidth: 1,
            borderTopColor: colors.border,
          },
          headerShown: false,
        }}>
        <Tabs.Screen
          name='index'
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <Ionicons name='home' size={24} color={color} />,
          }}
        />
        <Tabs.Screen
          name='favorites'
          options={{
            title: 'Favorites',
            tabBarIcon: ({ color }) => <Ionicons name='heart' size={24} color={color} />,
          }}
        />
      </Tabs>
    </>
  );
}
