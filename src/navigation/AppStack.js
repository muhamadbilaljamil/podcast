import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabNavitagor from './TabNavigator';


import {DetailScreen} from '../screens';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
import {AuthContext} from '../context/AuthContext';

const AppStack = () => {
  const {logout} = useContext(AuthContext);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={TabNavitagor}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppStack;

