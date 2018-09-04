import {
  ActionTypes,
  ISelectTeamMemberAction,
  IUnSelectTeamMemberAction
  // IAssignTeamAction
} from './types';

export const selectTeamMember = (memberId: string): ISelectTeamMemberAction => {
  return {
    type: ActionTypes.SELECT_TEAM_MEMBER,
    payload: { memberId }
  };
};

export const unSelectTeamMember = (
  memberId: string
): IUnSelectTeamMemberAction => {
  return {
    type: ActionTypes.UNSELECT_TEAM_MEMBER,
    payload: { memberId }
  };
};

// export const assignTeam = (teamMember): IAssignTeamAction => {
//   return { type: ActionTypes.ASSIGN_TEAM, payload: { teamMember } };
// };

export type Action = ISelectTeamMemberAction | IUnSelectTeamMemberAction;
// | IAssignTeamAction;
