import React, { Component } from 'react';
import AppContainer from '../common/AppBody/AppContainer';
import LeftPanel from '../common/AppBody/LeftPanel';
import LeftHeader from '../common/AppBody/LeftHeader';
import LeftBody from '../common/AppBody/LeftBody';
import RightPanel from '../common/AppBody/RightPanel';
import RightHeader from '../common/AppBody/RightHeader';
import RightBody from '../common/AppBody/RightBody';
import WorkOrderHeader from '../components/LeftPanel/Header/SuperWorkOrderHeader';
import ActionHeader from '../components/RightPanel/Header/ActionHeader';
import SuperWorkOrderList from '../components/LeftPanel/Body/SuperWorkOrderList';
import TeamList from '../components/RightPanel/Body/TeamList';
import { NavigationScreenProp } from 'react-navigation';
import { DragContainer } from '../utils/react-native-drag-drop';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IState } from '../../../src/Redux';
import { ITeamMember } from '../../../src/Redux/drag-and-drop/types';
import { toggleTeamMember } from '../../Redux/drag-and-drop/actions';

export interface ISuperQueueNavProps {
  navigation: NavigationScreenProp<any, any>;
}

export interface ISuperQueueProps {
  teamMembers: ITeamMember[];
  error: string;
}
export interface ISuperQueueDispatchProps {
  onTeamMemberClicked(memberId: string): void;
}

export type Props = ISuperQueueProps &
  ISuperQueueNavProps &
  ISuperQueueDispatchProps;

export class SupervisorQueueScreen extends Component<Props> {
  state = {
    currentId: '',
    droppedInZone: null
  };

  addCurrentId = (id: string) => {
    console.log('added current Id', id);
    this.setState({ currentId: id });
  };
  removeId = () => {
    this.setState({ currentId: '' });
  };

  // toggleScroll = (visible: boolean) => {
  //   this.setState({ scrollEnabled: visible });
  // };
  componentDidMount() {
    const teamArray = this.props.teamMembers;
    console.log('teamArray', teamArray);
  }
  isDroppedInZone = () => {
    this.setState({ droppedInZone: true });
  };
  render() {
    const { teamMembers, onTeamMemberClicked, navigation } = this.props;
    const { currentId } = this.state;
    return (
      <DragContainer
        teamArray={teamMembers}
        // selectTeamMember={onTeamMemberClicked}
        isDroppedInZone={this.isDroppedInZone}
        onDragStart={() => {
          // if only one teamMember is dragged then add them to teamArray
          this.setState({ droppedInZone: false });
        }}
        onDragEnd={() => {
          this.setState({}, () => {
            // was teamMember dropped on workOrder?, if not remove from teamArray
            if (this.state.droppedInZone == false) {
              onTeamMemberClicked(currentId);
              this.removeId();
            } else {
              this.removeId();
            }
          });
        }}
      >
        <AppContainer>
          {/* ========
             LEFT
        ======== */}
          <LeftPanel>
            <LeftHeader>
              <WorkOrderHeader>My HVAC Queue</WorkOrderHeader>
            </LeftHeader>
            <LeftBody>
              <SuperWorkOrderList
                navigation={navigation}
                droppedInZone={this.isDroppedInZone}
              />
            </LeftBody>
          </LeftPanel>
          {/* ========
             RIGHT
        ======== */}
          <RightPanel>
            <RightHeader>
              <ActionHeader>HVAC Team</ActionHeader>
            </RightHeader>
            <RightBody>
              <TeamList
                selectTeamMember={onTeamMemberClicked}
                teamArray={teamMembers}
                addCurrentId={this.addCurrentId}
                currentId={this.state.currentId}
              />
            </RightBody>
          </RightPanel>
        </AppContainer>
      </DragContainer>
    );
  }
}

const mapStateToProps = (state: IState) => {
  return { dragDropState: state.dragDrop };
};
const mapDispatchToProps = (dispatch: Dispatch): ISuperQueueDispatchProps => ({
  onTeamMemberClicked: (memberId: string) =>
    dispatch(toggleTeamMember(memberId))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SupervisorQueueScreen);
