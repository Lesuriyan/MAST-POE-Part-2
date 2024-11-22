import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AddMenuScreen from './screens/AddMenuScreen';
import FilterScreen from './screens/FilterScreen';
import StartersScreen from './screens/StartersScreen';
import MainsScreen from './screens/MainsScreen';
import DessertsScreen from './screens/DessertsScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="AddMenuScreen" component={AddMenuScreen} />
      <Stack.Screen name="FilterScreen" component={FilterScreen} />
      <Stack.Screen name="StartersScreen" component={StartersScreen} />
      <Stack.Screen name="MainsScreen" component={MainsScreen} />
      <Stack.Screen name="DessertsScreen" component={DessertsScreen} />
    </Stack.Navigator>
  );
}