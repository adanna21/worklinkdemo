import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FilterMenu from './FilterMenu';
import SortMenu from './SortMenu';
import { ISuperWorkOrderHeader } from '../../components/LeftPanel/Header/SuperWorkOrderHeader';

export default class FilterSort extends Component<ISuperWorkOrderHeader, any> {
  render() {
    return (
      <View style={styles.icons}>
        <View style={styles.filter}>
          <Text style={styles.iconText}>Filter</Text>
          <FilterMenu
            changeWorkOrderFilter={this.props.changeWorkOrderFilter}
          />
        </View>
        <View style={styles.sort}>
          <Text style={styles.iconText}>Sort</Text>
          <SortMenu changeSortBy={this.props.changeSortBy} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icons: {
    flex: 1,
    flexDirection: 'row'
  },
  filter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  sort: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  iconText: {
    color: '#757575'
  }
});
