import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList
} from 'react-native';
import TeamMember from './TeamMember';
import TeamMemberOffline from './TeamMemberOffline';
import { IInitialDataProps } from '../../../../Redux/data-management/initialData/types';
import { ITeamMember } from '../../../../Redux/drag-and-drop/types';
import TeamSearch from './TeamSearch';
import { IWorker } from '../../../../data';

interface ITeamListProps {
  initialData: IInitialDataProps;
  teamArray: ITeamMember[];
  addCurrentId: (id: string) => void;
  selectTeamMember: (memberId: string) => void;
  currentId: string;
}

interface State {
  dataToShow: IWorker[];
  searchTerm: string | null;
  searching: boolean;
}

export default class TeamList extends Component<ITeamListProps, State> {
  state: State = {
    dataToShow: null,
    searchTerm: null,
    searching: false
  };

  componentDidUpdate() {
    // redux makes component render twice
    // stop infinite loop by setting conditions below
    if (!this.state.dataToShow && !this.props.initialData.loading) {
      this.setState({ dataToShow: this.props.initialData.employees });
    }
  }

  renderOffline = () => {
    const {
      initialData: { loading }
    } = this.props;
    return (
      <View style={styles.teamContainer}>
        <TeamMemberOffline isReady={loading || !this.state.dataToShow} />
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
    const { dataToShow } = this.state;
    return (
      <FlatList
        // scrollEnabled={this.props.scrollEnabled}
        style={styles.teamContainer}
        data={dataToShow}
        extraData={this.props}
        renderItem={({ item }) => (
          <TeamMember
            teamMemberItem={item}
            teamMemberSelectTeamMember={this.props.selectTeamMember}
            teamMemberTeamArray={this.props.teamArray}
            teamMemberAddCurrentId={this.props.addCurrentId}
          />
        )}
        keyExtractor={item => item.id}
      />
    );
  };

  searchTeamList = (currentText: string) => {
    const employeeList = this.props.initialData.employees;
    const newDataToShow = employeeList.filter(item => {
      const itemData = item.name.toLocaleLowerCase();
      const loweredCurrentText = currentText.toLocaleLowerCase();
      return itemData.indexOf(loweredCurrentText) > -1;
    });
    this.setState({ dataToShow: newDataToShow });
  };

  render() {
    const {
      initialData: { loading }
    } = this.props;
    const { dataToShow } = this.state;
    return (
      <View style={styles.container}>
        <TeamSearch
          dataToShow={dataToShow}
          searchTeamList={this.searchTeamList}
        />
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
