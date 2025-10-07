import FontAwesome from '@expo/vector-icons/FontAwesome';
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
          tabBarIcon: ({ color }) => (
            <FontAwesome size={20} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          title: 'Search',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={20} name="search" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          headerShown: false,
          title: 'Saved',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={20} name="bookmark" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={20} name="user" color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _Layout;
