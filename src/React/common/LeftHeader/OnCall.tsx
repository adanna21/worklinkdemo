import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class OnCall extends Component {
  render() {
    return (
      <View style={styles.onCall}>
        <TouchableOpacity style={styles.callBottom} />
        <Text style={styles.callText}>I am on call</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  onCall: {
    flexDirection: 'row',
    marginTop: '2%',
    marginLeft: '5%',
    alignSelf: 'center'
  },
  callBottom: {
    color: '#424242',
    marginRight: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#BDBDBD',
    borderRadius: 3,
    width: 15,
    height: 15
  },
  callText: {
    fontSize: 12,
    color: '#424242'
  }
});
