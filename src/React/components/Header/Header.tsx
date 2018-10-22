import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import DropDown from '../Header/DropDown';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { IState } from '../../../../src/Redux';
import { ILogInProps } from '../../../React/screens/LoginScreen';
import { Actions } from '../../../../src/Redux/login/actions';
import { logout } from '../../../Redux/login/actions';

export interface ILogoutDispatchProps {
  onLogout(username: string): void;
}

type Props = ILogInProps & ILogoutDispatchProps;

export class Header extends Component<Props, any> {
  handleLogout = () => {
    const username = this.props.username;
    console.log('username', username);

    this.props.onLogout(username);
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.logo}>NYU WorKLinK</Text>
          <TouchableOpacity>
            <Icon name="search" size={20} color="#FFF" />
          </TouchableOpacity>
        </View>
        <View style={styles.icons}>
          <TouchableOpacity>
            <Icon name="notifications" size={20} color="#FFF" />
          </TouchableOpacity>
          {/* <TouchableOpacity>
            <Icon name="settings" size={20} color="#FFF" />
          </TouchableOpacity> */}

          {/* <TouchableOpacity style={styles.user}> */}
          <Text style={styles.userName}>
            {this.props.user ? this.props.user[0].name : `user unavailable`}
          </Text>
          {/* <Icon name="arrow-drop-down" size={25} color="#FFF" />
          </TouchableOpacity> */}
          <DropDown handleLogout={this.handleLogout} />
        </View>
      </View>
    );
  }
}

// redux
const mapStateToProps = (state: IState) => state.login;
const mapDispatchToProps = (
  dispatch: ThunkDispatch<IState, void, Actions>
): ILogoutDispatchProps => ({
  onLogout: (username: string) => {
    dispatch(logout(username));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

const styles = StyleSheet.create({
  container: {
    // height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#590889',
    paddingTop: '1%',
    paddingBottom: '1%'
    // paddingLeft: 15,
    // paddingRight: 15
  },
  title: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center'
  },
  logo: {
    fontSize: 28,
    color: '#FFF',
    fontWeight: 'bold',
    paddingLeft: '20%'
  },
  icons: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-evenly'
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center'
    // paddingTop: '.5%'
  },
  userName: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 15
  }
});
