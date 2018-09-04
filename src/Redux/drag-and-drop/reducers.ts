import { Action } from './actions';
import { ActionTypes } from './types';
import { ISuperQueueProps } from '../../React/screens/SupervisorQueueScreen';

export const initialState: ISuperQueueProps = {
  teamMembers: [],
  error: ''
};

export const reducer = (
  state: ISuperQueueProps = initialState,
  action: Action
) => {
  const { teamMembers } = state;
  const SELECT = ActionTypes.SELECT_TEAM_MEMBER;
  const UNSELECT = ActionTypes.UNSELECT_TEAM_MEMBER;
  switch (action.type) {
    case SELECT || UNSELECT:
      const memberId = action.payload.memberId;
      // check if member is already in the team
      const memberIdPresent = teamMembers.some(
        member => member.id === memberId
      );
      // add member if not already there
      if (!memberIdPresent && SELECT) {
        return {
          ...state,
          teamMembers: [...state.teamMembers, { id: action.payload.memberId }]
        };
        // remove member if already there
      } else if (memberIdPresent && UNSELECT) {
        return {
          ...state,
          teamMembers: teamMembers.filter(member => member.id !== memberId)
        };
      } else {
        return { ...state, error: 'oops' };
      }
    // case ActionTypes.ASSIGN_TEAM:
    //   return state.teamMembers;
    default:
      return state;
  }
};
