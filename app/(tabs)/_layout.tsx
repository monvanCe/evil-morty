import AndroidSafeArea from '@/components/AndroidSafeArea';
import IosSafeArea from '@/components/IosSafeArea';
import theme from '@/styles/theme';

import React from 'react';
import { Platform } from 'react-native';

import { Tabs } from 'expo-router';

export default function TabLayout() {
  const colors = theme.useTheme();

  return (
    <>
      <>{Platform.OS === 'ios' ? <IosSafeArea /> : <AndroidSafeArea />}</>
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
          }}
        />
        <Tabs.Screen
          name='favorites'
          options={{
            title: 'Favorites',
          }}
        />
      </Tabs>
    </>
  );
}
