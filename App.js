import React, { useState } from 'react'
import { StyleSheet, Switch, View, Text, TouchableOpacity } from 'react-native'

 const DarkMode = () =>{
   const [isDarkMode, setDarkMode] = useState(false);
    return ( 
     <View style={styles.body}>
          <View style={{
            backgroundColor: (isDarkMode ? 'black' : 'white'),
            height: '100%', width: '100%',  alignItems: 'center',
          }}>

            <Switch
              value={isDarkMode}
              onValueChange={() => setDarkMode(!isDarkMode)}
             />

            <Text style={{ color: (isDarkMode ? 'white' : 'black') }}>
                  Hello :) 
            </Text>

          </View>
     </View>
    );
 }

const styles = StyleSheet.create({
  body:{
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  }
})

export default DarkMode;