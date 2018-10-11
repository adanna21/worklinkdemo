import React, { Component } from 'react';
import AppContainer from '../common/AppBody/AppContainer';
import LeftPanel from '../common/AppBody/LeftPanel';
import LeftHeader from '../common/AppBody/LeftHeader';
import LeftBody from '../common/AppBody/LeftBody';
import RightPanel from '../common/AppBody/RightPanel';
import RightHeader from '../common/AppBody/RightHeader';
import RightBody from '../common/AppBody/RightBody';
import EmployeeWorkOrderHeader from '../components/LeftPanel/Header/EmployeeWorkOrderHeader';
import ActionHeader from '../components/RightPanel/Header/ActionHeader';
import EmployeeWorkOrderList from '../components/LeftPanel/Body/EmployeeWorkOrderList';
import ActionsList from '../components/RightPanel/Body/ActionsList';

import { NavigationScreenProp } from 'react-navigation';

export interface IMyQueueScreenProps {
  navigation: NavigationScreenProp<any, any>;
}

export default class EmployeeQueueScreen extends Component<
  IMyQueueScreenProps
> {
  render() {
    return (
      <AppContainer>
        {/* ========
             LEFT
        ======== */}
        <LeftPanel>
          <LeftHeader>
            <EmployeeWorkOrderHeader>My Work Orders</EmployeeWorkOrderHeader>
          </LeftHeader>
          <LeftBody>
            <EmployeeWorkOrderList navigation={this.props.navigation} />
          </LeftBody>
        </LeftPanel>
        {/* ========
             RIGHT
        ======== */}
        <RightPanel>
          <RightHeader>
            <ActionHeader>Action</ActionHeader>
          </RightHeader>
          <RightBody>
            <ActionsList />
          </RightBody>
        </RightPanel>
      </AppContainer>
    );
  }
}
