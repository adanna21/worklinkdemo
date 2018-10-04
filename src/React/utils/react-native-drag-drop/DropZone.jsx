import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

// interface IDropZoneProps {
//   onDrop: (data: any) => any;
//   onLeave: () => any;
//   onEnter: () => any;
//   style: any;
//   dragging?: () => any;
//   measure?: () => any;
//   disabled?: () => any;
//   pointerEvents?: any;
// }
// interface IPosition {
//   x: number;
//   y: number;
// }

export default class DropZone extends Component {
  // displayName: string;
  // wrapper: any;
  // private _timer: any;
  constructor(props) {
    super(props);
    this.displayName = 'DropZone';
    this._timer = this.state = {};
    this.reportMeasurements = this.reportMeasurements.bind(this);
    this.onEnter = this.onEnter.bind(this);
    this.onLeave = this.onLeave.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  reportMeasurements() {
    if (this.props.dragging)
      this.context.dragContext.removeZone(this.refs.wrapper);
    this.wrapper.measure((_, __, width, height, x, y) => {
      if (!this.props.dragging)
        this.context.dragContext.updateZone({
          width,
          height,
          x,
          y,
          ref: this.refs.wrapper,
          onEnter: this.onEnter,
          onLeave: this.onLeave,
          onDrop: this.onDrop
        });
    });
  }

  static propTypes = {
    onEnter: PropTypes.func,
    onLeave: PropTypes.func,
    onDrop: PropTypes.func
  };

  componentDidMount() {
    this.reportMeasurements();
    this._timer = setInterval(this.reportMeasurements, 1000);
  }

  componentWillUnmount() {
    this.context.dragContext.removeZone(this.refs.wrapper);
    clearInterval(this._timer);
  }
  componentDidUpdate() {
    this.reportMeasurements();
  }

  onEnter({ x, y }) {
    if (this.props.disabled) return;
    if (!this.state.active) {
      if (this.props.onEnter) this.props.onEnter();
      this.setState({
        active: true
      });
    }
  }

  onLeave() {
    if (this.props.disabled) return;
    if (this.state.active) {
      if (this.props.onLeave) this.props.onLeave();
      this.setState({
        active: false
      });
    }
  }

  onDrop(data) {
    if (this.props.disabled) return;
    if (this.props.onDrop) this.props.onDrop(data);
    this.setState({
      active: false
    });
  }

  static contextTypes = {
    dragContext: PropTypes.any
  };

  render() {
    return (
      <View
        style={this.props.style}
        pointerEvents={this.props.pointerEvents}
        onLayout={this.reportMeasurements}
        ref={'wrapper'}
      >
        {React.Children.map(this.props.children, child => {
          if (React.isValidElement(child)) {
            return React.cloneElement(
              child,
              Object.assign({}, this.props, { dragOver: this.state.active })
            );
          }
        })}
      </View>
    );
  }
}
