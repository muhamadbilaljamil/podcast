import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

const TabNavitagor = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialIcons
              name="home"
              size={24}
              color={focused ? '#00ADB5' : '#666'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialIcons
              name="search"
              size={24}
              color={focused ? '#00ADB5' : '#666'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialIcons
              name="notifications"
              size={24}
              color={focused ? '#00ADB5' : '#666'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Reward"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialIcons
              name="stars"
              size={24}
              color={focused ? '#00ADB5' : '#666'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavitagor;
