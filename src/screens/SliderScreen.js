// import React from 'react';
import React, { Component, useEffect } from 'react';
import { StyleSheet,SafeAreaView, View, Text,Dimensions,Image, Button, TouchableOpacity,KeyboardAvoidingView} from 'react-native'
import Colors from '../../res/Colors';
import CustomButton from '../components/CustomButton';
const defaultwidth = Dimensions.get('window').width;


const buttonContainerStyle={marginLeft:10,marginRight:10}
const themeButtonStyle={borderWidth:1,borderRadius:20,
    paddingBottom:12,paddingTop:12,paddingLeft:12,paddingRight:12,
    fontSize:12,borderColor:Colors.primary,color:'#fff',backgroundColor:Colors.primary,
    fontWeight:'700',opacity:1,textAlign:'center',letterSpacing:1,marginLeft:40,marginRight:40}



const SliderScreen = ({ navigation }) => {
  //navigation.replace('Tabs', { screen: 'Home' });


    return (
        <SafeAreaView style={styles.container}>
            {/* === Background IMAGES ============ */}
            <Image 
                style={{flex:1,top:'-10%',width:150,resizeMode:'contain', alignSelf:'flex-start'}}
                source={require('../../res/imgs/left-top.png')}
            />
            <Image 
                style={{flex:1,width:'100%',resizeMode:'contain', alignSelf:'flex-end',justifyContent:'flex-end',right:'-20%'}}
                source={require('../../res/imgs/bottom-left.png')}
            />

            <View style={{position:'absolute',top:0,flex:1,width:'100%',height:'100%',zIndex:0.1}}>
                <View style={{flex:1,justifyContent:'center',flexDirection:'column'}}>
                    <View style={{justifyContent:'center',flexDirection:'row',paddingTop:'15%'}}>
                        <Image 
                            style={{width:'45%',resizeMode:'contain'}}
                            source={require('../../res/imgs/logo.png')}
                        />
                    </View>
                </View>
                <View style={{flex:1.2,justifyContent:'space-around'}}>
                    <View style={{flex:1,flexDirection:'column',justifyContent:'center'}}>
                        <Text style={{textAlign:'center',fontSize:22,fontWeight:'700',color:Colors.primary,letterSpacing:1}}>FATAFAT 
                            <Text style={{fontWeight:'100'}}>GAMEPLAY</Text>
                        </Text>
                        <Text 
                        style={{textAlign:'center',fontSize:9,fontWeight:'600',
                        color:'#000',letterSpacing:1,paddingTop:7}}
                        >EARN MONEY FROM HOME ANYTIME ANYWHERE
                        </Text>
                    </View>

                    <View style={{flex:1,justifyContent:'center'}}>
                        <View style={{justifyContent:'center',flexDirection:'row'}}>
                            <View style={{height:20,width:20,borderRadius:20,backgroundColor:Colors.primary}}></View>
                            <View style={{height:20,width:20,borderRadius:20,backgroundColor:'#d6e8ef',marginLeft:20,marginRight:20}}></View>
                            <View style={{height:20,width:20,borderRadius:20,backgroundColor:'#d6e8ef'}}></View>
                        </View>
                    </View>
                    <View style={{flex:1,justifyContent:'flex-start',flexDirection:'column'}}>
                        <CustomButton
                            title={'GET STARTED'}
                            buttonClick={()=>{
                                navigation.replace('Tabs', { screen: 'Home' });
                            }}
                            containerStyle={buttonContainerStyle}
                            buttonStyle={themeButtonStyle}
                        />
                    </View>


                </View>
            </View>



        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
    //   backgroundColor: Colors.primary,
      flex: 1,
      flexDirection: "column"
    },
});

export default SliderScreen;