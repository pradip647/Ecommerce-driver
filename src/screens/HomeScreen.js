// import React from 'react';
import React, { Component, useEffect, useState } from 'react';
import {StyleSheet,Image,View, Text,Dimensions, TouchableOpacity,KeyboardAvoidingView,ScrollView,FlatList  } from 'react-native'
import Colors from '../../res/Colors';
import CustomHeader from '../components/CustomHeader';
import { SearchBar,Button,Icon } from 'react-native-elements';
import CustomplayOptions from '../components/CustomPlayOptions';
import CustomButton from '../components/CustomButton';
import Fonts from '../../res/Fonts';


const defaultwidth = Dimensions.get('window').width;
const buttonContainerStyle={marginLeft:10,marginRight:10}
const themeButtonStyle={borderWidth:1,borderRadius:20,
    paddingBottom:12,paddingTop:12,paddingLeft:12,paddingRight:12,
    fontSize:12,borderColor:Colors.primary,color:'#fff',backgroundColor:Colors.primary,
    fontWeight:'700',opacity:1,textAlign:'center',letterSpacing:1}

const whiteButtonStyle={borderWidth:1,borderRadius:20,
    paddingBottom:12,paddingTop:12,paddingLeft:12,paddingRight:12,
    fontSize:12,borderColor:'#fff',color:'#3484b4',backgroundColor:'#fff',
    fontWeight:'700',opacity:1,textAlign:'center',letterSpacing:1}

const HomeScreen = ({ navigation }) => {
	const [segmentValue, setSegment] = useState("new");
	const [refreshing, setRefreshing] = useState(false);

	const DATA = [
			{
				id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
				title: '| FATAFAT |',
				subTitle:'| GAME |',
				imageURL:require('../../res/imgs/logo.png')
			},
			{
					id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bb',
					title: '| FATAFAT |',
					subTitle:'| GAME |',
					imageURL:require('../../res/imgs/logo.png')
			},
			{
					id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bc',
					title: '| FATAFAT |',
					subTitle:'| GAME |',
					imageURL:require('../../res/imgs/logo.png')
			},
			{
					id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bd',
					title: '| FATAFAT |',
					subTitle:'| GAME |',
					imageURL:require('../../res/imgs/logo.png')
			},
			{
					id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28be',
					title: '| FATAFAT |',
					subTitle:'| GAME |',
					imageURL:require('../../res/imgs/logo.png')
			},
			{
					id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bf',
					title: '| FATAFAT |',
					subTitle:'| GAME |',
					imageURL:require('../../res/imgs/logo.png')
			},
			{
					id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bg',
					title: '| FATAFAT |',
					subTitle:'| GAME |',
					imageURL:require('../../res/imgs/logo.png')
			}
	];

			/* == Value change callback == */
	useEffect(() => {
		console.log("segment value chnaged to  : ", segmentValue)
 	}, [segmentValue]);
    
	const handleScroll = (event) => {
			const positionX = event.nativeEvent.contentOffset.x;
			const positionY = event.nativeEvent.contentOffset.y;
			console.log(positionX,positionY)
			if(positionY >665){
					console.log("grater")
			}else{console.log("less")}
	};

	/* ===== Refresh functions ======== */
	const  _handleRefresh = () => {
		console.log("working")
		setRefreshing(true);
	};
    
	/* ===== Empty list component ======== */
	const _listEmptyComponent = () => {
			return (
				<View>
					<Text style={{textAlign:'center',paddingTop:10,fontWeight:'600',letterSpacing:0.2}}>No data found</Text>
				</View>
			)
	}

	/* === Custom list items ============*/
	const renderItem = ({ item }) => (
			<View style={{marginBottom:10}}>
					<CustomplayOptions
							imageURL={item.imageURL}
							subTitle={item.subTitle}
							title={item.title}
							buttonClick={()=>{alert("play clicked")}}
					
					/>
			</View>
	);

	// const image = { uri: "https://reactjs.org/logo-og.png" };
	return (
			<KeyboardAvoidingView style={styles.container}>
				<View style={{flex:1,width:'100%',height:'100%'}}>
					<CustomHeader
							logoClick={()=>{alert("logo clicked")}}
							walletClick={()=>{alert("Wallet clicked")}}
							notificationClick={()=>{alert("Notification clicked")}}
							menuClick={()=>{alert("Menu clicked")}}
					/>
					{/* ===  Segment ====== */}

					<View style={{borderColor:Colors.primary, borderRadius:8,borderWidth:0.5,flexDirection:'row',justifyContent:'space-evenly',margin:10,marginLeft:15,merginRight:15}}>
						<TouchableOpacity 
						onPress={()=>{setSegment('new')}}
						style={{flex:1,flexDirection:'row',justifyContent:'center',borderRadius:8,backgroundColor:segmentValue == 'new'? Colors.primary:'#fff'}}>
							<View style={{justifyContent:'center',flexDirection:'column'}}>
								<Text style={{padding:5,paddingTop:8,paddingBottom:8,letterSpacing:0.3,fontSize:Fonts.smallSize,color:segmentValue == 'new'?'#fff':'#000',fontWeight:segmentValue == 'new'?'700':'600'}}>NEW</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity 
						onPress={()=>{setSegment('in_progress')}}
						style={{flex:1,flexDirection:'row',justifyContent:'center',borderRadius:8,backgroundColor:segmentValue == 'in_progress'? Colors.primary:'#fff'}}>
							<View style={{justifyContent:'center',flexDirection:'column'}}>
								<Text style={{padding:5,paddingTop:8,paddingBottom:8,letterSpacing:0.3,fontSize:Fonts.smallSize,color:segmentValue == 'in_progress'?'#fff':'#000',fontWeight:segmentValue == 'in_progress'?'700':'600'}}>IN PROGRESS</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity 
						onPress={()=>{setSegment('complete')}}
						style={{flex:1,flexDirection:'row',justifyContent:'center',borderRadius:8,backgroundColor:segmentValue == 'complete'? Colors.primary:'#fff'}}>
							<View style={{justifyContent:'center',flexDirection:'column'}}>
								<Text style={{padding:5,paddingTop:8,paddingBottom:8,letterSpacing:0.3,fontSize:Fonts.smallSize,color:segmentValue == 'complete'?'#fff':'#000',fontWeight:segmentValue == 'complete'?'700':'600'}}>COMPLETE</Text>
							</View>
						</TouchableOpacity>
					</View>

					<ScrollView 
							onScroll={handleScroll}
							style={{
									marginBottom:5,
									paddingBottom:20,
							}}>
									<View>
										<FlatList
											data={DATA}
											renderItem={renderItem}
											keyExtractor={item => item.id}
											numColumns={1}
											showsVerticalScrollIndicator={false}
											maxToRenderPerBatch={11}
											initialNumToRender={11}
											scrollEnabled={true}
											refreshing={refreshing}
											onRefresh={()=>{_handleRefresh()}}
											ListEmptyComponent={_listEmptyComponent}
										/>
									</View>
					</ScrollView>
					</View>
			</KeyboardAvoidingView>

	);
};

const styles = StyleSheet.create({
    container: {
      //backgroundColor: Colors.primary,
      flex: 1,
      flexDirection: "column"
    },
    rightTopImg: {
        height:60,
        width:170,
        resizeMode:'cover',
        top:0,
        right:-15,
      },
      rightTopScrollImg:{
        position:'absolute',
        resizeMode:'contain',
        top:-300,
        right:-213,
        opacity:0.2
      }
    
  });

export default HomeScreen;