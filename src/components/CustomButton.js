import React from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
    Image,Dimensions
} from 'react-native';
import Colors from '../../res/Colors';
import {Icon, Badge} from 'react-native-elements';

const CustomButton = ({title,buttonClick,containerStyle,buttonStyle})=> {
    return (
        
        <TouchableOpacity style={containerStyle ? containerStyle : {marginLeft:10,marginRight:10}} onPress={buttonClick}>
            <Text 
            style={buttonStyle ? buttonStyle :
                {borderWidth:1,borderRadius:20,
                    paddingBottom:10,paddingTop:10,paddingLeft:12,paddingRight:12,
                    fontSize:12,borderColor:'#3484b4',color:'#3484b4',backgroundColor:'#fff',
                    fontWeight:'700',opacity:1,textAlign:'center'}
                }
            >
                {/* CLICK HERE TO GAMES RULES */}{title}
            </Text>
        </TouchableOpacity>
    )
}
const styles=StyleSheet.create({

})
export default CustomButton;