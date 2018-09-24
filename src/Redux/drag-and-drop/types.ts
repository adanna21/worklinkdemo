// TeamMember Object
export interface ITeamMember {
  id: string;
}

// Constants
export const enum ActionTypes {
  TOGGLE_TEAM_MEMBER = '@@drag-and-drop/TOGGLE_TEAM_MEMBER',
  // REMOVE_TEAM_MEMBER = '@@drag-and-drop/REMOVE_TEAM_MEMBER',
  ASSIGN_TEAM = '@@drag-and-drop/ASSIGN_TEAM'
}

export interface IToggleTeamMemberAction {
  type: ActionTypes.TOGGLE_TEAM_MEMBER;
  payload: { memberId: string };
}

// export interface IRemoveTeamMemberAction {
//   type: ActionTypes.REMOVE_TEAM_MEMBER;
//   payload: { memberId: string };
// }

// export interface IAssignTeamAction {
//   type: ActionTypes.ASSIGN_TEAM;
//   payload: { ITeamMember };
// }
