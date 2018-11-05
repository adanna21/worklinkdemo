import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Menu, {
  MenuItem
} from '../../../React/utils/react-native-material-menu';
import CheckBox from './CheckBox';

interface IFilterMenu {
  // handleLogout?(): void;
}

export default class FilterMenu extends Component<IFilterMenu, any> {
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
            name="filter"
            size={20}
            color="#757575"
            onPress={this.showMenu}
          />
        }
      >
        <MenuItem onPress={() => {}} checkBox={true}>
          UNASSIGNED
        </MenuItem>
        <MenuItem onPress={() => {}} checkBox={true}>
          ON HOLD
        </MenuItem>
        <MenuItem onPress={() => {}} checkBox={true}>
          COMPLETED
        </MenuItem>
        {/* <MenuItem
          onPress={() => {
            this.hideMenu();
            // this.props.handleLogout();
          }}
          checkBox={false}
        >
          LogOut
        </MenuItem> */}
      </Menu>
    );
  }
}
