import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  NativeModules
} from 'react-native';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IState } from '../../../src/Redux';
import { IUserLogin } from '../../../src/Redux/login/types';
import { saveUserInAsync } from '../../Redux/login/actions';

export interface ILogInProps {
  status: string;
  user: IUserLogin;
  error: string;
}

export interface ILoginDispatchProps {
  saveUser(user: IUserLogin): void;
}

type Props = ILogInProps & ILoginDispatchProps;

class LoginScreen extends Component<Props> {
  componentDidMount() {
    const user = { username: 'kevinduran', password: 'thisisus' };
    this.props.saveUser(user);
    // NativeModules.DevSettings.showAsyncStorageContentInDev();
  }
  render() {
    const shadowStyle = {
      backgroundColor: '#fff',
      shadowOpacity: 0.1,
      elevation: 4,
      shadowOffset: { width: -1, height: 3 },
      shadowRadius: 5
    };
    return (
      <View style={styles.container}>
        <View style={[styles.loginCard, shadowStyle]}>
          <Text style={styles.title}>NYU Login</Text>
          <TextInput
            style={styles.inputText}
            placeholder={'Net ID'}
            placeholderTextColor={'#a4a4a4'}
            autoCorrect={false}
          />
          <TextInput
            style={styles.inputText}
            placeholder={'Password'}
            placeholderTextColor={'#a4a4a4'}
            autoCorrect={false}
          />
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

// redux
const mapStateToProps = (state: IState) => state.login;
const mapDispatchToProps = (dispatch: Dispatch): ILoginDispatchProps => ({
  saveUser: (user: IUserLogin) => dispatch(saveUserInAsync(user))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '20%',
    backgroundColor: '#f8f8f8'
  },
  loginCard: {
    flex: 0.3,
    backgroundColor: '#fff',
    width: '50%',
    borderRadius: 6,
    justifyContent: 'space-evenly'
  },
  title: {
    fontSize: 16,
    paddingLeft: '5%'
  },
  inputText: {
    width: '85%',
    height: '20%',
    alignSelf: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#a4a4a4',
    borderRadius: 5,
    paddingLeft: '4%'
  },
  loginButton: {
    backgroundColor: '#e61950',
    width: '45%',
    height: '15%',
    marginLeft: '30%',
    borderRadius: 15
  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
    paddingTop: '5%',
    fontWeight: 'bold'
  }
});
