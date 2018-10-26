import { ActionTypes, IToggleTeamMemberAction } from './types';

export const toggleTeamMember = (memberId: string): IToggleTeamMemberAction => {
  return {
    type: ActionTypes.TOGGLE_TEAM_MEMBER,
    payload: { memberId }
  };
};

export type Action = IToggleTeamMemberAction;
