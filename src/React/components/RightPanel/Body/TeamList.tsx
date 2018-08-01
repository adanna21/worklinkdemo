import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput
} from 'react-native';
import { workOrders } from '../../../../data';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TeamMember from './TeamMember';

export default class TeamList extends Component<any, any> {
  state = {
    scrollEnabled: true,
    modalVisible: false
  };

  setModalVisible = (visible: boolean) => {
    this.setState({ modalVisible: visible });
    console.log('visible?', visible);
    console.log('after state change', this.state.modalVisible);
  };
  // toggleScroll = () => {
  //   this.setState(prevState => ({ scrollEnabled: !prevState.scrollEnabled }));
  // };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.teamSearch}>
          <View style={styles.searchInput}>
            <TextInput
              style={styles.inputText}
              placeholder={'Enter First or Last Name'}
              placeholderTextColor={'#999'}
              underlineColorAndroid={'#fff'}
              autoCorrect={false}
            />
            {/* ref={} */}
            <Icon name="search" size={18} color="#BDBDBD" />
          </View>
        </View>
        <FlatList
          style={styles.teamContainer}
          data={workOrders}
          extraData={[this.state, this.setModalVisible]}
          renderItem={({ item }) => (
            <TeamMember
              item={item}
              setModalVisible={this.setModalVisible}
              modalVisible={this.state.modalVisible}
            />
          )}
          keyExtractor={item => item.id}
          scrollEnabled={this.state.scrollEnabled}
        />
        <View style={styles.addGroups}>
          <TouchableOpacity style={styles.addGroupButton}>
            <Text style={styles.addGroupText}>Add Groups or People</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    // zIndex: 355,
    flex: 1,
    alignContent: 'space-around'
  },
  teamSearch: {
    flex: 0.2,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#BDBDBD',
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    height: 35,
    padding: '2%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#BDBDBD'
  },
  inputText: {
    width: '75%',
    fontSize: 12
  },
  teamContainer: {
    flex: 1
    // zIndex: 55
    // position: 'absolute'
  },
  addGroups: {
    flex: 1,
    paddingTop: '15%'
  },
  addGroupButton: {
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#BDBDBD',
    height: 45,
    paddingRight: '5%',
    paddingLeft: '5%'
  },
  addGroupText: {
    fontSize: 12
  }
});
