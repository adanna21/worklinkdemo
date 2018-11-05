import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class HistoryCard extends Component<any, any> {
  convertTime = (timestamp: Date) => {
    const time = new Date(timestamp);
    // hours
    const hours = time.getHours();
    let hoursString = hours.toString();
    if (hours < 10) hoursString = '0' + hours;
    // minutes
    const minutes = time.getMinutes();
    let minutesString = minutes.toString();
    if (minutes < 10) {
      minutesString = '0' + minutes;
    }

    let timeOfDay = hours < 12 ? 'AM' : 'PM';

    const newTime =
      time.getMonth() +
      1 +
      '/' +
      time.getDate() +
      '/' +
      time.getFullYear() +
      ', ' +
      hoursString +
      ':' +
      minutesString +
      ' ' +
      timeOfDay;

    return newTime;
  };
  render() {
    const { history } = this.props.navigation.state.params;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>History</Text>
        <View style={styles.history}>
          <View style={styles.historyItem}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>JJ</Text>
            </View>
            <Text style={styles.event}>{history[0].description}</Text>
          </View>
          <Text style={styles.time}>{this.convertTime(history[0].time)}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: '5%',
    paddingBottom: '2%'
  },
  title: {
    color: '#424242',
    paddingBottom: '2%',
    fontWeight: 'bold'
  },
  history: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '2%'
  },
  historyItem: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 0.6
  },
  avatar: {
    backgroundColor: '#BDBDBD',
    borderRadius: 40,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatarText: {
    color: '#424242'
  },
  event: {
    color: '#757575',
    fontSize: 16
  },
  time: {
    color: '#757575'
  }
});
