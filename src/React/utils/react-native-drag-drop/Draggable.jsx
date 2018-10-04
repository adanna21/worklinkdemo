import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

class Draggable extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Draggable';
    this._initiateDrag = this._initiateDrag.bind(this);
  }

  static contextTypes = {
    dragContext: PropTypes.any
  };

  static propTypes = {
    dragOn: PropTypes.oneOf(['onLongPress', 'onPressIn'])
  };

  _initiateDrag() {
    const {
      disabled,
      itemId,
      children,
      data,
      teamArray,
      addCurrentId,
      changeIcon
    } = this.props;
    if (!disabled)
      this.context.dragContext.onDrag(
        itemId,
        this.refs.wrapper,
        children,
        data
      );
    // if there are no items in the teamArray then you can add one by dragging
    if (teamArray.length === 0) {
      // if only one teamMember is dragged then add them to teamArray
      this.props.draggableSelectTeamMember(itemId);
      addCurrentId(itemId);
      this.setState({}, () => {
        // change icon after item added to teamArray
        this.props.draggableChangeIcon(itemId);
      });
    }
  }

  static defaultProps = {
    dragOn: 'onLongPress'
  };

  render() {
    let isDragging =
      this.context.dragContext.dragging &&
      this.context.dragContext.dragging.ref;
    isDragging = isDragging && isDragging === this.refs.wrapper;
    return (
      <TouchableOpacity
        activeOpacity={this.props.activeOpacity}
        style={this.props.style}
        onLongPress={
          this.props.dragOn === 'onLongPress' ? this._initiateDrag : null
        }
        onPress={this.props.onPress}
        onPressIn={
          this.props.dragOn === 'onPressIn' ? this._initiateDrag : null
        }
        ref="wrapper"
      >
        {React.Children.map(this.props.children, child => {
          return React.cloneElement(child, { ghost: isDragging });
        })}
      </TouchableOpacity>
    );
  }
}

export default Draggable;
