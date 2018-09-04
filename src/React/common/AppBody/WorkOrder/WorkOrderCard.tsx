import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import DropZone from '../../../utils/react-native-drag-drop/DropZone';

export default class WorkOrderCard extends Component<any, any> {
  state = {
    zoneEntered: false
  };
  render() {
    const shadowStyle = {
      backgroundColor: '#fff',
      shadowOpacity: 0.1,
      elevation: 4,
      shadowOffset: { width: -1, height: 3 },
      shadowRadius: 5
    };
    return (
      <DropZone
        // onEnter={() =>
        //   this.setState({
        //     zoneEntered: true
        //   })
        // }
        // onLeave={() =>
        //   this.setState({
        //     zoneEntered: false
        //   })
        // }
        style={styles.dropZone}
      >
        <View
          style={[
            styles.wordCard,
            shadowStyle,
            this.state.zoneEntered && styles.active
          ]}
        >
          <View />
          {this.props.children}
        </View>
      </DropZone>
    );
  }
}

const styles = StyleSheet.create({
  dropZone: {
    paddingBottom: '3%'
  },
  wordCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: '3%',
    paddingBottom: '8%',
    borderRadius: 3
  },
  active: {
    backgroundColor: '#FFD740'
  }
});
