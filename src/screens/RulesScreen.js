// import React from 'react';
import React, { Component, useEffect } from 'react';
import { StyleSheet, View, Text,Dimensions, Button, TouchableOpacity, TouchableHighlight, KeyboardAvoidingView, TextInput  } from 'react-native'
const defaultwidth = Dimensions.get('window').width;

const RulesScreen = ({ navigation }) => {
    // const  signIn  = React.useContext(AuthContext);
  
    return (
      <View style={{flex:1,flexDirection:'column',justifyContent:'center'}}>
        <Text style={{textAlign:'center'}}>Rules screen</Text>
      </View>
    );
};

export default RulesScreen;