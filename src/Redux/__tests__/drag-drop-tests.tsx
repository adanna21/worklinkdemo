import { initialState, reducer } from '../drag-and-drop/reducers';
import * as actions from '../drag-and-drop/actions';
import { ActionTypes } from '../drag-and-drop/types';

describe('drag-drop actions', () => {
  it('should create an action to select a team member id', () => {
    const memberId = '18000003';
    const expectedAction = {
      type: ActionTypes.TOGGLE_TEAM_MEMBER,
      payload: { memberId }
    };
    expect(actions.toggleTeamMember(memberId)).toEqual(expectedAction);
    // expect(reducer(initialState, selectTeamMember(memberId))).toMatchSnapshot();
  });
});

describe('drag-drop reducers', () => {
  it('should add member id', () => {
    expect(
      reducer(
        {
          ...initialState
        },
        {
          type: ActionTypes.TOGGLE_TEAM_MEMBER,
          payload: {
            memberId: '1800004'
          }
        }
      )
    ).toEqual({
      teamMembers: [{ id: '1800004' }],
      error: ''
    });
  });

  it('should remove member id', () => {
    expect(
      reducer(
        {
          teamMembers: [{ id: '1800004' }, { id: '1800008' }],
          error: ''
        },
        {
          type: ActionTypes.TOGGLE_TEAM_MEMBER,
          payload: {
            memberId: '1800008'
          }
        }
      )
    ).toEqual({
      teamMembers: [{ id: '1800004' }],
      error: ''
    });
  });
  it('should not add null member id', () => {
    expect(
      reducer(
        {
          teamMembers: [{ id: '1800004' }],
          error: ''
        },
        {
          type: ActionTypes.TOGGLE_TEAM_MEMBER,
          payload: {
            memberId: null
          }
        }
      )
    ).toEqual({
      teamMembers: [{ id: '1800004' }],
      error: ''
    });
  });
});
