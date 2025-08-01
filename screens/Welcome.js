import React from 'react';
import Screen from '../components/Screen';
import { StyleSheet, View } from 'react-native';
import colors from '../config/colors';


function Welcome(props) {
    return (
        <Screen >
            <View style={styles.background}>

            </View>
        </Screen>
    );
}
const styles = StyleSheet.create({
    background:{
        backgroundColor:"#caf0f8",
        flex:1,
    }
})
export default Welcome;