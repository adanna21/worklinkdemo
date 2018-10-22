import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Placeholder from 'rn-placeholder';

export default class WorkOrderOffline extends Component<any, any> {
  render() {
    const shadowStyle = {
      backgroundColor: '#fff',
      shadowOpacity: 0.1,
      elevation: 4,
      shadowOffset: { width: -1, height: 3 },
      shadowRadius: 5
    };
    return (
      <View style={[styles.wordCard, shadowStyle]}>
        <Placeholder.ImageContent
          position="right"
          hasRadius
          lineNumber={5}
          textSize={16}
          lineSpacing={7}
          width="100%"
          lastLineWidth="30%"
          firstLineWidth="10%"
          animate="shine"
          onReady={this.props.isReady}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wordCard: {
    padding: '5%',
    paddingTop: '5%',
    paddingBottom: '5%',
    marginBottom: '3%',
    borderRadius: 6
  }
});
