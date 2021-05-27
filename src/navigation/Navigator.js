// import React from 'react';
import React, { useEffect } from 'react';
import {
    Image,
    View,
    Button,
    TouchableOpacity
} from 'react-native';

import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
// import { createDrawerNavigator } from "@react-navigation/drawer";

import LoginScreen from '../screens/LoginScreen';
import TabNavigator from './TabNavigator';
import SliderScreen from '../screens/SliderScreen';
// import HomeScreen from '../screens/HomeScreen';

const AuthStack = createStackNavigator();
// const AppStack = createDrawerNavigator();
// const ProfileStack = createStackNavigator();
const AppStack = createStackNavigator();

export const AuthStackScreen = () => (
    <AuthStack.Navigator>
        {/* <AuthStack.Screen
            name="Slider"
            component={SliderScreen}
            options={{ title: "Slider", headerShown: false, }}
        /> */}

        <AuthStack.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: "Sign In", headerShown: false, }}
        />
        
        <AuthStack.Screen
          name="Tabs"
          component={TabNavigator}
          options={{ title: "Sign In", headerShown: false, }}
        />
    </AuthStack.Navigator>
);

// export const AppStackScreen = () => (
//     <AppStack.Navigator>
//         <AppStack.Screen
//             name="Home"
//             component={HomeScreen}
//             options={{ title: "Dashboard", headerShown: false, }}
//         />
//     </AppStack.Navigator>
// );