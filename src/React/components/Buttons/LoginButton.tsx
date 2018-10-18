import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface ILoginBottom {
  handleLogin?(): void;
  loggedIn: boolean;
  // style: any;
}

export default class LoginButton extends Component<ILoginBottom, any> {
  render() {
    // const { disabled } = this.props;
    // const opacityStyle = disabled
    //   ? { backgroundColor: 'rgba(255,255,255,0.2)' }
    //   : { backgroundColor: ' #e61950' };
    return (
      <TouchableOpacity
        style={[, /*opacityStyle*/ styles.button]}
        onPress={() => {
          this.props.handleLogin();
        }}
      >
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
    );
  }
}

// styles
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#e61950',
    width: '45%',
    height: '15%',
    marginLeft: '30%',
    borderRadius: 15
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    paddingTop: '5%',
    fontWeight: 'bold'
  }
});
