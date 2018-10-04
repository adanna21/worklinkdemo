// Type definitions for react-drag-and-drop 0.1
// Project:  https://github.com/deanmcpherson/react-native-drag-drop
// Definitions by: Adanna Omatu https://github.com/adanna21
// declare module 'react-drag-and-drop'
import React, { Component } from 'react';

// declare module 'react-native-drag-drop' {
export interface DragContainerProps {
  onDragStart: () => any;
  onDragEnd: () => any;
  isDroppedInZone: () => any;
}

export class DragContainer extends Component<DragContainerProps, any> {}
export interface DragModalProps {
  content?: any;
  drop?: any;
  teamArray: any;
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
// }
