import React from 'react';
import Screen from '../components/Screen';
import { StyleSheet } from 'react-native';
import colors from '../config/colors';


function Welcome(props) {
    return (
        <Screen style={styles.background}>

        </Screen>
    );
}
const styles = StyleSheet.create({
    background:colors.background,
})
export default Welcome;