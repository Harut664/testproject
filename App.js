import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image  } from 'react-native'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import Movies from './src/screen/movescreen';
import MovieDetails from './src/screen/movkino';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >

        <Stack.Screen name="Movies" component={Movies} screenOptions={{ headerShown: false }} />
        <Stack.Screen name="MovieDetails" component={MovieDetails} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};