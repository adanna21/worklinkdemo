import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class RightBody extends Component {
  render() {
    const shadowStyle = {
      backgroundColor: '#fff',
      shadowOpacity: 0.1,
      elevation: 4,
      shadowOffset: { width: -1, height: 3 },
      shadowRadius: 5
    };
    return (
      <View style={[styles.rightBody, shadowStyle]}>{this.props.children}</View>
    );
  }
}

const styles = StyleSheet.create({
  rightBody: {
    flex: 5,
    backgroundColor: '#FFF',
    // marginBottom: '12%',
    borderRadius: 3
    // borderWidth: 1
    // borderStyle: 'solid',
    // borderColor: '#BDBDBD'
  }
});
