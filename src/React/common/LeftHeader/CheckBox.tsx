import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface State {
  checked: boolean;
}
interface ICheckBox {
  label: string;
  labelFontSize: number;
  iconFontSize: number;
  labelColor: string;
  iconColor: string;
  onPress: () => void;
}
export default class CheckBox extends Component<ICheckBox, State> {
  static defaultProps = {
    labelFontSize: 12,
    iconFontSize: 20,
    labelColor: '#424242',
    iconColor: '#BDBDBD'
  };
  state: State = {
    checked: false
  };
  componentWillUnmount() {
    console.log("i'm out!");
  }
  render() {
    const { checked } = this.state;
    const color = {
      label: this.props.labelColor,
      icon: this.props.iconColor
    };
    const fontSize = {
      label: this.props.labelFontSize,
      icon: this.props.iconFontSize
    };
    return (
      <View style={styles.checkBox}>
        <TouchableOpacity
          onPress={() => {
            this.setState({ checked: !this.state.checked });
            this.props.onPress();
          }}
        >
          <Icon
            style={styles.icon}
            name={checked ? 'checkbox-marked' : 'checkbox-blank-outline'}
            size={fontSize.icon}
            color={color.icon}
          />
        </TouchableOpacity>
        <Text
          style={[
            styles.label,
            { fontSize: fontSize.label, color: color.label }
          ]}
        >
          {this.props.label}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  checkBox: {
    flex: 0.6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    marginRight: '3%'
  },
  label: {
    fontSize: 12,
    alignSelf: 'center'
  }
});
