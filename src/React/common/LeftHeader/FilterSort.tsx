import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FilterMenu from './FilterMenu';
import SortMenu from './SortMenu';

export default class FilterSort extends Component {
  render() {
    return (
      <View style={styles.icons}>
        <View style={styles.filter}>
          <Text style={styles.iconText}>Filter</Text>
          <FilterMenu />
        </View>
        <View style={styles.sort}>
          <Text style={styles.iconText}>Sort</Text>
          <SortMenu />
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
