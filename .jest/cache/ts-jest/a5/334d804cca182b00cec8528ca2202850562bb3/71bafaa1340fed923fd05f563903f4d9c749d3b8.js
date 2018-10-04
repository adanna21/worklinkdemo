"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
describe('drag-drop actions', () => {
    it('should create an action to select a team member id', () => {
        // const memberId = '18000003';
        // const expectedAction = {
        //   type: ActionTypes.TOGGLE_TEAM_MEMBER,
        //   payload: { memberId }
        // };
        // expect(actions.toggleTeamMember(memberId)).toEqual(expectedAction);
        // expect(reducer(initialState, selectTeamMember(memberId))).toMatchSnapshot();
    });
});
describe('drag-drop reducers', () => {
    it('should return the initial state', () => {
        // expect(reducer(undefined, {})).toEqual({
        //   ...initialState
        // });
    });
    it('should add member id', () => {
        // expect(
        //   reducer(
        //     {
        //       ...initialState
        //     },
        //     {
        //       type: ActionTypes.TOGGLE_TEAM_MEMBER,
        //       payload: {
        //         memberId: '1800004'
        //       }
        //     }
        //   )
        // ).toEqual({
        //   teamMembers: [{ id: '1800004' }],
        //   error: ''
        // });
    });
    it('should remove member id', () => {
        // expect(
        //   reducer(
        //     {
        //       teamMembers: [{ id: '1800004' }, { id: '1800008' }],
        //       error: ''
        //     },
        //     {
        //       type: ActionTypes.TOGGLE_TEAM_MEMBER,
        //       payload: {
        //         memberId: '1800008'
        //       }
        //     }
        //   )
        // ).toEqual({
        //   teamMembers: [{ id: '1800004' }],
        //   error: ''
        // });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWR1eC9fX3Rlc3RzX18vZHJhZy1kcm9wLXRlc3RzLnRzeCIsIm1hcHBpbmdzIjoiOztBQUlBLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLEVBQUU7SUFDakMsRUFBRSxDQUFDLG9EQUFvRCxFQUFFLEdBQUcsRUFBRTtRQUM1RCwrQkFBK0I7UUFDL0IsMkJBQTJCO1FBQzNCLDBDQUEwQztRQUMxQywwQkFBMEI7UUFDMUIsS0FBSztRQUNMLHNFQUFzRTtRQUN0RSwrRUFBK0U7SUFDakYsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQztBQUVILFFBQVEsQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLEVBQUU7SUFDbEMsRUFBRSxDQUFDLGlDQUFpQyxFQUFFLEdBQUcsRUFBRTtRQUN6QywyQ0FBMkM7UUFDM0Msb0JBQW9CO1FBQ3BCLE1BQU07SUFDUixDQUFDLENBQUMsQ0FBQztJQUNILEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLEVBQUU7UUFDOUIsVUFBVTtRQUNWLGFBQWE7UUFDYixRQUFRO1FBQ1Isd0JBQXdCO1FBQ3hCLFNBQVM7UUFDVCxRQUFRO1FBQ1IsOENBQThDO1FBQzlDLG1CQUFtQjtRQUNuQiw4QkFBOEI7UUFDOUIsVUFBVTtRQUNWLFFBQVE7UUFDUixNQUFNO1FBQ04sY0FBYztRQUNkLHNDQUFzQztRQUN0QyxjQUFjO1FBQ2QsTUFBTTtJQUNSLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHlCQUF5QixFQUFFLEdBQUcsRUFBRTtRQUNqQyxVQUFVO1FBQ1YsYUFBYTtRQUNiLFFBQVE7UUFDUiw2REFBNkQ7UUFDN0Qsa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCxRQUFRO1FBQ1IsOENBQThDO1FBQzlDLG1CQUFtQjtRQUNuQiw4QkFBOEI7UUFDOUIsVUFBVTtRQUNWLFFBQVE7UUFDUixNQUFNO1FBQ04sY0FBYztRQUNkLHNDQUFzQztRQUN0QyxjQUFjO1FBQ2QsTUFBTTtJQUNSLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWR1eC9fX3Rlc3RzX18vZHJhZy1kcm9wLXRlc3RzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0aWFsU3RhdGUsIHJlZHVjZXIgfSBmcm9tICcuLi9kcmFnLWFuZC1kcm9wL3JlZHVjZXJzJztcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vZHJhZy1hbmQtZHJvcC9hY3Rpb25zJztcbmltcG9ydCB7IEFjdGlvblR5cGVzIH0gZnJvbSAnLi4vZHJhZy1hbmQtZHJvcC90eXBlcyc7XG5cbmRlc2NyaWJlKCdkcmFnLWRyb3AgYWN0aW9ucycsICgpID0+IHtcbiAgaXQoJ3Nob3VsZCBjcmVhdGUgYW4gYWN0aW9uIHRvIHNlbGVjdCBhIHRlYW0gbWVtYmVyIGlkJywgKCkgPT4ge1xuICAgIC8vIGNvbnN0IG1lbWJlcklkID0gJzE4MDAwMDAzJztcbiAgICAvLyBjb25zdCBleHBlY3RlZEFjdGlvbiA9IHtcbiAgICAvLyAgIHR5cGU6IEFjdGlvblR5cGVzLlRPR0dMRV9URUFNX01FTUJFUixcbiAgICAvLyAgIHBheWxvYWQ6IHsgbWVtYmVySWQgfVxuICAgIC8vIH07XG4gICAgLy8gZXhwZWN0KGFjdGlvbnMudG9nZ2xlVGVhbU1lbWJlcihtZW1iZXJJZCkpLnRvRXF1YWwoZXhwZWN0ZWRBY3Rpb24pO1xuICAgIC8vIGV4cGVjdChyZWR1Y2VyKGluaXRpYWxTdGF0ZSwgc2VsZWN0VGVhbU1lbWJlcihtZW1iZXJJZCkpKS50b01hdGNoU25hcHNob3QoKTtcbiAgfSk7XG59KTtcblxuZGVzY3JpYmUoJ2RyYWctZHJvcCByZWR1Y2VycycsICgpID0+IHtcbiAgaXQoJ3Nob3VsZCByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUnLCAoKSA9PiB7XG4gICAgLy8gZXhwZWN0KHJlZHVjZXIodW5kZWZpbmVkLCB7fSkpLnRvRXF1YWwoe1xuICAgIC8vICAgLi4uaW5pdGlhbFN0YXRlXG4gICAgLy8gfSk7XG4gIH0pO1xuICBpdCgnc2hvdWxkIGFkZCBtZW1iZXIgaWQnLCAoKSA9PiB7XG4gICAgLy8gZXhwZWN0KFxuICAgIC8vICAgcmVkdWNlcihcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgIC4uLmluaXRpYWxTdGF0ZVxuICAgIC8vICAgICB9LFxuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgdHlwZTogQWN0aW9uVHlwZXMuVE9HR0xFX1RFQU1fTUVNQkVSLFxuICAgIC8vICAgICAgIHBheWxvYWQ6IHtcbiAgICAvLyAgICAgICAgIG1lbWJlcklkOiAnMTgwMDAwNCdcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIClcbiAgICAvLyApLnRvRXF1YWwoe1xuICAgIC8vICAgdGVhbU1lbWJlcnM6IFt7IGlkOiAnMTgwMDAwNCcgfV0sXG4gICAgLy8gICBlcnJvcjogJydcbiAgICAvLyB9KTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCByZW1vdmUgbWVtYmVyIGlkJywgKCkgPT4ge1xuICAgIC8vIGV4cGVjdChcbiAgICAvLyAgIHJlZHVjZXIoXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICB0ZWFtTWVtYmVyczogW3sgaWQ6ICcxODAwMDA0JyB9LCB7IGlkOiAnMTgwMDAwOCcgfV0sXG4gICAgLy8gICAgICAgZXJyb3I6ICcnXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICB0eXBlOiBBY3Rpb25UeXBlcy5UT0dHTEVfVEVBTV9NRU1CRVIsXG4gICAgLy8gICAgICAgcGF5bG9hZDoge1xuICAgIC8vICAgICAgICAgbWVtYmVySWQ6ICcxODAwMDA4J1xuICAgIC8vICAgICAgIH1cbiAgICAvLyAgICAgfVxuICAgIC8vICAgKVxuICAgIC8vICkudG9FcXVhbCh7XG4gICAgLy8gICB0ZWFtTWVtYmVyczogW3sgaWQ6ICcxODAwMDA0JyB9XSxcbiAgICAvLyAgIGVycm9yOiAnJ1xuICAgIC8vIH0pO1xuICB9KTtcbn0pO1xuIl0sInZlcnNpb24iOjN9