import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IState } from '../../../src/Redux';
import { IUserLogin } from '../../../src/Redux/login/types';
import { saveUserInAsync, login } from '../../Redux/login/actions';
import LoginButton from '../components/Buttons/LoginButton';

export interface ILoginNavProps {
  navigation: NavigationScreenProp<any, any>;
}

export interface ILogInProps {
  userSaved: boolean;
  loggedIn: boolean;
  username: string | null;
  user: IUserLogin;
  error: string;
}

export interface ILoginDispatchProps {
  saveUser(user: IUserLogin): void;
  onLogin(username: string, password: string): void;
}

type Props = ILogInProps & ILoginDispatchProps & ILoginNavProps;

class LoginScreen extends Component<Props> {
  state = {
    username: '',
    password: ''
  };
  componentDidMount() {
    const user = { username: 'Test', password: '1234' };
    this.props.saveUser(user);
  }
  handleLogin = () => {
    const username = this.state.username;
    const password = this.state.password;
    this.props.onLogin(username, password);
  };
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
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={[styles.loginCard, shadowStyle]}>
            <Text style={styles.title}>NYU Login</Text>
            <TextInput
              style={styles.inputText}
              placeholder={'Net ID'}
              placeholderTextColor={'#a4a4a4'}
              autoCorrect={false}
              returnKeyType="next"
              onSubmitEditing={() => this.txtPassword.focus()}
              value={this.state.username}
              onChangeText={text => this.setState({ username: text })}
            />
            <TextInput
              style={styles.inputText}
              placeholder={'Password'}
              placeholderTextColor={'#a4a4a4'}
              autoCorrect={false}
              returnKeyType="go"
              secureTextEntry={true}
              ref={t => (this.txtPassword = t)}
              value={this.state.password}
              onChangeText={text => this.setState({ password: text })}
            />
            <LoginButton
              handleLogin={this.handleLogin}
              navigation={this.props.navigation}
              loggedIn={this.props.loggedIn}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

// redux
const mapStateToProps = (state: IState) => state.login;
const mapDispatchToProps = (dispatch: Dispatch): ILoginDispatchProps => ({
  saveUser: (user: IUserLogin) => {
    dispatch(saveUserInAsync(user));
  },
  onLogin: (username: string, password: string) => {
    dispatch(login(username, password));
  }
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
