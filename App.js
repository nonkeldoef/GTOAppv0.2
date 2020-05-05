import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/home';
import HandStrength from './screens/handstrength'

function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Home />
    </View>
  );
}

function HandStrengthScreen() {
  return (
    <View style={{ flex: 1 }}>
      <HandStrength />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen 
          name="HandStrength" component={HandStrength} 
          initialParams={{choices: { preflopAction: '', heroPos: '', villainPos: '', boardType: '', boardDetail: ''}
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
