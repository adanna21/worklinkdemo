"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const AppContainer_1 = __importDefault(require("../common/AppBody/AppContainer"));
const LeftPanel_1 = __importDefault(require("../common/AppBody/LeftPanel"));
const LeftHeader_1 = __importDefault(require("../common/AppBody/LeftHeader"));
const LeftBody_1 = __importDefault(require("../common/AppBody/LeftBody"));
const RightPanel_1 = __importDefault(require("../common/AppBody/RightPanel"));
const RightHeader_1 = __importDefault(require("../common/AppBody/RightHeader"));
const RightBody_1 = __importDefault(require("../common/AppBody/RightBody"));
const SuperWorkOrderHeader_1 = __importDefault(require("../components/LeftPanel/Header/SuperWorkOrderHeader"));
const ActionHeader_1 = __importDefault(require("../components/RightPanel/Header/ActionHeader"));
const SuperWorkOrderList_1 = __importDefault(require("../components/LeftPanel/Body/SuperWorkOrderList"));
const TeamList_1 = __importDefault(require("../components/RightPanel/Body/TeamList"));
const react_native_drag_drop_1 = require("../utils/react-native-drag-drop");
const react_redux_1 = require("react-redux");
const actions_1 = require("../../Redux/drag-and-drop/actions");
class SupervisorQueueScreen extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {
            currentId: '',
            droppedInZone: null
        };
        this.addCurrentId = (id) => {
            console.log('added current Id', id);
            this.setState({ currentId: id });
        };
        this.removeId = () => {
            this.setState({ currentId: '' });
        };
        this.isDroppedInZone = () => {
            this.setState({ droppedInZone: true });
        };
    }
    // toggleScroll = (visible: boolean) => {
    //   this.setState({ scrollEnabled: visible });
    // };
    componentDidMount() {
        const teamArray = this.props.teamMembers;
        console.log('teamArray', teamArray);
    }
    render() {
        const { teamMembers, onTeamMemberClicked, navigation } = this.props;
        const { currentId } = this.state;
        return (react_1.default.createElement(react_native_drag_drop_1.DragContainer, { teamArray: teamMembers, 
            // selectTeamMember={onTeamMemberClicked}
            isDroppedInZone: this.isDroppedInZone, onDragStart: () => {
                // if only one teamMember is dragged then add them to teamArray
                this.setState({ droppedInZone: false });
            }, onDragEnd: () => {
                this.setState({}, () => {
                    // was teamMember dropped on workOrder?, if not remove from teamArray
                    if (this.state.droppedInZone == false) {
                        onTeamMemberClicked(currentId);
                        this.removeId();
                    }
                    else {
                        this.removeId();
                    }
                });
            } },
            react_1.default.createElement(AppContainer_1.default, null,
                react_1.default.createElement(LeftPanel_1.default, null,
                    react_1.default.createElement(LeftHeader_1.default, null,
                        react_1.default.createElement(SuperWorkOrderHeader_1.default, null, "My HVAC Queue")),
                    react_1.default.createElement(LeftBody_1.default, null,
                        react_1.default.createElement(SuperWorkOrderList_1.default, { navigation: navigation, droppedInZone: this.isDroppedInZone }))),
                react_1.default.createElement(RightPanel_1.default, null,
                    react_1.default.createElement(RightHeader_1.default, null,
                        react_1.default.createElement(ActionHeader_1.default, null, "HVAC Team")),
                    react_1.default.createElement(RightBody_1.default, null,
                        react_1.default.createElement(TeamList_1.default, { selectTeamMember: onTeamMemberClicked, teamArray: teamMembers, addCurrentId: this.addCurrentId, currentId: this.state.currentId }))))));
    }
}
exports.SupervisorQueueScreen = SupervisorQueueScreen;
const mapStateToProps = (state) => { state.dragDrop; };
const mapDispatchToProps = (dispatch) => ({
    onTeamMemberClicked: (memberId) => dispatch(actions_1.toggleTeamMember(memberId))
});
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(SupervisorQueueScreen);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9zY3JlZW5zL1N1cGVydmlzb3JRdWV1ZVNjcmVlbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQXlDO0FBQ3pDLGtGQUEwRDtBQUMxRCw0RUFBb0Q7QUFDcEQsOEVBQXNEO0FBQ3RELDBFQUFrRDtBQUNsRCw4RUFBc0Q7QUFDdEQsZ0ZBQXdEO0FBQ3hELDRFQUFvRDtBQUNwRCwrR0FBa0Y7QUFDbEYsZ0dBQXdFO0FBQ3hFLHlHQUFpRjtBQUNqRixzRkFBOEQ7QUFFOUQsNEVBQWdFO0FBQ2hFLDZDQUFzQztBQUl0QywrREFBcUU7QUFrQnJFLDJCQUFtQyxTQUFRLGlCQUFnQjtJQUEzRDs7UUFDRSxVQUFLLEdBQUc7WUFDTixTQUFTLEVBQUUsRUFBRTtZQUNiLGFBQWEsRUFBRSxJQUFJO1NBQ3BCLENBQUM7UUFFRixpQkFBWSxHQUFHLENBQUMsRUFBVSxFQUFFLEVBQUU7WUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDO1FBQ0YsYUFBUSxHQUFHLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUM7UUFTRixvQkFBZSxHQUFHLEdBQUcsRUFBRTtZQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDO0lBNERKLENBQUM7SUFyRUMseUNBQXlDO0lBQ3pDLCtDQUErQztJQUMvQyxLQUFLO0lBQ0wsaUJBQWlCO1FBQ2YsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUlELE1BQU07UUFDSixNQUFNLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLFVBQVUsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEUsTUFBTSxFQUFFLFNBQVMsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDakMsT0FBTyxDQUNMLDhCQUFDLHNDQUFhLElBQ1osU0FBUyxFQUFFLFdBQVc7WUFDdEIseUNBQXlDO1lBQ3pDLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUNyQyxXQUFXLEVBQUUsR0FBRyxFQUFFO2dCQUNoQiwrREFBK0Q7Z0JBQy9ELElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUMxQyxDQUFDLEVBQ0QsU0FBUyxFQUFFLEdBQUcsRUFBRTtnQkFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUU7b0JBQ3JCLHFFQUFxRTtvQkFDckUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsSUFBSSxLQUFLLEVBQUU7d0JBQ3JDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUMvQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7cUJBQ2pCO3lCQUFNO3dCQUNMLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztxQkFDakI7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDO1lBRUQsOEJBQUMsc0JBQVk7Z0JBSVgsOEJBQUMsbUJBQVM7b0JBQ1IsOEJBQUMsb0JBQVU7d0JBQ1QsOEJBQUMsOEJBQWUsd0JBQWdDLENBQ3JDO29CQUNiLDhCQUFDLGtCQUFRO3dCQUNQLDhCQUFDLDRCQUFrQixJQUNqQixVQUFVLEVBQUUsVUFBVSxFQUN0QixhQUFhLEVBQUUsSUFBSSxDQUFDLGVBQWUsR0FDbkMsQ0FDTyxDQUNEO2dCQUlaLDhCQUFDLG9CQUFVO29CQUNULDhCQUFDLHFCQUFXO3dCQUNWLDhCQUFDLHNCQUFZLG9CQUF5QixDQUMxQjtvQkFDZCw4QkFBQyxtQkFBUzt3QkFDUiw4QkFBQyxrQkFBUSxJQUNQLGdCQUFnQixFQUFFLG1CQUFtQixFQUNyQyxTQUFTLEVBQUUsV0FBVyxFQUN0QixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFDL0IsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUMvQixDQUNRLENBQ0QsQ0FDQSxDQUNELENBQ2pCLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUFuRkQsc0RBbUZDO0FBRUQsTUFBTSxlQUFlLEdBQUcsQ0FBQyxLQUFhLEVBQUUsRUFBRSxHQUFFLEtBQUssQ0FBQyxRQUFRLENBQUEsQ0FBQSxDQUFDLENBQUM7QUFDNUQsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLFFBQWtCLEVBQTRCLEVBQUUsQ0FBQyxDQUFDO0lBQzVFLG1CQUFtQixFQUFFLENBQUMsUUFBZ0IsRUFBRSxFQUFFLENBQ3hDLFFBQVEsQ0FBQywwQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztDQUN2QyxDQUFDLENBQUM7QUFDSCxrQkFBZSxxQkFBTyxDQUNwQixlQUFlLEVBQ2Ysa0JBQWtCLENBQ25CLENBQUMscUJBQXFCLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMvYW82MC9EZXNrdG9wL1dvcmtGaWxlcy9Xb3JrbGlua0RlbW8vc3JjL1JlYWN0L3NjcmVlbnMvU3VwZXJ2aXNvclF1ZXVlU2NyZWVuLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFwcENvbnRhaW5lciBmcm9tICcuLi9jb21tb24vQXBwQm9keS9BcHBDb250YWluZXInO1xuaW1wb3J0IExlZnRQYW5lbCBmcm9tICcuLi9jb21tb24vQXBwQm9keS9MZWZ0UGFuZWwnO1xuaW1wb3J0IExlZnRIZWFkZXIgZnJvbSAnLi4vY29tbW9uL0FwcEJvZHkvTGVmdEhlYWRlcic7XG5pbXBvcnQgTGVmdEJvZHkgZnJvbSAnLi4vY29tbW9uL0FwcEJvZHkvTGVmdEJvZHknO1xuaW1wb3J0IFJpZ2h0UGFuZWwgZnJvbSAnLi4vY29tbW9uL0FwcEJvZHkvUmlnaHRQYW5lbCc7XG5pbXBvcnQgUmlnaHRIZWFkZXIgZnJvbSAnLi4vY29tbW9uL0FwcEJvZHkvUmlnaHRIZWFkZXInO1xuaW1wb3J0IFJpZ2h0Qm9keSBmcm9tICcuLi9jb21tb24vQXBwQm9keS9SaWdodEJvZHknO1xuaW1wb3J0IFdvcmtPcmRlckhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0xlZnRQYW5lbC9IZWFkZXIvU3VwZXJXb3JrT3JkZXJIZWFkZXInO1xuaW1wb3J0IEFjdGlvbkhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL1JpZ2h0UGFuZWwvSGVhZGVyL0FjdGlvbkhlYWRlcic7XG5pbXBvcnQgU3VwZXJXb3JrT3JkZXJMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvTGVmdFBhbmVsL0JvZHkvU3VwZXJXb3JrT3JkZXJMaXN0JztcbmltcG9ydCBUZWFtTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL1JpZ2h0UGFuZWwvQm9keS9UZWFtTGlzdCc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uU2NyZWVuUHJvcCB9IGZyb20gJ3JlYWN0LW5hdmlnYXRpb24nO1xuaW1wb3J0IHsgRHJhZ0NvbnRhaW5lciB9IGZyb20gJy4uL3V0aWxzL3JlYWN0LW5hdGl2ZS1kcmFnLWRyb3AnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IERpc3BhdGNoIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgSVN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vc3JjL1JlZHV4JztcbmltcG9ydCB7IElUZWFtTWVtYmVyIH0gZnJvbSAnLi4vLi4vLi4vc3JjL1JlZHV4L2RyYWctYW5kLWRyb3AvdHlwZXMnO1xuaW1wb3J0IHsgdG9nZ2xlVGVhbU1lbWJlciB9IGZyb20gJy4uLy4uL1JlZHV4L2RyYWctYW5kLWRyb3AvYWN0aW9ucyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN1cGVyUXVldWVOYXZQcm9wcyB7XG4gIG5hdmlnYXRpb246IE5hdmlnYXRpb25TY3JlZW5Qcm9wPGFueSwgYW55Pjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU3VwZXJRdWV1ZVByb3BzIHtcbiAgdGVhbU1lbWJlcnM6IElUZWFtTWVtYmVyW107XG4gIGVycm9yOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIElTdXBlclF1ZXVlRGlzcGF0Y2hQcm9wcyB7XG4gIG9uVGVhbU1lbWJlckNsaWNrZWQobWVtYmVySWQ6IHN0cmluZyk6IHZvaWQ7XG59XG5cbmV4cG9ydCB0eXBlIFByb3BzID0gSVN1cGVyUXVldWVQcm9wcyAmXG4gIElTdXBlclF1ZXVlTmF2UHJvcHMgJlxuICBJU3VwZXJRdWV1ZURpc3BhdGNoUHJvcHM7XG5cbmV4cG9ydCBjbGFzcyBTdXBlcnZpc29yUXVldWVTY3JlZW4gZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHM+IHtcbiAgc3RhdGUgPSB7XG4gICAgY3VycmVudElkOiAnJyxcbiAgICBkcm9wcGVkSW5ab25lOiBudWxsXG4gIH07XG5cbiAgYWRkQ3VycmVudElkID0gKGlkOiBzdHJpbmcpID0+IHtcbiAgICBjb25zb2xlLmxvZygnYWRkZWQgY3VycmVudCBJZCcsIGlkKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudElkOiBpZCB9KTtcbiAgfTtcbiAgcmVtb3ZlSWQgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRJZDogJycgfSk7XG4gIH07XG5cbiAgLy8gdG9nZ2xlU2Nyb2xsID0gKHZpc2libGU6IGJvb2xlYW4pID0+IHtcbiAgLy8gICB0aGlzLnNldFN0YXRlKHsgc2Nyb2xsRW5hYmxlZDogdmlzaWJsZSB9KTtcbiAgLy8gfTtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgdGVhbUFycmF5ID0gdGhpcy5wcm9wcy50ZWFtTWVtYmVycztcbiAgICBjb25zb2xlLmxvZygndGVhbUFycmF5JywgdGVhbUFycmF5KTtcbiAgfVxuICBpc0Ryb3BwZWRJblpvbmUgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRyb3BwZWRJblpvbmU6IHRydWUgfSk7XG4gIH07XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRlYW1NZW1iZXJzLCBvblRlYW1NZW1iZXJDbGlja2VkLCBuYXZpZ2F0aW9uIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgY3VycmVudElkIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8RHJhZ0NvbnRhaW5lclxuICAgICAgICB0ZWFtQXJyYXk9e3RlYW1NZW1iZXJzfVxuICAgICAgICAvLyBzZWxlY3RUZWFtTWVtYmVyPXtvblRlYW1NZW1iZXJDbGlja2VkfVxuICAgICAgICBpc0Ryb3BwZWRJblpvbmU9e3RoaXMuaXNEcm9wcGVkSW5ab25lfVxuICAgICAgICBvbkRyYWdTdGFydD17KCkgPT4ge1xuICAgICAgICAgIC8vIGlmIG9ubHkgb25lIHRlYW1NZW1iZXIgaXMgZHJhZ2dlZCB0aGVuIGFkZCB0aGVtIHRvIHRlYW1BcnJheVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkcm9wcGVkSW5ab25lOiBmYWxzZSB9KTtcbiAgICAgICAgfX1cbiAgICAgICAgb25EcmFnRW5kPXsoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7fSwgKCkgPT4ge1xuICAgICAgICAgICAgLy8gd2FzIHRlYW1NZW1iZXIgZHJvcHBlZCBvbiB3b3JrT3JkZXI/LCBpZiBub3QgcmVtb3ZlIGZyb20gdGVhbUFycmF5XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5kcm9wcGVkSW5ab25lID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIG9uVGVhbU1lbWJlckNsaWNrZWQoY3VycmVudElkKTtcbiAgICAgICAgICAgICAgdGhpcy5yZW1vdmVJZCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5yZW1vdmVJZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8QXBwQ29udGFpbmVyPlxuICAgICAgICAgIHsvKiA9PT09PT09PVxuICAgICAgICAgICAgIExFRlRcbiAgICAgICAgPT09PT09PT0gKi99XG4gICAgICAgICAgPExlZnRQYW5lbD5cbiAgICAgICAgICAgIDxMZWZ0SGVhZGVyPlxuICAgICAgICAgICAgICA8V29ya09yZGVySGVhZGVyPk15IEhWQUMgUXVldWU8L1dvcmtPcmRlckhlYWRlcj5cbiAgICAgICAgICAgIDwvTGVmdEhlYWRlcj5cbiAgICAgICAgICAgIDxMZWZ0Qm9keT5cbiAgICAgICAgICAgICAgPFN1cGVyV29ya09yZGVyTGlzdFxuICAgICAgICAgICAgICAgIG5hdmlnYXRpb249e25hdmlnYXRpb259XG4gICAgICAgICAgICAgICAgZHJvcHBlZEluWm9uZT17dGhpcy5pc0Ryb3BwZWRJblpvbmV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0xlZnRCb2R5PlxuICAgICAgICAgIDwvTGVmdFBhbmVsPlxuICAgICAgICAgIHsvKiA9PT09PT09PVxuICAgICAgICAgICAgIFJJR0hUXG4gICAgICAgID09PT09PT09ICovfVxuICAgICAgICAgIDxSaWdodFBhbmVsPlxuICAgICAgICAgICAgPFJpZ2h0SGVhZGVyPlxuICAgICAgICAgICAgICA8QWN0aW9uSGVhZGVyPkhWQUMgVGVhbTwvQWN0aW9uSGVhZGVyPlxuICAgICAgICAgICAgPC9SaWdodEhlYWRlcj5cbiAgICAgICAgICAgIDxSaWdodEJvZHk+XG4gICAgICAgICAgICAgIDxUZWFtTGlzdFxuICAgICAgICAgICAgICAgIHNlbGVjdFRlYW1NZW1iZXI9e29uVGVhbU1lbWJlckNsaWNrZWR9XG4gICAgICAgICAgICAgICAgdGVhbUFycmF5PXt0ZWFtTWVtYmVyc31cbiAgICAgICAgICAgICAgICBhZGRDdXJyZW50SWQ9e3RoaXMuYWRkQ3VycmVudElkfVxuICAgICAgICAgICAgICAgIGN1cnJlbnRJZD17dGhpcy5zdGF0ZS5jdXJyZW50SWR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1JpZ2h0Qm9keT5cbiAgICAgICAgICA8L1JpZ2h0UGFuZWw+XG4gICAgICAgIDwvQXBwQ29udGFpbmVyPlxuICAgICAgPC9EcmFnQ29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBJU3RhdGUpID0+IHtzdGF0ZS5kcmFnRHJvcH07XG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2g6IERpc3BhdGNoKTogSVN1cGVyUXVldWVEaXNwYXRjaFByb3BzID0+ICh7XG4gIG9uVGVhbU1lbWJlckNsaWNrZWQ6IChtZW1iZXJJZDogc3RyaW5nKSA9PlxuICAgIGRpc3BhdGNoKHRvZ2dsZVRlYW1NZW1iZXIobWVtYmVySWQpKVxufSk7XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIG1hcERpc3BhdGNoVG9Qcm9wc1xuKShTdXBlcnZpc29yUXVldWVTY3JlZW4pO1xuIl0sInZlcnNpb24iOjN9