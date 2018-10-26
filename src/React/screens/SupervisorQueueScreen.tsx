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
import { ThunkDispatch } from 'redux-thunk';
import { IState } from '../../../src/Redux';
import { ITeamMember } from '../../../src/Redux/drag-and-drop/types';
import { toggleTeamMember } from '../../Redux/drag-and-drop/actions';
import { fetchInitialData } from '../../Redux/data-management/initialData/actions';
import { IInitialDataProps } from '../../Redux/data-management/initialData/types';
import { Actions } from '../../../src/Redux/data-management/initialData/actions';

export interface ISuperQueueNavProps {
  navigation: NavigationScreenProp<any, any>;
}

export interface ISuperQueueProps {
  dragDrop: { teamMembers: ITeamMember[] };
  initialData: IInitialDataProps;
}
export interface ISuperQueueDispatchProps {
  onTeamMemberClicked: (memberId: string) => void;
  getInitialData(): void;
}

export type Props = ISuperQueueProps &
  ISuperQueueNavProps &
  ISuperQueueDispatchProps;

interface State {
  currentId: string | null;
  droppedInZone: boolean;
}

export class SupervisorQueueScreen extends Component<Props, State> {
  // constructor(props: Props) {
  //   super(props);
  //   this.state = {
  //     currentId: null,
  //     droppedInZone: false
  //   };
  // }
  state: State = {
    currentId: null,
    droppedInZone: false
  };

  addCurrentId = (id: string) => {
    console.log('added current Id', id);
    this.setState({ currentId: id });
  };
  removeId = () => {
    this.setState({ currentId: null });
  };

  // toggleScroll = (visible: boolean) => {
  //   this.setState({ scrollEnabled: visible });
  // };
  componentDidMount() {
    this.props.getInitialData();
    console.log('teamArray', this.props.dragDrop.teamMembers);
    console.log('employees', this.props.initialData.employees);
    console.log('workOrders', this.props);
  }
  isDroppedInZone = () => {
    this.setState({ droppedInZone: true });
  };
  render() {
    const {
      dragDrop: { teamMembers },
      onTeamMemberClicked,
      navigation,
      initialData
    } = this.props;
    const { currentId } = this.state;
    return (
      <DragContainer
        teamArray={teamMembers}
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
                initialData={initialData}
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
                initialData={initialData}
              />
            </RightBody>
          </RightPanel>
        </AppContainer>
      </DragContainer>
    );
  }
}

const mapStateToProps = (state: IState) => {
  const stateData = {
    dragDrop: state.dragDrop,
    initialData: state.initialData
  };
  return stateData;
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<IState, void, Actions> & Dispatch
): ISuperQueueDispatchProps => ({
  onTeamMemberClicked: (memberId: string) =>
    dispatch(toggleTeamMember(memberId)),
  getInitialData: () => dispatch(fetchInitialData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SupervisorQueueScreen);
