"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWR1eC9fX3Rlc3RzX18vbG9naW4udHN4IiwibWFwcGluZ3MiOiI7QUFBQSw2REFBNkQ7QUFDN0QsK0NBQStDO0FBQy9DLGdEQUFnRDtBQUVoRCxvQ0FBb0M7QUFDcEMsOENBQThDO0FBQzlDLGdEQUFnRDtBQUVoRCxhQUFhO0FBQ2IsdURBQXVEO0FBRXZELGFBQWE7QUFDYixTQUFTO0FBQ1QsK0NBQStDO0FBRS9DLFNBQVM7QUFDVCxxRUFBcUU7QUFDckUsbUNBQW1DO0FBQ25DLCtCQUErQjtBQUMvQixrQ0FBa0M7QUFDbEMsOEJBQThCO0FBQzlCLFNBQVM7QUFDVCxxREFBcUQ7QUFDckQsc0ZBQXNGO0FBQ3RGLFFBQVE7QUFDUixNQUFNO0FBRU4sd0NBQXdDO0FBQ3hDLHdEQUF3RDtBQUN4RCxvRUFBb0U7QUFDcEUsOEJBQThCO0FBQzlCLGdCQUFnQjtBQUNoQixjQUFjO0FBQ2QsMENBQTBDO0FBQzFDLGlCQUFpQjtBQUNqQixvQkFBb0I7QUFDcEIsZUFBZTtBQUNmLCtCQUErQjtBQUMvQixnQkFBZ0I7QUFDaEIsZUFBZTtBQUNmLHFEQUFxRDtBQUNyRCwwQkFBMEI7QUFDMUIscUNBQXFDO0FBQ3JDLGlCQUFpQjtBQUNqQixlQUFlO0FBQ2YsYUFBYTtBQUNiLHFCQUFxQjtBQUNyQiw2Q0FBNkM7QUFDN0MscUJBQXFCO0FBQ3JCLGFBQWE7QUFDYixXQUFXO0FBRVgsNkNBQTZDO0FBQzdDLGlCQUFpQjtBQUNqQixvQkFBb0I7QUFDcEIsZUFBZTtBQUNmLG9FQUFvRTtBQUNwRSx5QkFBeUI7QUFDekIsZ0JBQWdCO0FBQ2hCLGVBQWU7QUFDZixxREFBcUQ7QUFDckQsMEJBQTBCO0FBQzFCLHFDQUFxQztBQUNyQyxpQkFBaUI7QUFDakIsZUFBZTtBQUNmLGFBQWE7QUFDYixxQkFBcUI7QUFDckIsNkNBQTZDO0FBQzdDLHFCQUFxQjtBQUNyQixhQUFhO0FBQ2IsV0FBVztBQUNYLFNBQVMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWR1eC9fX3Rlc3RzX18vbG9naW4udHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IGluaXRpYWxTdGF0ZSwgcmVkdWNlciB9IGZyb20gJy4uL2xvZ2luL3JlZHVjZXJzJztcbi8vIGltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vbG9naW4vYWN0aW9ucyc7XG4vLyBpbXBvcnQgeyBBY3Rpb25UeXBlcyB9IGZyb20gJy4uL2xvZ2luL3R5cGVzJztcblxuLy8gZGVzY3JpYmUoJ2xvZ2luIGFjdGlvbnMnLCAoKSA9PiB7XG4vLyAgICAgZGVzY3JpYmUoJ3VzZXIgYXN5bmMga2V5IGZvdW5kJywoKSA9PiB7XG4vLyAgICAgICAgIGl0KCd1c2VyIGFuZCBwYXNzd29yZCBtYXRjaCcsICgpID0+IHtcblxuLy8gICAgICAgICB9KVxuLy8gICAgICAgICBpdCgndXNlciBhbmQgcGFzc3dvcmQgZG8gbm90IG1hdGNoJywgKCkgPT4ge1xuXG4vLyAgICAgICAgIH0pXG4vLyAgICAgfSlcbi8vICAgICBkZXNjcmliZSgndXNlciBhc3luYyBub3QgZm91bmQnLCAoKSA9PiB7XG5cbi8vICAgICB9KVxuLy8gICBpdCgnc2hvdWxkIGNyZWF0ZSBhbiBhY3Rpb24gdG8gc2VsZWN0IGEgdGVhbSBtZW1iZXIgaWQnLCAoKSA9PiB7XG4vLyAgICAgY29uc3QgbWVtYmVySWQgPSAnMTgwMDAwMDMnO1xuLy8gICAgIGNvbnN0IGV4cGVjdGVkQWN0aW9uID0ge1xuLy8gICAgICAgdHlwZTogQWN0aW9uVHlwZXMuTE9HX0lOLFxuLy8gICAgICAgcGF5bG9hZDogeyBtZW1iZXJJZCB9XG4vLyAgICAgfTtcbi8vICAgICBleHBlY3QoYWN0aW9ucy5sb2dpbikudG9FcXVhbChleHBlY3RlZEFjdGlvbik7XG4vLyAgICAgLy8gZXhwZWN0KHJlZHVjZXIoaW5pdGlhbFN0YXRlLCBzZWxlY3RUZWFtTWVtYmVyKG1lbWJlcklkKSkpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuLy8gICB9KTtcbi8vIH0pO1xuXG4vLyAvLyBkZXNjcmliZSgnbG9naW4gcmVkdWNlcnMnLCAoKSA9PiB7XG4vLyAvLyAgIC8vIGl0KCdzaG91bGQgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlJywgKCkgPT4ge1xuLy8gLy8gICAvLyAgIGV4cGVjdChyZWR1Y2VyKHVuZGVmaW5lZCwge3R5cGU6IHVuZGVmaW5lZH0pKS50b0VxdWFsKHtcbi8vIC8vICAgLy8gICAgIC4uLmluaXRpYWxTdGF0ZVxuLy8gLy8gICAvLyAgIH0pO1xuLy8gLy8gICAvLyB9KTtcbi8vIC8vICAgaXQoJ3Nob3VsZCBhZGQgbWVtYmVyIGlkJywgKCkgPT4ge1xuLy8gLy8gICAgIGV4cGVjdChcbi8vIC8vICAgICAgIHJlZHVjZXIoXG4vLyAvLyAgICAgICAgIHtcbi8vIC8vICAgICAgICAgICAuLi5pbml0aWFsU3RhdGVcbi8vIC8vICAgICAgICAgfSxcbi8vIC8vICAgICAgICAge1xuLy8gLy8gICAgICAgICAgIHR5cGU6IEFjdGlvblR5cGVzLlRPR0dMRV9URUFNX01FTUJFUixcbi8vIC8vICAgICAgICAgICBwYXlsb2FkOiB7XG4vLyAvLyAgICAgICAgICAgICBtZW1iZXJJZDogJzE4MDAwMDQnXG4vLyAvLyAgICAgICAgICAgfVxuLy8gLy8gICAgICAgICB9XG4vLyAvLyAgICAgICApXG4vLyAvLyAgICAgKS50b0VxdWFsKHtcbi8vIC8vICAgICAgIHRlYW1NZW1iZXJzOiBbeyBpZDogJzE4MDAwMDQnIH1dLFxuLy8gLy8gICAgICAgZXJyb3I6ICcnXG4vLyAvLyAgICAgfSk7XG4vLyAvLyAgIH0pO1xuXG4vLyAvLyAgIGl0KCdzaG91bGQgcmVtb3ZlIG1lbWJlciBpZCcsICgpID0+IHtcbi8vIC8vICAgICBleHBlY3QoXG4vLyAvLyAgICAgICByZWR1Y2VyKFxuLy8gLy8gICAgICAgICB7XG4vLyAvLyAgICAgICAgICAgdGVhbU1lbWJlcnM6IFt7IGlkOiAnMTgwMDAwNCcgfSwgeyBpZDogJzE4MDAwMDgnIH1dLFxuLy8gLy8gICAgICAgICAgIGVycm9yOiAnJ1xuLy8gLy8gICAgICAgICB9LFxuLy8gLy8gICAgICAgICB7XG4vLyAvLyAgICAgICAgICAgdHlwZTogQWN0aW9uVHlwZXMuVE9HR0xFX1RFQU1fTUVNQkVSLFxuLy8gLy8gICAgICAgICAgIHBheWxvYWQ6IHtcbi8vIC8vICAgICAgICAgICAgIG1lbWJlcklkOiAnMTgwMDAwOCdcbi8vIC8vICAgICAgICAgICB9XG4vLyAvLyAgICAgICAgIH1cbi8vIC8vICAgICAgIClcbi8vIC8vICAgICApLnRvRXF1YWwoe1xuLy8gLy8gICAgICAgdGVhbU1lbWJlcnM6IFt7IGlkOiAnMTgwMDAwNCcgfV0sXG4vLyAvLyAgICAgICBlcnJvcjogJydcbi8vIC8vICAgICB9KTtcbi8vIC8vICAgfSk7XG4vLyAvLyB9KTtcbiJdLCJ2ZXJzaW9uIjozfQ==