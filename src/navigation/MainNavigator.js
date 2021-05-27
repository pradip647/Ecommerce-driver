// import React, { useMemo } from 'react';
// import React from 'react';
import React, {useEffect } from 'react';

import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { AuthStackScreen } from './Navigator';

const RootStack = createStackNavigator();
export const RootStackScreen = ({ isUserLoggedIn }) => (
    <RootStack.Navigator 
    headerMode="none"
    >
        {/* {isUserLoggedIn ? (
        <RootStack.Screen
            name="App"
            component={AppStackScreen}
            options={{
            animationEnabled: false
            }}
        />
        ) : 
        isUserLoggedIn.skip ? (
        <RootStack.Screen
            name="App"
            component={AppStackScreen}
            options={{
            animationEnabled: false
            }}
        />
        ) :
        (
        <RootStack.Screen
            name="Auth"
            component={AuthStackScreen}
            options={{
            animationEnabled: false
            }}
        />
        )} */}


        {/* {isUserLoggedIn ? (
            <RootStack.Screen
                name="App"
                component={AppStackScreen}
                options={{
                animationEnabled: false
                }}
            />
        ) : 
        (
            <RootStack.Screen
                name="Auth"
                component={AuthStackScreen}
                options={{
                animationEnabled: false
                }}
            />
        )} */}



        <RootStack.Screen
            name="Auth"
            component={AuthStackScreen}
            options={{
                animationEnabled: false,
                title:'Sign in'
            }}
        />

    </RootStack.Navigator>
);