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

const CustomplayOptions = ({imageURL,subTitle,title,buttonClick})=> {
    return (
        <View
            style={{height:100,backgroundColor:'#fff',flexDirection:'row',marginLeft:15,marginRight:15,opacity:0.5,borderRadius:10,padding:0}}>
            <View style={{flex:5,flexDirection:'row',justifyContent:'space-evenly'}}></View>
            <View style={{flex:5,backgroundColor:'#d6e8ef',borderTopStartRadius:100}}></View>

            <View style={{position:'absolute',height:100,backgroundColor:'#fff',width:'100%',flex:1,flexDirection:'row',borderRadius:10}}>

                <View style={{flex:5,flexDirection:'row',justifyContent:'space-evenly'}}>
                    <View style={{flex:1,flexDirection:'row',justifyContent:'center'}}>
                        <View style={{justifyContent:'center'}}>
                            <Image
                                style={{width:45,height:45,resizeMode:'cover'}}
                                source={imageURL}
                                // source={require('../../res/imgs/logo.png')}
                            />
                        </View>
                    </View>
                    <View style={{flex:1.6,flexDirection:'row',justifyContent:'center'}}>
                        <View style={{justifyContent:'center'}}>
                            <Text style={{fontWeight:'700',letterSpacing:1,fontSize:13,textAlign:'center'}}>
                                {/* | GAME | */} {subTitle}
                            </Text>
                            <Text style={{fontWeight:'700',letterSpacing:1,fontSize:14,textAlign:'center'}}>
                                {/* | FATAFAT | */} {title}
                            </Text>
                        </View>
                    </View>

                </View>
                <View style={{flex:5,backgroundColor:'#368cba',borderTopStartRadius:100,justifyContent:'center'}}>
                    <View style={{justifyContent:'center',flexDirection:'row'}}>
                        <TouchableOpacity onPress={buttonClick}>
                            <Text style={{borderWidth:1,borderRadius:10,paddingBottom:5,paddingTop:5,paddingLeft:12,paddingRight:12,fontSize:12,borderColor:'#3484b4',color:'#3484b4',backgroundColor:'#fff',fontWeight:'700',opacity:1}}>PLAY NOW</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </View>

        </View>
    )
}
const styles=StyleSheet.create({

})
export default CustomplayOptions;