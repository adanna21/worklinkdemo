import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Menu from 'react-native-material-menu';

export interface IDropDown {
  setMenuRef?: (ref: any) => void;
  hideMenu?: () => void;
  showMenu?: () => void;
  children?: string | JSX.Element;
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
    return <View>{this.props.children}</View>;
  }
}
