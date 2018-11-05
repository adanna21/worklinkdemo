import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Draggable } from '../../../utils/react-native-drag-drop';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ITeamMember } from '../../../../../src/Redux/drag-and-drop/types';
import { IWorker } from '../../../../data';

interface ITeamMemberProps {
  teamMemberTeamArray: ITeamMember[];
  teamMemberItem: IWorker;
  teamMemberSelectTeamMember: (memberId: string) => void;
  teamMemberAddCurrentId: (id: string) => void;
}

export default class TeamMember extends Component<ITeamMemberProps, any> {
  state = {
    iconName: 'account-circle',
    iconColor: '#5eb8ec'
  };
  // change icon when teaMember selected or unselected
  changeIcon = (id: string) => {
    const memberIdPresent = this.props.teamMemberTeamArray.some(
      (member: ITeamMember) => member.id === id
    );
    memberIdPresent
      ? this.setState({
          iconName: 'check-circle',
          iconColor: '#c6cacc'
        })
      : this.setState({
          iconName: 'account-circle',
          iconColor: '#5eb8ec'
        });
  };
  render() {
    const {
      teamMemberItem,
      teamMemberSelectTeamMember,
      teamMemberTeamArray,
      teamMemberAddCurrentId
    } = this.props;
    return (
      <Draggable
        style={[styles.teamMember]}
        itemId={teamMemberItem.id}
        draggableSelectTeamMember={teamMemberSelectTeamMember}
        draggableChangeIcon={this.changeIcon}
        draggableTeamArray={teamMemberTeamArray}
        draggableAddCurrentId={teamMemberAddCurrentId}
      >
        <View style={styles.user}>
          <TouchableOpacity
            onPress={() => {
              teamMemberSelectTeamMember(teamMemberItem.id);
              // use setState callback to make component run changeIcon synchronously
              this.setState({}, () => {
                this.changeIcon(teamMemberItem.id);
              });
            }}
          >
            <Icon
              name={`${this.state.iconName}`}
              size={30}
              color={`${this.state.iconColor}`}
            />
          </TouchableOpacity>
          <Text style={styles.name}>{teamMemberItem.name}</Text>
        </View>
        <Text style={styles.countText}>5</Text>
      </Draggable>
    );
  }
}

const styles = StyleSheet.create({
  teamMember: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#c6cacc',
    paddingTop: '2%',
    paddingBottom: '10%'
  },
  user: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '5%'
  },
  name: {
    marginLeft: '3%'
  },
  countText: {
    flex: 0.5
  }
});
