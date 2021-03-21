import React, { Component } from 'react'
import { StyleSheet, Switch, View, Text } from 'react-native'

export default class SwitchExample extends Component {
  state = {
    switchValue: true
  };

  render() {
    return (
      
     <View style={styles.body}>
          <View style={{
            backgroundColor: (this.state.switchValue ? 'white' : 'black'),
            height: '100%', width: '100%',  alignItems: 'center',
          }}>
            <Switch
              value={this.state.switchValue}
              onValueChange={(switchValue) => this.setState({ switchValue })} />

          </View>
     </View>
    );
  }
}
const styles = StyleSheet.create({
  body:{
    justifyContent: 'center',
    alignItems: 'center',
   // backgroundColor: 'red',
      height: '100%',
  }
})