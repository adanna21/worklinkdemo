import React, { Component, ReactChildren } from 'react';
import {
  View,
  PanResponder,
  Modal,
  Easing,
  Animated,
  TouchableOpacity,
  TouchableWithoutFeedback,
  LayoutRectangle,
  ModalPropsIOS
} from 'react-native';
import PropTypes from 'prop-types';
import TeamModal from '../../components/RightPanel/Body/TeamModal';
import { ITeamMember } from '../../../Redux/drag-and-drop/types';
import { IZoneDetails, IPosition } from './DropZone';

const allOrientations: ModalPropsIOS['supportedOrientations'] = [
  'portrait',
  'portrait-upside-down',
  'landscape',
  'landscape-left',
  'landscape-right'
];

export interface IPosition {
  x: number;
  y: number;
}

interface IDragContainerProps {
  teamArray: ITeamMember[];
  selectTeamMember(memberId: string): void;
  isDroppedInZone: () => any;
  onDragStart: (draggingComponent: any) => any;
  onDragEnd: (draggingComponent: any, hitZone: any) => any;
  style: any;
}
interface IDragModalProps {
  content: any;
  drop: () => any;
  teamArray: ITeamMember[];
  location: Animated.ValueXY;
}

class DragModal extends Component<IDragModalProps, any> {
  render() {
    let { startPosition } = this.props.content;
    return (
      <Modal transparent={true} supportedOrientations={allOrientations}>
        <TouchableWithoutFeedback onPressIn={this.props.drop}>
          <Animated.View style={this.props.location.getLayout()}>
            <TeamModal
              teamArray={this.props.teamArray}
              content={this.props.content}
            />
          </Animated.View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}

export default class DragContainer extends Component<IDragContainerProps, any> {
  displayName: string;

  containerLayout: LayoutRectangle;
  dropZone: number[];
  dropZones: IZoneDetails[];
  draggables: number[];
  private _listener: string;
  private _point: IPosition;
  private _locked: boolean;
  private _panResponder: any;
  private _offset: IPosition;
  constructor(props: any) {
    super(props);
    this.displayName = 'DragContainer';
    this.containerLayout = { x: 0, y: 0, width: 0, height: 0 };
    this.dropZone = [0];
    this._point = { x: 0, y: 0 };
    this._locked = false;
    this._panResponder = undefined;
    this._offset = { x: 0, y: 0 };
    let location = new Animated.ValueXY();

    this.state = {
      location
    };
    this.dropZones = [];
    this.draggables = [];
    this.onDrag = this.onDrag.bind(this);
    this._handleDragging = this._handleDragging.bind(this);
    this._handleDrop = this._handleDrop.bind(this);
    this._listener = location.addListener(this._handleDragging);
    this.updateZone = this.updateZone.bind(this);
    this.removeZone = this.removeZone.bind(this);
  }

  static propTypes = {
    onDragStart: PropTypes.func,
    onDragEnd: PropTypes.func
  };

  componentWillUnmount() {
    if (this._listener) this.state.location.removeListener(this._listener);
  }

  getDragContext() {
    return {
      dropZones: this.dropZones,
      onDrag: this.onDrag,
      container: this.containerLayout,
      dragging: this.state.draggingComponent,
      updateZone: this.updateZone,
      removeZone: this.removeZone
    };
  }

  getChildContext() {
    return { dragContext: this.getDragContext() };
  }

  static childContextTypes = {
    dragContext: PropTypes.any
  };

  updateZone(details: IZoneDetails) {
    let zone = this.dropZones.find(item => item.ref === details.ref);
    if (!zone) {
      this.dropZones.push(details);
    } else {
      let i = this.dropZones.indexOf(zone);
      this.dropZones.splice(i, 1, details);
    }
  }

  removeZone(ref: React.RefObject<View>) {
    let i = this.dropZones.findIndex(x => x.ref === ref);
    if (i !== -1) {
      this.dropZones.splice(i, 1);
    }
  }

  inZone({ x, y }: IPosition, zone: IZoneDetails) {
    return (
      zone.x <= x &&
      zone.width + zone.x >= x &&
      zone.y <= y &&
      zone.height + zone.y >= y
    );
  }
  _addLocationOffset(point: IPosition) {
    if (!this.state.draggingComponent) return point;
    return {
      x: point.x + this.state.draggingComponent.startPosition.width / 2,
      y: point.y + this.state.draggingComponent.startPosition.height / 2
    };
  }

  _handleDragging(point: IPosition) {
    this._point = point;
    if (this._locked || !point) return;
    this.dropZones.forEach(zone => {
      if (this.inZone(point, zone)) {
        zone.onEnter(point);
      } else {
        zone.onLeave();
      }
    });
  }

  _handleDrop() {
    let hitZones: any = [];
    this.dropZones.forEach(zone => {
      if (!this._point) return;
      if (this.inZone(this._point, zone)) {
        // let main container know team was dropped on a workOrder
        this.props.isDroppedInZone();
        hitZones.push(zone);
        zone.onDrop(this.state.draggingComponent.data);
      }
    });
    if (this.props.onDragEnd) {
      this.props.onDragEnd(this.state.draggingComponent, hitZones);
    }
    if (
      !hitZones.length &&
      this.state.draggingComponent &&
      this.state.draggingComponent.ref
    ) {
      this._locked = true;
      return Animated.timing(this.state.location, {
        duration: 400,
        easing: Easing.elastic(1),
        toValue: {
          x: 0, //this._offset.x - x,
          y: 0 //his._offset.y - y
        }
      }).start(() => {
        this._locked = false;
        this._handleDragging({ x: -100000, y: -100000 });
        this.setState({
          draggingComponent: null
        });
      });
    }
    this._handleDragging({ x: -100000, y: -100000 });
    this.setState({
      draggingComponent: null
    });
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: () => {
        if (this.state.draggingComponent) {
          this._handleDrop();
        }
        return false;
      },
      onMoveShouldSetPanResponder: (evt, gestureState) =>
        !!this.state.draggingComponent,
      onPanResponderMove: (...args: any[]) =>
        Animated.event([
          null,
          {
            dx: this.state.location.x, // x,y are Animated.Value
            dy: this.state.location.y
          }
        ]).apply(this, args),
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        if (!this.state.draggingComponent) return;
        //Ensures we exit all of the active drop zones
        this._handleDrop();
      }
    });
  }
  // added the 'id' parameter to capture id of team member
  onDrag(
    id: string,
    ref: React.RefObject<TouchableOpacity>,
    children: ReactChildren,
    data: any
  ) {
    if (ref.current !== null)
      ref.current.measure((...args: any[]) => {
        if (this._listener) this.state.location.removeListener(this._listener);
        let location = new Animated.ValueXY();
        this._listener = location.addListener(args =>
          this._handleDragging(this._addLocationOffset(args))
        );
        this._offset = { x: args[4], y: args[5] };
        location.setOffset(this._offset);

        this.setState(
          {
            location,
            draggingComponent: {
              ref,
              data,
              children: React.Children.map(children, child => {
                return React.cloneElement(child as React.ReactElement<any>, {
                  dragging: true
                });
              }),
              startPosition: {
                x: args[4],
                y: args[5],
                width: args[2],
                height: args[3]
              }
            }
          },
          () => {
            if (this.props.onDragStart)
              this.props.onDragStart(this.state.draggingComponent);
          }
        );
      });
  }

  render() {
    return (
      <View
        style={[{ flex: 1 }, this.props.style]}
        onLayout={e => (this.containerLayout = e.nativeEvent.layout)}
        {...this._panResponder.panHandlers}
      >
        {this.props.children}
        {this.state.draggingComponent ? (
          <DragModal
            content={this.state.draggingComponent}
            location={this.state.location}
            drop={this._handleDrop}
            teamArray={this.props.teamArray}
          />
        ) : null}
      </View>
    );
  }
}
