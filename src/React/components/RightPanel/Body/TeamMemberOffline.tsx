import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Placeholder from 'rn-placeholder';

export default class TeamMemberOffline extends Component<any, any> {
  render() {
    const words = [
      { color: '#efefef', width: '70%' },
      { color: '#efefef', width: '20%' }
    ];
    return (
      <View style={styles.teamMember}>
        <View style={styles.circle}>
          <Placeholder.Media
            size={45}
            hasRadius
            animate="shine"
            onReady={this.props.isReady}
          />
        </View>
        <View style={styles.lines}>
          <Placeholder.MultiWords
            animate="shine"
            words={words}
            textSize={14}
            onReady={this.props.isReady}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  teamMember: {
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#c6cacc'
  },
  circle: {
    flex: 1,
    alignItems: 'center',
    padding: '3%'
  },
  lines: {
    flex: 2
  }
});
