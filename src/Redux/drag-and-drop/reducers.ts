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
  const TOGGLE = ActionTypes.TOGGLE_TEAM_MEMBER;
  let memberId;
  switch (action.type) {
    case TOGGLE:
      memberId = action.payload.memberId;
      // check if member is already in the team
      const memberIdPresent = teamMembers.some(
        member => member.id === memberId
      );
      // add member if not already there
      if (!memberIdPresent) {
        return {
          ...state,
          teamMembers: [...state.teamMembers, { id: action.payload.memberId }]
        };
        // remove member if already there
      } else if (memberIdPresent) {
        return {
          ...state,
          teamMembers: teamMembers.filter(member => member.id !== memberId)
        };
      } else {
        return { ...state, error: 'oops' };
      }
    default:
      return state;
  }
};
