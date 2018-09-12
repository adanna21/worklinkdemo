import {
  ActionTypes,
  ISelectTeamMemberAction,
  IUnSelectTeamMemberAction
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

export type Action = ISelectTeamMemberAction | IUnSelectTeamMemberAction;
