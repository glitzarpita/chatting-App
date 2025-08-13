import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View,Image } from 'react-native';

function GradientScreen({children,style,}) {
    return (
        
                
    <LinearGradient
      colors={['#9fa0ff', '#ebe0ff']} // start to end colors
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
        <View style={[styles.screen,styles]}>
                    {children}</View>
    </LinearGradient>
 
    );
}

export default GradientScreen;




const styles = StyleSheet.create({
  container: {
    flex: 1, // full screen
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  
});
