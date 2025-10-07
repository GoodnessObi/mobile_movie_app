import { Tabs } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const TabIIcon = ({ title, focused }: { title: string; focused: boolean }) => {
  return (
    <View
      className={`min-h-[16px] min-w-[60px] flex-1  items-center justify-center rounded-full ${focused ? 'bg-accent' : 'bg-transparent'}`}
    >
      <Text className={`text-sm font-medium text-white`}> {title} </Text>
    </View>
  );
};

// tabBarStyle: { backgroundColor: '#0f0023', borderRadius: 50, marginHorizontal: 20, marginBottom: 36, height: 18, position: 'absolute', overflow: 'hidden', borderWidth: 1, borderColor: '#0f0023' }

const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        },
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
          tabBarIcon: ({ focused }) => (
            <TabIIcon title="Home" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          title: 'Search',
          tabBarIcon: ({ focused }) => (
            <TabIIcon title="Search" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          headerShown: false,
          title: 'Saved',
          tabBarIcon: ({ focused }) => (
            <TabIIcon title="Saved" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <TabIIcon title="Profile" focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _Layout;
