import * as React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginScreen from './Authentication/Login'
import RegisterScreen from './Authentication/Register'
import DashBoard from './Authentication/DashBoard'
import WelcomeScreen from './Authentication/Welcome'

const Stack = createNativeStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Register' component={RegisterScreen} />
        <Stack.Screen name='DashBoard' component={DashBoard} />
        <Stack.Screen
          name='Welcome'
          component={WelcomeScreen}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
