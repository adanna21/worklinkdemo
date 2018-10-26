import React, { Component } from 'react';
import { Text, FlatList, View } from 'react-native';
import { workOrders, IWorkOrder } from '../../../../data';
import WorkOrderContainer from '../../../common/AppBody/WorkOrder/WorkOrderContainer';
import SuperWorkOrderCard from '../../../common/AppBody/WorkOrder/SuperWorkOrderCard';
import WorkOrderDetails from '../../../common/AppBody/WorkOrder/WorkOrderDetails';
import Status from '../../../common/AppBody/WorkOrder/Status';
import StatusText from '../../../common/AppBody/WorkOrder/StatusText';
import StatusIndicator from '../../../common/AppBody/WorkOrder/StatusIndicator';
import WorkCode from '../../../common/AppBody/WorkOrder/WorkCode';
import WorkCodeId from '../../../common/AppBody/WorkOrder/WorkCodeId';
import WorkCodeText from '../../../common/AppBody/WorkOrder/WorkCodeText';
import Location from '../../../common/AppBody/WorkOrder/Location';
import LocationText from '../../../common/AppBody/WorkOrder/LocationText';
import Client from '../../../common/AppBody/WorkOrder/Client';
import ViewMore from '../../../common/AppBody/WorkOrder/ViewMore';
import Avatar from '../../../common/AppBody/WorkOrder/Avatar';
import WorkOrderOffline from './WorkOrderOffline';
import { IInitialDataProps } from '../../../../Redux/data-management/initialData/types';
import { NavigationScreenProp } from 'react-navigation';

export interface ISuperWorkOrderListProps {
  initialData: IInitialDataProps;
  navigation: NavigationScreenProp<any, any>;
  droppedInZone: () => void;
}

export default class SuperWorkOrderList extends Component<
  ISuperWorkOrderListProps,
  any
> {
  componentDidMount() {
    const {
      initialData: { workOrders }
    } = this.props;
    console.log('super work', workOrders);
  }
  // ====================================================== //
  // ======= Render Placeholder If Data Is NOT Loaded ===== //
  // ====================================================== //
  renderOffline = () => {
    const {
      initialData: { loading }
    } = this.props;
    return (
      <View>
        <WorkOrderOffline isReady={loading} />
        <WorkOrderOffline isReady={loading} />
        <WorkOrderOffline isReady={loading} />
        <WorkOrderOffline isReady={loading} />
      </View>
    );
  };

  // =============================================== //
  // ======= Render FlatList If Data Is Loaded ===== //
  // =============================================== //
  renderFlatList = () => {
    const {
      initialData: { workOrders }
    } = this.props;

    return (
      <FlatList
        data={workOrders}
        extraData={[this.props, this.state]}
        renderItem={({ item }) => (
          <SuperWorkOrderCard droppedInZone={this.props.droppedInZone}>
            <WorkOrderDetails>
              <Status>
                <StatusText>{item.status.toLocaleUpperCase()}</StatusText>
                <StatusIndicator />
              </Status>
              <WorkCode>
                <WorkCodeText>{item.workCode}</WorkCodeText>
                <WorkCodeId>{item.id}</WorkCodeId>
              </WorkCode>
              <Location>
                <LocationText>
                  Service Location: {item.serviceLocation}
                </LocationText>
                <Client>Client: {item.client.name}</Client>
              </Location>
              <ViewMore onViewMore={this.onViewMore} item={item} />
            </WorkOrderDetails>
            <Avatar>
              <Text>JJ</Text>
            </Avatar>
          </SuperWorkOrderCard>
        )}
        keyExtractor={item => item.id}
      />
    );
  };

  // =============================================== //
  // =====   Show WorkOrder Details OnPress    ===== //
  // =============================================== //
  onViewMore = (workOrder: IWorkOrder) => {
    this.props.navigation.navigate('Details', {
      ...workOrder
    });
  };

  // =============================================== //
  // =================== Main Render =============== //
  // =============================================== //
  render() {
    const {
      initialData: { loading }
    } = this.props;
    return (
      <WorkOrderContainer>
        {loading ? this.renderOffline() : this.renderFlatList()}
      </WorkOrderContainer>
    );
  }
}
