import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput
} from 'react-native';
import { workOrders } from '../../../../data';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TeamMember from './TeamMember';
import TeamMemberOffline from './TeamMemberOffline';

export default class TeamList extends Component<any, any> {
  state = {
    isReady: false
  };
  renderOffline = () => {
    const { isReady } = this.state;
    return (
      <View style={styles.teamContainer}>
        <TeamMemberOffline isReady={isReady} />
        <TeamMemberOffline isReady={isReady} />
        <TeamMemberOffline isReady={isReady} />
        <TeamMemberOffline isReady={isReady} />
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.teamSearch}>
          <View style={styles.searchInput}>
            <TextInput
              style={styles.inputText}
              placeholder={'Enter First or Last Name'}
              placeholderTextColor={'#c6cacc'}
              underlineColorAndroid={'#fff'}
              autoCorrect={false}
            />
            <Icon name="search" size={18} color="#BDBDBD" />
          </View>
        </View>
        {this.renderOffline()}
        {/* <FlatList
          scrollEnabled={this.props.scrollEnabled}
          style={styles.teamContainer}
          data={workOrders}
          extraData={this.props}
          renderItem={({ item }) => (
            <TeamMember
              item={item}
              selectTeamMember={this.props.selectTeamMember}
              teamArray={this.props.teamArray}
              addCurrentId={this.props.addCurrentId}
              currentId={this.props.currentId}
            />
          )}
          keyExtractor={item => item.id}
        /> */}
        <View style={styles.addGroups}>
          <TouchableOpacity style={styles.addGroupButton}>
            <Text style={styles.addGroupText}>+ Add Groups or People</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  teamSearch: {
    flex: 0.2,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#c6cacc',
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    height: '100%'
  },
  inputText: {
    width: '80%',
    fontSize: 12
  },
  teamContainer: {
    flex: 2
  },
  addGroups: {
    flex: 1,
    paddingTop: '15%'
  },
  addGroupButton: {
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#c6cacc',
    height: 45,
    paddingRight: '5%',
    paddingLeft: '5%'
  },
  addGroupText: {
    fontSize: 12
  }
});
