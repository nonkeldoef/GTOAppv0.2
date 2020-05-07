import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Navigator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/home';
import HandStrength from './screens/handstrength';

export default function App() {
  const HomeStack = createStackNavigator();
  
    return (
      <NavigationContainer>
        <HomeStack.Navigator>
          <HomeStack.Screen
           name="Home"
           component={Home} 
          />
          <HomeStack.Screen
            name='HandStrength'
            component={HandStrength}
            initialParams={{
              choices: { preflopAction: '', heroPos: '', villainPos: '', boardType: '', boardDetail: '' },
            }}
          />
        </HomeStack.Navigator>
      </NavigationContainer>
    );
  }
