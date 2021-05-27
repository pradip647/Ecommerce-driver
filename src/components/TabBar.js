import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../../res/Colors';
// import LeadsIcon from '../res/icons/LeadsIcon';
// import SalesIcon from '../res/icons/SalesIcon';
// import TrainingIcon from '../res/icons/TrainingIcon';
// import SettingsIcon from '../res/icons/SettingsIcon';
// import Button from './Button';
// import Colors from '../res/Colors';
// import Fonts from '../res/Fonts';
import {Icon} from 'react-native-elements';

const TabBar = ({ state, descriptors, navigation }) => {
  const [activeRoute, setActiveRoute] = useState('Home');

  useEffect(() => {
    setActiveRoute(state.routes[state.index].name);
  }, [state.index]);

  const getRouteKey = (name) =>
    state.routes.filter((route) => route.name === name)[0].key;

  const onNavigate = (name) => {
    const routeKey = getRouteKey(name);
    const event = navigation.emit({
      type: 'tabPress',
      target: routeKey,
      canPreventDefault: true,
    });
    if (!(activeRoute === name) && !event.defaultPrevented) {
      navigation.navigate(name);
    }
  };

  return (
    <View style={styles.container}>

    <TouchableOpacity
        accessibilityRole="button"
        accessibilityStates={activeRoute === 'Home' ? ['selected'] : []}
        onPress={() => onNavigate('Home')}>
        
        <Icon
            // name={'home-outline'}
            name={'list-outline'}
            // name={activeRoute == 'Home' ? 'md-home':'md-home-outline'}
            type="ionicon"
            size={18}
            color={activeRoute == 'Home' ? Colors.primary:Colors.black}
        />
        <Text
            style={[styles.textStyle, {color:activeRoute == 'Home' ? Colors.primary:Colors.black}]}
        >
            Orders
        </Text>
    </TouchableOpacity>


      <TouchableOpacity
        accessibilityRole="button"
        accessibilityStates={activeRoute === 'Result' ? ['selected'] : []}
        onPress={() => onNavigate('Result')}>
        
        <Icon
            name={activeRoute == 'Result' ? 'podium':'podium-outline'}
            type="ionicon"
            size={18}
            color={activeRoute == 'Result' ? Colors.primary:Colors.black}
        />
        <Text
            style={[styles.textStyle, {color:activeRoute == 'Result' ? Colors.primary:Colors.black}]}
        >
            Result
        </Text>
      </TouchableOpacity>



      <TouchableOpacity
        accessibilityRole="button"
        accessibilityStates={activeRoute === '' ? ['selected'] : []}
        onPress={() => onNavigate('Rules')}>
        
        <Icon
            name={activeRoute == 'Rules' ? 'podium':'podium-outline'}
            type="ionicon"
            size={18}
            color={activeRoute == 'Rules' ?Colors.primary:Colors.black}
        />
        <Text
            style={[styles.textStyle, {color:activeRoute == 'Rules' ? Colors.primary:Colors.black}]}
        >
            Rules
        </Text>
      </TouchableOpacity>



      <TouchableOpacity
        accessibilityRole="button"
        accessibilityStates={activeRoute === '' ? ['selected'] : []}
        onPress={() => onNavigate('Time')}>
        
        <Icon
            name={activeRoute == 'Time' ? 'podium':'podium-outline'}
            type="ionicon"
            size={18}
            color={activeRoute == 'Time' ? Colors.primary:Colors.black}
        />
        <Text
            style={[styles.textStyle, {color:activeRoute == 'Time' ? Colors.primary:Colors.black}]}
        >
            Time
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        accessibilityRole="button"
        accessibilityStates={activeRoute === '' ? ['selected'] : []}
        onPress={() => onNavigate('Account')}>
        
        <Icon
            name={activeRoute == 'Account' ? 'podium':'podium-outline'}
            
            type="ionicon"
            size={18}
            color={activeRoute == 'Account' ? Colors.primary:Colors.black}
        />
        <Text
            style={[styles.textStyle, {color:activeRoute == 'Account' ? Colors.primary:Colors.black}]}
        >
            Account
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 16,
    // backgroundColor:Colors.primary
    backgroundColor:'#fff'
  },
  label: {
    color: Colors.border,
    // fontFamily: Fonts.fontFamily.helvetica.normal,
    fontSize: 11,
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginTop: -8,
    alignSelf: 'flex-start',
  },
  buttonText: {
    fontSize: 11,
  },
  textStyle:{
      fontSize:10,
      fontWeight:'600',
      letterSpacing:0.2
  }
});
