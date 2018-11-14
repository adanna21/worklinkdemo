import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import LeftContainer from '../../../common/LeftHeader/LeftContainer';
import LeftTitle from '../../../common/LeftHeader/LeftTitle';
import FilterSort from '../../../common/LeftHeader/FilterSort';
import CheckBox from '../../../common/LeftHeader/CheckBox';
import { SortByType } from '../../../../Redux/data-management/filterData/types';

export interface ISuperWorkOrderHeader {
  changeWorkOrderFilter: (statusId: string) => void;
  changeSortBy: (sortByString: SortByType) => void;
}
export default class SuperWorkOrderHeader extends Component<
  ISuperWorkOrderHeader,
  any
> {
  render() {
    return (
      <LeftContainer>
        <LeftTitle>
          <Text style={styles.titleText}>{this.props.children}</Text>
          <CheckBox
            label={'On Call'}
            labelColor={'#424242'}
            iconColor={'#BDBDBD'}
            labelFontSize={12}
            iconFontSize={20}
            onPress={() => {}}
          />
        </LeftTitle>
        <FilterSort
          changeWorkOrderFilter={this.props.changeWorkOrderFilter}
          changeSortBy={this.props.changeSortBy}
        />
      </LeftContainer>
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#424242'
  }
});
