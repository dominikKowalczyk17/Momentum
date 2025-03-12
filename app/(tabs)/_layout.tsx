import React from 'react';
import { Platform } from 'react-native';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import WeightLifterIcon from '@/components/ui/WeightLifterIcon';

export default function _layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#5280e2',
        // Na iOS ustawiamy pasek tabów jako absolutny, żeby ewentualnie zastosować np. efekt blur
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name='index' // odpowiada plikowi: app/index.tsx (HomeScreen)
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons name='home' size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='quickstart' // odpowiada plikowi: app/(tabs)/quickstart.tsx
        options={{
          title: 'Quickstart',
          tabBarIcon: ({ color }) => (
            <WeightLifterIcon width={24} height={24} color='#000' />
          ),
        }}
      />
      <Tabs.Screen
        name='workouts' // odpowiada plikowi: app/(tabs)/workouts.tsx lub app/workouts.tsx, zależy od struktury
        options={{
          title: 'Workouts',
          tabBarIcon: ({ color }) => (
            <Ionicons name='list' size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='stats' // odpowiada plikowi: app/(tabs)/stats.tsx
        options={{
          title: 'Stats',
          tabBarIcon: ({ color }) => (
            <Ionicons name='stats-chart' size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='settings' // odpowiada plikowi: app/(tabs)/settings.tsx
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => (
            <Ionicons name='settings' size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
