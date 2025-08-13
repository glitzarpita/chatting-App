import React from 'react';
import {View,StyleSheet,} from 'react-native';
import Constants from 'expo-constants';
function Screen({children,style,}) {
    return (
        <View style={[styles.screen,styles]}>
            {children}
        </View>

        
    );
}
const styles = StyleSheet.create({
    screen:{
        flex:1,
        paddingTop:Constants.statusBarHeight,
        backgroundColor:"#F4DCEC",
    }
})
export default Screen;
