import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.logo}>NYU WorKLinK</Text>
          <TouchableOpacity>
            <Icon name="search" size={20} color="#FFF" />
          </TouchableOpacity>
        </View>
        <View style={styles.icons}>
          <TouchableOpacity>
            <Icon name="notifications" size={20} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="settings" size={20} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.user}>
            <Text style={styles.userName}>Alex Warren</Text>
            <Icon name="arrow-drop-down" size={25} color="#FFF" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#590889',
    paddingTop: '1%',
    paddingBottom: '1%'
    // paddingLeft: 15,
    // paddingRight: 15
  },
  title: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center'
  },
  logo: {
    fontSize: 28,
    color: '#FFF',
    fontWeight: 'bold',
    paddingLeft: '20%'
  },
  icons: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-evenly'
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center'
    // paddingTop: '.5%'
  },
  userName: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 15
  }
});
