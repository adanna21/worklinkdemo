import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { IWorker } from '../../../../data';

interface ITeamSearchProps {
  searchTeamList: (text: string) => void;
  dataToShow: IWorker[];
}

export default class TeamSearch extends Component<ITeamSearchProps, any> {
  render() {
    return (
      <View style={styles.teamSearch}>
        <View style={styles.searchInput}>
          <TextInput
            style={styles.inputText}
            placeholder={'Enter First or Last Name'}
            placeholderTextColor={'#c6cacc'}
            underlineColorAndroid={'#fff'}
            autoCorrect={false}
            onChangeText={text => this.props.searchTeamList(text)}
          />
          <Icon name="search" size={20} color="#BDBDBD" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  teamSearch: {
    flex: 0.15,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#c6cacc',
    alignItems: 'center'
    // justifyContent: 'flex-end'
    // backgroundColor: 'green'
  },
  searchInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    height: '100%'
    // backgroundColor: 'blue'
  },
  inputText: {
    width: '80%',
    fontSize: 16,
    // backgroulor: 'red',
    paddingLeft: '3%',
    paddingRight: '3%'
  }
});
