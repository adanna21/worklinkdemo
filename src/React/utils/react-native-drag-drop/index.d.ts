// Type definitions for react-drag-and-drop 0.1
// Project:  https://github.com/deanmcpherson/react-native-drag-drop
// Definitions by: Adanna Omatu https://github.com/adanna21

import React, { Component } from 'react';
// ============================== //
// ======= DragContainer ======== //
// ============================== //
export interface DragContainerProps {
  teamArray?: any;
  onDragStart: () => any;
  onDragEnd: () => any;
  isDroppedInZone: () => any;
}

export class DragContainer extends Component<DragContainerProps, any> {}
export interface DragModalProps {
  content?: any;
  drop?: any;
  teamArray?: any;
  location: any;
}
export class DragModal extends Component<DragModalProps, any> {}
export const allOrientations: [

    | 'portrait'
    | 'portrait-upside-down'
    | 'landscape'
    | 'landscape-left'
    | 'landscape - right'
];

// ============================== //
// ========== DragZone ========== //
// ============================== //
// export interface DropZoneProps {
//   teamArray?: any;
//   onDragStart: () => any;
//   onDragEnd: () => any;
//   isDroppedInZone: () => any;
// }
export class DropZone extends Component<any, any> {}
export class Draggable extends Component<any, any> {}
