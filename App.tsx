/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler'; 
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from './_screen/home';
import StartersScreen from './_screen/starters';
import MainsScreen from './_screen/mains';
import DessertsScreen from './_screen/dessert';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#ff6347' }, 
          headerTintColor: '#fff', 
          headerTitleAlign: 'center', 
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Chef's Menu" }} />
        <Stack.Screen name="Starters" component={StartersScreen} />
        <Stack.Screen name="Mains" component={MainsScreen} />
        <Stack.Screen name="Desserts" component={DessertsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
