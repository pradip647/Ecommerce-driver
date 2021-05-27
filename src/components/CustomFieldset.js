import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Colors from '../../res/Colors';

const CustomFieldset = ({ title,data,itemPress }) => {
  return (

    <TouchableOpacity style={styles.fieldSet} onPress={itemPress}>
        <Text style={styles.legend}>{title ? title : ''}</Text>
        <View>{data}</View>
    </TouchableOpacity>
  );
};
CustomFieldset.defaultProps = {
  title: '',
};
export default CustomFieldset;

const styles = StyleSheet.create({
    fieldSet:{
        margin: 10,
        paddingHorizontal: 10,
        paddingBottom: 5,
        borderRadius: 5,
        borderWidth: 1,
        alignItems: 'center',
        // borderColor: '#000',
        borderColor:Colors.borderColor
    },
    legend:{
        position: 'absolute',
        top: -9,
        left: 10,
        fontWeight: '700',
        backgroundColor: '#FFFFFF',
        letterSpacing:0.3,
        fontSize:10,
        color:Colors.primary
    }
});
