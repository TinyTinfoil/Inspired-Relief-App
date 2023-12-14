import { StyleSheet } from 'react-native';
import { useFonts, Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_300Light } from '@expo-google-fonts/montserrat'
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './components/welcome_screen';
import InfoScreen from './components/info';
import SelectEngagement from './components/selectengagement';
import HelperOnboard from './components/helperonboard';
import SeekerOnboard from './components/seekeronboard';

const Stack = createNativeStackNavigator();

const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw"
  },
  in: {
    opacity: 1,
    x: 0
  },
  out: {
    opacity: 0,
    x: "100vw"
  }
};

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_300Light,
    Montserrat_600SemiBold
  });
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='WelcomeScreen'
        screenOptions={{
          animation: 'slide_from_right'
        }}>
        <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name='InfoScreen' component={InfoScreen} options={{ headerShown: false }} />
        <Stack.Screen name='SelectEngagement' component={SelectEngagement} options={{ headerShown: false }} />
        <Stack.Screen name='HelperOnboard' component={HelperOnboard} options={{ headerShown: false }} />
        <Stack.Screen name='SeekerOnboard' component={SeekerOnboard} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height:'100%',
    width:'100%',
  },
});