import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Menu, { MenuItem } from 'react-native-material-menu';

interface ISortMenu {
  // handleLogout?(): void;
}

export default class SortMenu extends Component<ISortMenu, any> {
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

  sorBy = () => {};

  render() {
    return (
      <Menu
        ref={this.setMenuRef}
        button={
          <Icon name="sort" size={20} color="#757575" onPress={this.showMenu} />
        }
      >
        <MenuItem onPress={this.hideMenu}>Newest To Oldest</MenuItem>
        <MenuItem
          onPress={() => {
            this.hideMenu();
            // this.props.handleLogout();
          }}
        >
          Oldest To Newest
        </MenuItem>
      </Menu>
    );
  }
}
