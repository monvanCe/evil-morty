import theme from '@/styles/theme';

import React from 'react';
import { SafeAreaView } from 'react-native';

import { Tabs } from 'expo-router';

export default function TabLayout() {
  const colors = theme.useTheme();
  return (
    <>
      <SafeAreaView style={{ backgroundColor: colors.background }} />
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
          name='profile'
          options={{
            title: 'Profile',
          }}
        />
      </Tabs>
    </>
  );
}
