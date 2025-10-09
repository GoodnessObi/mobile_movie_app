import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import React from 'react';

const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: true,
        tabBarInactiveTintColor: '#ffffff',
        tabBarActiveTintColor: '#AB8BFF',
        tabBarStyle: {
          backgroundColor: '#0f0023',
          position: 'absolute',
          marginBottom: 52,
          height: 25,
          borderRadius: 50,
          overflow: 'hidden',
          borderWidth: 1,
          borderColor: '#0f0023',
          marginHorizontal: 20,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              size={20}
              name={focused ? 'home' : 'home-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          title: 'Search',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              size={20}
              name={focused ? 'search' : 'search-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          headerShown: false,
          title: 'Saved',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              size={20}
              name={focused ? 'bookmark' : 'bookmark-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome
              size={20}
              name={focused ? 'user' : 'user-o'}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _Layout;
