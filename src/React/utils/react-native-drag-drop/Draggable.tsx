import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { ITeamMember } from '../../../Redux/drag-and-drop/types';

interface IDraggableProps {
  itemId: string;
  data: any;
  teamArray: ITeamMember[];
  addCurrentId(id: IDraggableProps['itemId']): void;
  draggableSelectTeamMember(id: IDraggableProps['itemId']): void;
  draggableChangeIcon(id: IDraggableProps['itemId']): void;
  style: any;
  disabled?(): void;
  dragOn: string;
  onPress: any;
  activeOpacity: any;
}

class Draggable extends Component<IDraggableProps, any> {
  displayName: string;
  private wrapper: React.RefObject<TouchableOpacity>;

  constructor(props: any) {
    super(props);
    this.displayName = 'Draggable';
    this._initiateDrag = this._initiateDrag.bind(this);
    this.wrapper = React.createRef();
  }

  static contextTypes = {
    dragContext: PropTypes.any
  };

  static propTypes = {
    dragOn: PropTypes.oneOf(['onLongPress', 'onPressIn'])
  };
  // componentWillMount () {
  //   this.props.dragOn = ''
  // }
  _initiateDrag() {
    const {
      disabled,
      itemId,
      children,
      data,
      teamArray,
      addCurrentId
    } = this.props;
    if (!disabled)
      this.context.dragContext.onDrag(itemId, this.wrapper, children, data);

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
    isDragging = isDragging && isDragging === this.wrapper;
    return (
      <TouchableOpacity
        activeOpacity={this.props.activeOpacity}
        style={this.props.style}
        onLongPress={
          this.props.dragOn === 'onLongPress' ? this._initiateDrag : undefined
        }
        onPress={this.props.onPress}
        onPressIn={
          this.props.dragOn === 'onPressIn' ? this._initiateDrag : undefined
        }
        ref={this.wrapper}
      >
        {React.Children.map(this.props.children, child => {
          return React.cloneElement(child as React.ReactElement<any>, {
            ghost: isDragging
          });
        })}
      </TouchableOpacity>
    );
  }
}

export default Draggable;
