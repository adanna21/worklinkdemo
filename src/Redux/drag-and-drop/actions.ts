import {
  ActionTypes,
  IToggleTeamMemberAction
  // IRemoveTeamMemberAction
} from './types';

export const toggleTeamMember = (memberId: string): IToggleTeamMemberAction => {
  return {
    type: ActionTypes.TOGGLE_TEAM_MEMBER,
    payload: { memberId }
  };
};

// export const removeTeamMember = (memberId: string): IRemoveTeamMemberAction => {
//   return {
//     type: ActionTypes.REMOVE_TEAM_MEMBER,
//     payload: { memberId }
//   };
// };

export type Action = IToggleTeamMemberAction;
