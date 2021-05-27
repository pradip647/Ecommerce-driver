import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ResultScreen from '../screens/ResultScreen';
import TabBar from '../components/TabBar';
import RulesScreen from '../screens/RulesScreen';
import AccountScreen from '../screens/AccountScreen';
import TimeScreen from '../screens/TimeScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator 
    tabBar={(props) => <TabBar {...props} />}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Result" component={ResultScreen} />
      <Tab.Screen name="Rules" component={RulesScreen} />
      <Tab.Screen name="Time" component={TimeScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
