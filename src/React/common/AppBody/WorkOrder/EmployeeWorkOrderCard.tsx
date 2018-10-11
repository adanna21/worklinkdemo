import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class EmployeeWorkOrderCard extends Component<any, any> {
  render() {
    const shadowStyle = {
      backgroundColor: '#fff',
      shadowOpacity: 0.1,
      elevation: 3,
      shadowOffset: { width: 0, height: -1 }
      //   shadowRadius: 5
    };
    return (
      <View style={styles.container}>
        <View style={[styles.wordCard, shadowStyle]}>
          <View />
          {this.props.children}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: '5%'
  },
  wordCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: '3%',
    paddingBottom: '8%',
    borderRadius: 3
  }
});
