import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

interface IDropZoneProps {
  onDrop: (data: any) => any;
  onLeave: () => any;
  onEnter: (point?: IPosition) => any;
  style: any;
  dragging?: () => any;
  disabled?: () => any;
  pointerEvents?: any;
}
export interface IPosition {
  x: number;
  y: number;
}

export interface IZoneDetails {
  width: number;
  height: number;
  x: number;
  y: number;
  ref: React.RefObject<View>;
  onEnter: IDropZoneProps['onEnter'];
  onLeave: IDropZoneProps['onLeave'];
  onDrop: IDropZoneProps['onDrop'];
}

export default class DropZone extends Component<IDropZoneProps, any> {
  displayName: string;
  private _timer: any;
  private wrapper: React.RefObject<View>;
  constructor(props: any) {
    super(props);
    this.displayName = 'DropZone';
    this._timer = this.state = {};
    // most recent way to create refs
    this.wrapper = React.createRef();
    this.reportMeasurements = this.reportMeasurements.bind(this);
    this.onEnter = this.onEnter.bind(this);
    this.onLeave = this.onLeave.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  reportMeasurements() {
    if (this.props.dragging)
      this.context.dragContext.removeZone(this.wrapper.current);
    if (this.wrapper.current !== null)
      this.wrapper.current.measure((_, __, width, height, x, y) => {
        if (!this.props.dragging)
          this.context.dragContext.updateZone({
            width,
            height,
            x,
            y,
            ref: this.wrapper.current,
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
    this.context.dragContext.removeZone(this.wrapper.current);
    clearInterval(this._timer);
  }
  componentDidUpdate() {
    this.reportMeasurements();
  }

  onEnter({ x, y }: IPosition) {
    if (this.props.disabled) return;
    if (!this.state.active) {
      if (this.props.onEnter) this.props.onEnter();
      this.setState({ active: true });
    }
  }

  onLeave() {
    if (this.props.disabled) return;
    if (this.state.active) {
      if (this.props.onLeave) this.props.onLeave();
      this.setState({ active: false });
    }
  }

  onDrop(data: any) {
    if (this.props.disabled) return;
    if (this.props.onDrop) this.props.onDrop(data);
    this.setState({ active: false });
  }

  static contextTypes = { dragContext: PropTypes.any };

  render() {
    return (
      <View
        style={this.props.style}
        pointerEvents={this.props.pointerEvents}
        onLayout={this.reportMeasurements}
        ref={this.wrapper}
      >
        {React.Children.map(this.props.children, child => {
          if (React.isValidElement(child)) {
            return React.cloneElement(
              child,
              Object.assign({}, this.props, {
                dragOver: this.state.active
              })
            );
          }
        })}
      </View>
    );
  }
}
