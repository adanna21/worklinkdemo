import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class TeamModal extends Component<any, any> {
  render() {
    const numberOfMembers = this.props.teamArray.length;
    return (
      <View style={[styles.modal]} {...this.props.style}>
        <View style={styles.containerStyle}>
          <Icon name="account-circle" size={30} color="#BDBDBD" />
          <Text> {numberOfMembers} Member(s) Selected</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    height: 50,
    width: 200,
    borderRadius: 10,
    backgroundColor: '#FFF'
  },
  containerStyle: {
    flexDirection: 'row'
  }
});
