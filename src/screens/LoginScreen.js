// import React from 'react';
import React, { Component, useEffect, useState } from 'react';
import { StyleSheet,SafeAreaView, View, Text,Dimensions,Image, Button, TouchableOpacity,KeyboardAvoidingView, TextInput, ImageBackground, Platform} from 'react-native'
import Colors from '../../res/Colors';
import Fonts from '../../res/Fonts';
import CustomButton from '../components/CustomButton';
import CustomFieldset from '../components/CustomFieldset';

import {Icon, Badge} from 'react-native-elements';

const defaultwidth = Dimensions.get('window').width;

const textPadding = Dimensions.get('window').width-55

const buttonContainerStyle={marginLeft:10,marginRight:10}
const themeButtonStyle={borderWidth:1,
	borderRadius:8,
    paddingBottom:12,paddingTop:12,paddingLeft:12,paddingRight:12,
    fontSize:12,borderColor:Colors.primary,color:'#fff',backgroundColor:Colors.primary,
    fontWeight:'700',opacity:1,textAlign:'center',letterSpacing:1}



	// const image = { uri:  'res/imgs/background.jpeg'};

const LoginScreen = ({ navigation }) => {
  //navigation.replace('Tabs', { screen: 'Home' });
	const [emailValue, setEmail] = useState("");
  	const [passwordValue, setPassword] = useState("");

	/* == For initial value reset == */
	useEffect(() => { setEmail(""); setPassword("") }, []);

	const changeEmailValue = (value) =>{ setEmail(value) }
	const changePasswordValue = (value) =>{ setPassword(value) }

	/* == Value change callback == */
	useEffect(() => {
		console.log('Do something after counter has changed', emailValue);
 	}, [passwordValue,emailValue]);


	const clickSignup = () =>{
		console.log("Sign up btn click")
	}

	const loginBtnClick = () =>{
		navigation.replace('Tabs', { screen: 'Home' });
		// HomeScreen
		console.log("Login btn click")
	}

	const forgotPasswordClick = () =>{
		console.log("Forgot password clicked")
	}



    return (
        <SafeAreaView style={styles.container}>
				 <ImageBackground 
						source={require('../../res/imgs/background.jpeg')}
						style={styles.image}>
						<View>
							<Image
                    style={{height:120,width:120,alignSelf:'center'}}
                    source={require('../../res/imgs/ecommerce_logo.png')}
                />
						</View>
						<KeyboardAvoidingView 
						behavior={Platform.OS === "ios" ? "padding" : "height"}
						style={{flex:1,borderWidth:1, margin:10,borderRadius:10,marginLeft:30,marginRight:30,backgroundColor:'#fff',borderColor:'#fff'}}>
								<View style={{padding:10,paddingTop:20,flex:1,flexDirection:'column',justifyContent:'center'}}>
									<Text style={{textAlign:'center',fontWeight:'700',letterSpacing:0.5,fontSize:18}}>SIGN IN</Text>
								</View>
								<View style={{flex:2}}>
									<View style={{flexDirection:'column',marginLeft:10,marginRight:10,marginTop:15}}>
										<Text style={{fontSize: Fonts.extraSmallSize,fontWeight: '700',paddingBottom:5,color:Colors.lightBlack}}>Email Id</Text>
										<TextInput
											placeholder="Enter your Email"
											textAlignVertical={'top'}
											style={{color:Colors.lightBlack, height:40,borderColor:Colors.borderColor,borderBottomWidth:0.5,fontSize: Fonts.smallSize,fontWeight: '500',letterSpacing:0.3,borderRadius:5,paddingLeft:10}}
											value={emailValue}
											onChangeText={(value)=>{changeEmailValue(value)}}
										/>
									</View>
									<View style={{flexDirection:'column',marginLeft:10,marginRight:10,marginTop:10}}>
										<Text style={{fontSize: Fonts.extraSmallSize,fontWeight: '700',paddingBottom:5,color:Colors.lightBlack}}>
											Password</Text>
										<TextInput
											placeholder="Enter your Email"
											textAlignVertical={'top'}
											style={{color:Colors.lightBlack, height:40,borderColor:Colors.borderColor,borderBottomWidth:0.5,fontSize: Fonts.smallSize,fontWeight: '500',letterSpacing:0.3,borderRadius:5,paddingLeft:10}}
											value={passwordValue}
											onChangeText={(value)=>{changePasswordValue(value)}}
										/>
									</View>
									<TouchableOpacity style={{padding:10,paddingTop:10}} onPress={forgotPasswordClick}>
										<Text style={{textAlign:'right',fontWeight:'600',letterSpacing:0.2,fontSize:12,color:Colors.primary}}>Forgot password ?</Text>
									</TouchableOpacity>

								</View>

								<View style={{marginTop:30,padding:10,flex:1,flexDirection:'column',justifyContent:'flex-end'}}>
									<CustomButton
											title={'LOGIN'}
											buttonClick={loginBtnClick}
											containerStyle={buttonContainerStyle}
											buttonStyle={themeButtonStyle}
									/>
									{/* <View style={{flexDirection:'row',justifyContent:'center',paddingTop:10}}>
										<Text style={{fontSize:Fonts.smallSize,color:Colors.lightBlack,letterSpacing:0.2}}>Don't have an account ? </Text>
										<TouchableOpacity onPress={clickSignup}>
											<Text style={{fontSize:Fonts.normalSize,color:Colors.primary,fontWeight:'700',letterSpacing:0.3}}>Click here </Text>
										</TouchableOpacity>
									</View> */}
								</View>
							
						</KeyboardAvoidingView>
						<View>
							<View style={{flexDirection:'row'}}>
								<View style={{flex:1,flexDirection:'column',justifyContent:'center'}}>
									<View style={{borderTopWidth:0.2,marginRight:5,marginTop:3}}></View>
								</View>
								<View><Text style={{textAlign:'center',fontWeight:'700',letterSpacing:0.5,fontSize:14}}>Sign in with</Text></View>
								<View style={{flex:1,flexDirection:'column',justifyContent:'center'}}>
									<View style={{borderTopWidth:0.2,marginLeft:5,marginTop:3}}></View>
								</View>
							</View>

							<View style={{flexDirection:'row',justifyContent:'center',padding:15}}>
								<View >
									<TouchableOpacity style={{flexDirection:'column',justifyContent:'center',borderRadius:20, backgroundColor:Colors.facebookColor,height:35,width:35,marginLeft:5,marginRight:5}}>
										<Icon name="logo-facebook" type="ionicon" color={"#fff"} size={15} />
									</TouchableOpacity>
								</View>

								<View >
									<TouchableOpacity style={{flexDirection:'column',justifyContent:'center',borderRadius:20, backgroundColor:Colors.googleColor,height:35,width:35,marginLeft:5,marginRight:5}}>
									<Icon name="logo-google" type="ionicon" color={"#fff"} size={15} />
									</TouchableOpacity>
								</View>

								<View >
									<TouchableOpacity style={{flexDirection:'column',justifyContent:'center',borderRadius:20, backgroundColor:Colors.instagramColor,height:35,width:35,marginLeft:5,marginRight:5}}>
									<Icon name="logo-instagram" type="ionicon" color={"#fff"} size={15} />
									</TouchableOpacity>
								</View>

							</View>
						</View>
					</ImageBackground>
				</SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      //backgroundColor: Colors.darkPrimary,
      flex: 1,
      // flexDirection: "column"
    },
		image: {
			flex: 1,
			resizeMode: 'contain',
			// justifyContent: "center"
		},
});

export default LoginScreen;