import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TeamMember from './TeamMember';
import TeamMemberOffline from './TeamMemberOffline';
import { IInitialDataProps } from '../../../../Redux/data-management/initialData/types';
import { ITeamMember } from '../../../../Redux/drag-and-drop/types';

export interface ITeamListProps {
  initialData: IInitialDataProps;
  // scrollEnabled: boolean;
  teamArray: ITeamMember[];
  addCurrentId: (id: string) => void;
  selectTeamMember: (memberId: string) => void;
  currentId: string;
}
export default class TeamList extends Component<ITeamListProps, any> {
  renderOffline = () => {
    const {
      initialData: { loading }
    } = this.props;
    return (
      <View style={styles.teamContainer}>
        <TeamMemberOffline isReady={loading} />
        <TeamMemberOffline isReady={loading} />
        <TeamMemberOffline isReady={loading} />
        <TeamMemberOffline isReady={loading} />
      </View>
    );
  };
  // =============================================== //
  // ======= Render FlatList If Data Is Loaded ===== //
  // =============================================== //
  renderFlatList = () => {
    const {
      initialData: { employees }
    } = this.props;

    return (
      <FlatList
        // scrollEnabled={this.props.scrollEnabled}
        style={styles.teamContainer}
        data={employees}
        extraData={this.props}
        renderItem={({ item }) => (
          <TeamMember
            teamMemberItem={item}
            teamMemberSelectTeamMember={this.props.selectTeamMember}
            teamMemberTeamArray={this.props.teamArray}
            teamMemberAddCurrentId={this.props.addCurrentId}
            // currentId={this.props.currentId}
          />
        )}
        keyExtractor={item => item.id}
      />
    );
  };
  render() {
    const {
      initialData: { loading }
    } = this.props;
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
        {loading ? this.renderOffline() : this.renderFlatList()}

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
