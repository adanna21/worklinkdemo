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
import DropContainer from '../utils/react-native-drag-drop/DragContainer';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { allReducers, IState } from '../../../src/Redux';
import { ITeamMember } from '../../../src/Redux/drag-and-drop/types';
import { selectTeamMember } from '../../Redux/drag-and-drop/actions';

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

type Props = ISuperQueueProps & ISuperQueueNavProps & ISuperQueueDispatchProps;

class SupervisorQueueScreen extends Component<Props> {
  // state = {
  //   scrollEnabled: true
  // };

  // toggleScroll = (visible: boolean) => {
  //   this.setState({ scrollEnabled: visible });
  // };
  componentDidMount() {
    const keys = this.props.teamMembers;
    console.log(keys);
  }
  render() {
    return (
      <DropContainer
        teamArray={this.props.teamMembers}
        selectTeamMember={this.props.onTeamMemberClicked}
        // onDragStart={function() {
        //   console.log(arguments);
        // }}
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
              <SuperWorkOrderList navigation={this.props.navigation} />
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
                selectTeamMember={this.props.onTeamMemberClicked}
                teamArray={this.props.teamMembers}
              />
            </RightBody>
          </RightPanel>
        </AppContainer>
      </DropContainer>
    );
  }
}

const mapStateToProps = (state: IState) => state.dragDrop;
const mapDispatchToProps = (dispatch: Dispatch): ISuperQueueDispatchProps => ({
  onTeamMemberClicked: (memberId: string) =>
    dispatch(selectTeamMember(memberId))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SupervisorQueueScreen);
