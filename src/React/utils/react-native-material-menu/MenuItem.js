import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Platform,
  View
} from 'react-native';
import CheckBox from '../../common/LeftHeader/CheckBox';

function MenuItem({
  children,
  disabled,
  disabledTextColor,
  onPress,
  style,
  textStyle,
  underlayColor,
  checkBox,
  ...props
}) {
  return (
    <TouchableHighlight
      {...props}
      disabled={disabled}
      onPress={onPress}
      style={[styles.container, style]}
      underlayColor={underlayColor}
    >
      {checkBox ? (
        <CheckBox
          label={children}
          labelColor={'#000'}
          iconColor={'#BDBDBD'}
          labelFontSize={14}
          iconFontSize={25}
          style={[disabled && { color: disabledTextColor }, textStyle]}
          onPress={() => {}}
        />
      ) : (
        <Text
          ellipsizeMode={Platform.OS === 'ios' ? 'clip' : 'tail'}
          numberOfLines={1}
          style={[
            styles.title,
            disabled && { color: disabledTextColor },
            textStyle
          ]}
        >
          {children}
        </Text>
      )}
    </TouchableHighlight>
  );
}

MenuItem.propTypes = {
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  disabledTextColor: PropTypes.string,
  onPress: PropTypes.func,
  style: TouchableHighlight.propTypes.style,
  textStyle: Text.propTypes.style,
  underlayColor: TouchableHighlight.propTypes.underlayColor
  // checkBox: PropTypes.boolean.isRequired
};

MenuItem.defaultProps = {
  disabled: false,
  disabledTextColor: '#BDBDBD',
  underlayColor: '#E0E0E0',
  checkBox: false
};

const styles = StyleSheet.create({
  container: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'flex-start',
    maxWidth: 248,
    minWidth: 124,
    paddingLeft: '5%'
  },
  title: {
    fontSize: 14,
    fontWeight: '400',
    paddingHorizontal: 16
  }
});

export default MenuItem;