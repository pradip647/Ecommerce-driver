// import React from 'react';
import React, { Component, useEffect } from 'react';
import { StyleSheet, View, Text,Dimensions, Button, TouchableOpacity, TouchableHighlight, KeyboardAvoidingView, TextInput  } from 'react-native'
const defaultwidth = Dimensions.get('window').width;

const TimeScreen = ({ navigation }) => {
    // const  signIn  = React.useContext(AuthContext);
  
    return (
      <View style={{flex:1,flexDirection:'column',justifyContent:'center'}}>
        <Text style={{textAlign:'center'}}>Time screen</Text>
      </View>
    );
};

export default TimeScreen;