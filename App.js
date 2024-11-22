import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/AppNavigator';
import { MenuProvider } from './src/MenuContext';

export default function App() {
  return (
    <MenuProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </MenuProvider>
  );
}
