// import { initialState, reducer } from '../login/reducers';
// import * as actions from '../login/actions';
// import { ActionTypes } from '../login/types';

// describe('login actions', () => {
//     describe('user async key found',() => {
//         it('user and password match', () => {

//         })
//         it('user and password do not match', () => {

//         })
//     })
//     describe('user async not found', () => {

//     })
//   it('should create an action to select a team member id', () => {
//     const memberId = '18000003';
//     const expectedAction = {
//       type: ActionTypes.LOG_IN,
//       payload: { memberId }
//     };
//     expect(actions.login).toEqual(expectedAction);
//     // expect(reducer(initialState, selectTeamMember(memberId))).toMatchSnapshot();
//   });
// });

// // describe('login reducers', () => {
// //   // it('should return the initial state', () => {
// //   //   expect(reducer(undefined, {type: undefined})).toEqual({
// //   //     ...initialState
// //   //   });
// //   // });
// //   it('should add member id', () => {
// //     expect(
// //       reducer(
// //         {
// //           ...initialState
// //         },
// //         {
// //           type: ActionTypes.TOGGLE_TEAM_MEMBER,
// //           payload: {
// //             memberId: '1800004'
// //           }
// //         }
// //       )
// //     ).toEqual({
// //       teamMembers: [{ id: '1800004' }],
// //       error: ''
// //     });
// //   });

// //   it('should remove member id', () => {
// //     expect(
// //       reducer(
// //         {
// //           teamMembers: [{ id: '1800004' }, { id: '1800008' }],
// //           error: ''
// //         },
// //         {
// //           type: ActionTypes.TOGGLE_TEAM_MEMBER,
// //           payload: {
// //             memberId: '1800008'
// //           }
// //         }
// //       )
// //     ).toEqual({
// //       teamMembers: [{ id: '1800004' }],
// //       error: ''
// //     });
// //   });
// // });
