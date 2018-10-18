import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Picker } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Menu, { MenuItem } from 'react-native-material-menu';

interface IDropDown {
  handleLogout?(): void;
}

export default class DropDown extends Component<IDropDown, any> {
  _menu: any = null;

  setMenuRef = (ref: any) => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };
  render() {
    return (
      <Menu
        ref={this.setMenuRef}
        button={
          <Icon
            name="settings"
            size={20}
            color="#FFF"
            onPress={this.showMenu}
          />
        }
      >
        <MenuItem onPress={this.hideMenu}>Menu item 1</MenuItem>
        <MenuItem
          onPress={() => {
            this.hideMenu();
            this.props.handleLogout();
          }}
        >
          LogOut
        </MenuItem>
      </Menu>
    );
  }
}
