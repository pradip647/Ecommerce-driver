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

const CustomHeader = ({logoClick,walletClick,notificationClick,menuClick})=> {
    return (
        <View style={{flexDirection:'row',backgroundColor:Colors.primary,justifyContent:'space-between'}}>
            <TouchableOpacity
                onPress={logoClick}
            >
                <Image
                    style={styles.logoStyle}
                    source={require('../../res/imgs/logo.png')}
                />
            </TouchableOpacity>
            <View style={{flexDirection:'row', justifyContent:'flex-end',zIndex:1}}>
                <TouchableOpacity
                    style={{zIndex:1}}
                    onPress={walletClick}
                    style={{flexDirection:'column',justifyContent:'center',marginRight:15}}
                >
                    <Icon name="wallet-outline" type="ionicon" color={"#fff"} />
                </TouchableOpacity>

                <TouchableOpacity 

                    style={{zIndex:1}}
                    onPress={notificationClick}
                    style={{flexDirection:'column',justifyContent:'center',marginRight:15}}
                >
                    <Icon name="notifications-outline" type="ionicon" color={"#fff"} />
                    <View>
                        <Badge value="5" status="error" 
                        status={Colors.primary}
                        containerStyle={{ position: 'absolute', top: -30, right: -5 }}
                        textStyle={{fontSize:8}}
                        />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={{zIndex:1}}
                    onPress={menuClick}
                    style={{flexDirection:'column',justifyContent:'center'}}
                >
                    <Image
                        style={styles.menuIconStyle}
                        source={require('../../res/imgs/menu.png')}
                    />
                </TouchableOpacity>
                
            </View>
        </View>

    )
}
const styles=StyleSheet.create({
    mainContainer:{flexDirection:'column',flex:1,},
    touchableContainer:{flex:1,minHeight:40},
    textMain:{backgroundColor:Colors.white},
    input_text:{
        padding:10,textAlign:'center',
        fontSize:12,
        letterSpacing:0.4,
        
    },
    lastView:{backgroundColor:Colors.border,height:0.2},

    logoStyle:{
        width:50,
        height:50,
        resizeMode:'cover',
        margin:8,
        marginLeft:5

    },
    menuIconStyle:{
        width:17,
        height:17,
        resizeMode:'cover',
        // margin:10,
        marginRight:15
    },
    rightImg:{
        width: 150,
        height: 80,
        // backgroundColor:'#000',
        // padding: 20,
        // paddingVertical: 40,
        // position: 'absolute',
        top:0,
        // right:-15,
        left:Dimensions.get('window').width-140,
        opacity:0.2,
        alignSelf:'flex-end'
    }

})
export default CustomHeader;