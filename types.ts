export enum AppState {
  TREE_FORM = 'TREE_FORM',     // Fist
  SCATTER_FORM = 'SCATTER_FORM', // Open Palm
}

export enum GestureType {
  NONE = 'None',
  CLOSED_FIST = 'Closed_Fist',
  OPEN_PALM = 'Open_Palm',
  POINTING_UP = 'Pointing_Up',
  VICTORY = 'Victory', // Keeping enum key for safety, but won't trigger app state
  THUMB_DOWN = 'Thumb_Down',
  THUMB_UP = 'Thumb_Up',
  UNKNOWN = 'Unknown'
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}

export interface ParticleData {
  id: number;
  treePos: [number, number, number];
  scatterPos: [number, number, number];
  color: [number, number, number];
  size: number;
}