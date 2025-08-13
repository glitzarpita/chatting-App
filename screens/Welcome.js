import React from 'react';
import Screen from '../components/Screen';
import { Image, ImageBackground, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import colors from '../config/colors';
import AppButton from '../components/AppButton';
import { TouchableWithoutFeedback } from 'react-native-web';
import GradientScreen from '../components/GradientScreen';


function Welcome(props) {
    return (
        <Screen >
        <GradientScreen>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    Welcome to Gigglr
                </Text>
                <Text style={styles.subtitle}>
                    Where every message starts a vibe.
                          Chat. Laugh. Repeat.
                </Text>
            </View>
        
        <View style={styles.imageContainer}>
            <Image style={{width:200,height:200,padding:10,zIndex:10}}
            source={require("../assets/micon.png")}/>
        </View>
        <View style={styles.button}>

            <AppButton style={{marginTop:50,}}
                    title="Get Started" color="button">
            </AppButton> 
            <Text style={{color:"black",fontsize:10}}>Already have an account? </Text>
            <TouchableOpacity>
                <Text styles={{color:colors.lBlue}}>Sign In</Text>
            </TouchableOpacity>
        </View>
        
        </GradientScreen>
        </Screen> 
    );
}
const styles = StyleSheet.create({
   
    
    text:{
        fontSize:40,
        fontFamily:"Baloo 2",
        fontWeight:"bold",
        color:"white",
        
    },
    subtitle:{
        color:"black",
        fontSize:18,
        fontWeight:"400",
        marginTop:20,
        textAlign:"center"
    },
    textContainer:{
        marginTop:30,
        alignItems:"center",
        justifyContent:"center",
        
    },
    imageContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
         height:300,
        

    },
    button:{
        
        paddingTop:40,
        paddingRight:10,
        paddingLeft:10,
        alignItems:"center",
        // justifyContent:"flex-end",
        marginBottom:60
        // backgroundColor:"black"
        

        
    },
    
})
export default Welcome;