"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const reducers_1 = require("../drag-and-drop/reducers");
const actions = __importStar(require("../drag-and-drop/actions"));
describe('drag-drop actions', () => {
    it('should create an action to select a team member id', () => {
        const memberId = '18000003';
        const expectedAction = {
            type: "@@drag-and-drop/TOGGLE_TEAM_MEMBER" /* TOGGLE_TEAM_MEMBER */,
            payload: { memberId }
        };
        expect(actions.toggleTeamMember(memberId)).toEqual(expectedAction);
        // expect(reducer(initialState, selectTeamMember(memberId))).toMatchSnapshot();
    });
});
describe('drag-drop reducers', () => {
    // it('should return the initial state', () => {
    //   expect(reducer(undefined, {type: undefined})).toEqual({
    //     ...initialState
    //   });
    // });
    it('should add member id', () => {
        expect(reducers_1.reducer(Object.assign({}, reducers_1.initialState), {
            type: "@@drag-and-drop/TOGGLE_TEAM_MEMBER" /* TOGGLE_TEAM_MEMBER */,
            payload: {
                memberId: '1800004'
            }
        })).toEqual({
            teamMembers: [{ id: '1800004' }],
            error: ''
        });
    });
    it('should remove member id', () => {
        expect(reducers_1.reducer({
            teamMembers: [{ id: '1800004' }, { id: '1800008' }],
            error: ''
        }, {
            type: "@@drag-and-drop/TOGGLE_TEAM_MEMBER" /* TOGGLE_TEAM_MEMBER */,
            payload: {
                memberId: '1800008'
            }
        })).toEqual({
            teamMembers: [{ id: '1800004' }],
            error: ''
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWR1eC9fX3Rlc3RzX18vZHJhZy1kcm9wLXRlc3RzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx3REFBa0U7QUFDbEUsa0VBQW9EO0FBR3BELFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLEVBQUU7SUFDakMsRUFBRSxDQUFDLG9EQUFvRCxFQUFFLEdBQUcsRUFBRTtRQUM1RCxNQUFNLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDNUIsTUFBTSxjQUFjLEdBQUc7WUFDckIsSUFBSSwrREFBZ0M7WUFDcEMsT0FBTyxFQUFFLEVBQUUsUUFBUSxFQUFFO1NBQ3RCLENBQUM7UUFDRixNQUFNLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ25FLCtFQUErRTtJQUNqRixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBRUgsUUFBUSxDQUFDLG9CQUFvQixFQUFFLEdBQUcsRUFBRTtJQUNsQyxnREFBZ0Q7SUFDaEQsNERBQTREO0lBQzVELHNCQUFzQjtJQUN0QixRQUFRO0lBQ1IsTUFBTTtJQUNOLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLEVBQUU7UUFDOUIsTUFBTSxDQUNKLGtCQUFPLG1CQUVBLHVCQUFZLEdBRWpCO1lBQ0UsSUFBSSwrREFBZ0M7WUFDcEMsT0FBTyxFQUFFO2dCQUNQLFFBQVEsRUFBRSxTQUFTO2FBQ3BCO1NBQ0YsQ0FDRixDQUNGLENBQUMsT0FBTyxDQUFDO1lBQ1IsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUM7WUFDaEMsS0FBSyxFQUFFLEVBQUU7U0FDVixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxHQUFHLEVBQUU7UUFDakMsTUFBTSxDQUNKLGtCQUFPLENBQ0w7WUFDRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQztZQUNuRCxLQUFLLEVBQUUsRUFBRTtTQUNWLEVBQ0Q7WUFDRSxJQUFJLCtEQUFnQztZQUNwQyxPQUFPLEVBQUU7Z0JBQ1AsUUFBUSxFQUFFLFNBQVM7YUFDcEI7U0FDRixDQUNGLENBQ0YsQ0FBQyxPQUFPLENBQUM7WUFDUixXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQztZQUNoQyxLQUFLLEVBQUUsRUFBRTtTQUNWLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWR1eC9fX3Rlc3RzX18vZHJhZy1kcm9wLXRlc3RzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0aWFsU3RhdGUsIHJlZHVjZXIgfSBmcm9tICcuLi9kcmFnLWFuZC1kcm9wL3JlZHVjZXJzJztcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vZHJhZy1hbmQtZHJvcC9hY3Rpb25zJztcbmltcG9ydCB7IEFjdGlvblR5cGVzIH0gZnJvbSAnLi4vZHJhZy1hbmQtZHJvcC90eXBlcyc7XG5cbmRlc2NyaWJlKCdkcmFnLWRyb3AgYWN0aW9ucycsICgpID0+IHtcbiAgaXQoJ3Nob3VsZCBjcmVhdGUgYW4gYWN0aW9uIHRvIHNlbGVjdCBhIHRlYW0gbWVtYmVyIGlkJywgKCkgPT4ge1xuICAgIGNvbnN0IG1lbWJlcklkID0gJzE4MDAwMDAzJztcbiAgICBjb25zdCBleHBlY3RlZEFjdGlvbiA9IHtcbiAgICAgIHR5cGU6IEFjdGlvblR5cGVzLlRPR0dMRV9URUFNX01FTUJFUixcbiAgICAgIHBheWxvYWQ6IHsgbWVtYmVySWQgfVxuICAgIH07XG4gICAgZXhwZWN0KGFjdGlvbnMudG9nZ2xlVGVhbU1lbWJlcihtZW1iZXJJZCkpLnRvRXF1YWwoZXhwZWN0ZWRBY3Rpb24pO1xuICAgIC8vIGV4cGVjdChyZWR1Y2VyKGluaXRpYWxTdGF0ZSwgc2VsZWN0VGVhbU1lbWJlcihtZW1iZXJJZCkpKS50b01hdGNoU25hcHNob3QoKTtcbiAgfSk7XG59KTtcblxuZGVzY3JpYmUoJ2RyYWctZHJvcCByZWR1Y2VycycsICgpID0+IHtcbiAgLy8gaXQoJ3Nob3VsZCByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUnLCAoKSA9PiB7XG4gIC8vICAgZXhwZWN0KHJlZHVjZXIodW5kZWZpbmVkLCB7dHlwZTogdW5kZWZpbmVkfSkpLnRvRXF1YWwoe1xuICAvLyAgICAgLi4uaW5pdGlhbFN0YXRlXG4gIC8vICAgfSk7XG4gIC8vIH0pO1xuICBpdCgnc2hvdWxkIGFkZCBtZW1iZXIgaWQnLCAoKSA9PiB7XG4gICAgZXhwZWN0KFxuICAgICAgcmVkdWNlcihcbiAgICAgICAge1xuICAgICAgICAgIC4uLmluaXRpYWxTdGF0ZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogQWN0aW9uVHlwZXMuVE9HR0xFX1RFQU1fTUVNQkVSLFxuICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgIG1lbWJlcklkOiAnMTgwMDAwNCdcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIClcbiAgICApLnRvRXF1YWwoe1xuICAgICAgdGVhbU1lbWJlcnM6IFt7IGlkOiAnMTgwMDAwNCcgfV0sXG4gICAgICBlcnJvcjogJydcbiAgICB9KTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCByZW1vdmUgbWVtYmVyIGlkJywgKCkgPT4ge1xuICAgIGV4cGVjdChcbiAgICAgIHJlZHVjZXIoXG4gICAgICAgIHtcbiAgICAgICAgICB0ZWFtTWVtYmVyczogW3sgaWQ6ICcxODAwMDA0JyB9LCB7IGlkOiAnMTgwMDAwOCcgfV0sXG4gICAgICAgICAgZXJyb3I6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiBBY3Rpb25UeXBlcy5UT0dHTEVfVEVBTV9NRU1CRVIsXG4gICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgbWVtYmVySWQ6ICcxODAwMDA4J1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKVxuICAgICkudG9FcXVhbCh7XG4gICAgICB0ZWFtTWVtYmVyczogW3sgaWQ6ICcxODAwMDA0JyB9XSxcbiAgICAgIGVycm9yOiAnJ1xuICAgIH0pO1xuICB9KTtcbn0pO1xuIl0sInZlcnNpb24iOjN9