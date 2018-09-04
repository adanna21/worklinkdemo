// TeamMember Object
export interface ITeamMember {
  id: string;
}

// Constants
export const enum ActionTypes {
  SELECT_TEAM_MEMBER = '@@drag-and-drop/SELECT_TEAM_MEMBER',
  UNSELECT_TEAM_MEMBER = '@@drag-and-drop/UNSELECT_TEAM_MEMBER',
  ASSIGN_TEAM = '@@drag-and-drop/ASSIGN_TEAM'
}

export interface ISelectTeamMemberAction {
  type: ActionTypes.SELECT_TEAM_MEMBER;
  payload: { memberId: string };
}

export interface IUnSelectTeamMemberAction {
  type: ActionTypes.UNSELECT_TEAM_MEMBER;
  payload: { memberId: string };
}

// export interface IAssignTeamAction {
//   type: ActionTypes.ASSIGN_TEAM;
//   payload: { ITeamMember };
// }
