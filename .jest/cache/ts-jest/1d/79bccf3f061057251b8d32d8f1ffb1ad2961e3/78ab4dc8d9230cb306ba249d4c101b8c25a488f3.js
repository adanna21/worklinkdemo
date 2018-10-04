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
const DragContainer_1 = __importDefault(require("../utils/react-native-drag-drop/DragContainer"));
const react_redux_1 = require("react-redux");
const actions_1 = require("../../Redux/drag-and-drop/actions");
class SupervisorQueueScreen extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {
            currentId: null,
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
        return (react_1.default.createElement(DragContainer_1.default, { teamArray: teamMembers, selectTeamMember: onTeamMemberClicked, isDroppedInZone: this.isDroppedInZone, onDragStart: () => {
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
                        react_1.default.createElement(TeamList_1.default, { selectTeamMember: this.props.onTeamMemberClicked, teamArray: this.props.teamMembers, addCurrentId: this.addCurrentId, currentId: this.state.currentId }))))));
    }
}
const mapStateToProps = (state) => state.dragDrop;
const mapDispatchToProps = (dispatch) => ({
    onTeamMemberClicked: (memberId) => dispatch(actions_1.toggleTeamMember(memberId))
});
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(SupervisorQueueScreen);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9zY3JlZW5zL1N1cGVydmlzb3JRdWV1ZVNjcmVlbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQXlDO0FBQ3pDLGtGQUEwRDtBQUMxRCw0RUFBb0Q7QUFDcEQsOEVBQXNEO0FBQ3RELDBFQUFrRDtBQUNsRCw4RUFBc0Q7QUFDdEQsZ0ZBQXdEO0FBQ3hELDRFQUFvRDtBQUNwRCwrR0FBa0Y7QUFDbEYsZ0dBQXdFO0FBQ3hFLHlHQUFpRjtBQUNqRixzRkFBOEQ7QUFFOUQsa0dBQTBFO0FBQzFFLDZDQUFzQztBQUl0QywrREFBcUU7QUFnQnJFLDJCQUE0QixTQUFRLGlCQUFnQjtJQUFwRDs7UUFDRSxVQUFLLEdBQUc7WUFDTixTQUFTLEVBQUUsSUFBSTtZQUNmLGFBQWEsRUFBRSxJQUFJO1NBQ3BCLENBQUM7UUFFRixpQkFBWSxHQUFHLENBQUMsRUFBVSxFQUFFLEVBQUU7WUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDO1FBQ0YsYUFBUSxHQUFHLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUM7UUFTRixvQkFBZSxHQUFHLEdBQUcsRUFBRTtZQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDO0lBNERKLENBQUM7SUFyRUMseUNBQXlDO0lBQ3pDLCtDQUErQztJQUMvQyxLQUFLO0lBQ0wsaUJBQWlCO1FBQ2YsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUlELE1BQU07UUFDSixNQUFNLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLFVBQVUsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEUsTUFBTSxFQUFFLFNBQVMsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDakMsT0FBTyxDQUNMLDhCQUFDLHVCQUFhLElBQ1osU0FBUyxFQUFFLFdBQVcsRUFDdEIsZ0JBQWdCLEVBQUUsbUJBQW1CLEVBQ3JDLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUNyQyxXQUFXLEVBQUUsR0FBRyxFQUFFO2dCQUNoQiwrREFBK0Q7Z0JBQy9ELElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUMxQyxDQUFDLEVBQ0QsU0FBUyxFQUFFLEdBQUcsRUFBRTtnQkFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUU7b0JBQ3JCLHFFQUFxRTtvQkFDckUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsSUFBSSxLQUFLLEVBQUU7d0JBQ3JDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUMvQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7cUJBQ2pCO3lCQUFNO3dCQUNMLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztxQkFDakI7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDO1lBRUQsOEJBQUMsc0JBQVk7Z0JBSVgsOEJBQUMsbUJBQVM7b0JBQ1IsOEJBQUMsb0JBQVU7d0JBQ1QsOEJBQUMsOEJBQWUsd0JBQWdDLENBQ3JDO29CQUNiLDhCQUFDLGtCQUFRO3dCQUNQLDhCQUFDLDRCQUFrQixJQUNqQixVQUFVLEVBQUUsVUFBVSxFQUN0QixhQUFhLEVBQUUsSUFBSSxDQUFDLGVBQWUsR0FDbkMsQ0FDTyxDQUNEO2dCQUlaLDhCQUFDLG9CQUFVO29CQUNULDhCQUFDLHFCQUFXO3dCQUNWLDhCQUFDLHNCQUFZLG9CQUF5QixDQUMxQjtvQkFDZCw4QkFBQyxtQkFBUzt3QkFDUiw4QkFBQyxrQkFBUSxJQUNQLGdCQUFnQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEVBQ2hELFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFDakMsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQy9CLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FDL0IsQ0FDUSxDQUNELENBQ0EsQ0FDRCxDQUNqQixDQUFDO0lBQ0osQ0FBQztDQUNGO0FBRUQsTUFBTSxlQUFlLEdBQUcsQ0FBQyxLQUFhLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7QUFDMUQsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLFFBQWtCLEVBQTRCLEVBQUUsQ0FBQyxDQUFDO0lBQzVFLG1CQUFtQixFQUFFLENBQUMsUUFBZ0IsRUFBRSxFQUFFLENBQ3hDLFFBQVEsQ0FBQywwQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztDQUN2QyxDQUFDLENBQUM7QUFDSCxrQkFBZSxxQkFBTyxDQUNwQixlQUFlLEVBQ2Ysa0JBQWtCLENBQ25CLENBQUMscUJBQXFCLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMvYW82MC9EZXNrdG9wL1dvcmtGaWxlcy9Xb3JrbGlua0RlbW8vc3JjL1JlYWN0L3NjcmVlbnMvU3VwZXJ2aXNvclF1ZXVlU2NyZWVuLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFwcENvbnRhaW5lciBmcm9tICcuLi9jb21tb24vQXBwQm9keS9BcHBDb250YWluZXInO1xuaW1wb3J0IExlZnRQYW5lbCBmcm9tICcuLi9jb21tb24vQXBwQm9keS9MZWZ0UGFuZWwnO1xuaW1wb3J0IExlZnRIZWFkZXIgZnJvbSAnLi4vY29tbW9uL0FwcEJvZHkvTGVmdEhlYWRlcic7XG5pbXBvcnQgTGVmdEJvZHkgZnJvbSAnLi4vY29tbW9uL0FwcEJvZHkvTGVmdEJvZHknO1xuaW1wb3J0IFJpZ2h0UGFuZWwgZnJvbSAnLi4vY29tbW9uL0FwcEJvZHkvUmlnaHRQYW5lbCc7XG5pbXBvcnQgUmlnaHRIZWFkZXIgZnJvbSAnLi4vY29tbW9uL0FwcEJvZHkvUmlnaHRIZWFkZXInO1xuaW1wb3J0IFJpZ2h0Qm9keSBmcm9tICcuLi9jb21tb24vQXBwQm9keS9SaWdodEJvZHknO1xuaW1wb3J0IFdvcmtPcmRlckhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0xlZnRQYW5lbC9IZWFkZXIvU3VwZXJXb3JrT3JkZXJIZWFkZXInO1xuaW1wb3J0IEFjdGlvbkhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL1JpZ2h0UGFuZWwvSGVhZGVyL0FjdGlvbkhlYWRlcic7XG5pbXBvcnQgU3VwZXJXb3JrT3JkZXJMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvTGVmdFBhbmVsL0JvZHkvU3VwZXJXb3JrT3JkZXJMaXN0JztcbmltcG9ydCBUZWFtTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL1JpZ2h0UGFuZWwvQm9keS9UZWFtTGlzdCc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uU2NyZWVuUHJvcCB9IGZyb20gJ3JlYWN0LW5hdmlnYXRpb24nO1xuaW1wb3J0IERyYWdDb250YWluZXIgZnJvbSAnLi4vdXRpbHMvcmVhY3QtbmF0aXZlLWRyYWctZHJvcC9EcmFnQ29udGFpbmVyJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGFsbFJlZHVjZXJzLCBJU3RhdGUgfSBmcm9tICcuLi8uLi8uLi9zcmMvUmVkdXgnO1xuaW1wb3J0IHsgSVRlYW1NZW1iZXIgfSBmcm9tICcuLi8uLi8uLi9zcmMvUmVkdXgvZHJhZy1hbmQtZHJvcC90eXBlcyc7XG5pbXBvcnQgeyB0b2dnbGVUZWFtTWVtYmVyIH0gZnJvbSAnLi4vLi4vUmVkdXgvZHJhZy1hbmQtZHJvcC9hY3Rpb25zJztcblxuZXhwb3J0IGludGVyZmFjZSBJU3VwZXJRdWV1ZU5hdlByb3BzIHtcbiAgbmF2aWdhdGlvbjogTmF2aWdhdGlvblNjcmVlblByb3A8YW55LCBhbnk+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTdXBlclF1ZXVlUHJvcHMge1xuICB0ZWFtTWVtYmVyczogSVRlYW1NZW1iZXJbXTtcbiAgZXJyb3I6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSVN1cGVyUXVldWVEaXNwYXRjaFByb3BzIHtcbiAgb25UZWFtTWVtYmVyQ2xpY2tlZChtZW1iZXJJZDogc3RyaW5nKTogdm9pZDtcbn1cblxudHlwZSBQcm9wcyA9IElTdXBlclF1ZXVlUHJvcHMgJiBJU3VwZXJRdWV1ZU5hdlByb3BzICYgSVN1cGVyUXVldWVEaXNwYXRjaFByb3BzO1xuXG5jbGFzcyBTdXBlcnZpc29yUXVldWVTY3JlZW4gZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHM+IHtcbiAgc3RhdGUgPSB7XG4gICAgY3VycmVudElkOiBudWxsLFxuICAgIGRyb3BwZWRJblpvbmU6IG51bGxcbiAgfTtcblxuICBhZGRDdXJyZW50SWQgPSAoaWQ6IHN0cmluZykgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdhZGRlZCBjdXJyZW50IElkJywgaWQpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50SWQ6IGlkIH0pO1xuICB9O1xuICByZW1vdmVJZCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudElkOiAnJyB9KTtcbiAgfTtcblxuICAvLyB0b2dnbGVTY3JvbGwgPSAodmlzaWJsZTogYm9vbGVhbikgPT4ge1xuICAvLyAgIHRoaXMuc2V0U3RhdGUoeyBzY3JvbGxFbmFibGVkOiB2aXNpYmxlIH0pO1xuICAvLyB9O1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB0ZWFtQXJyYXkgPSB0aGlzLnByb3BzLnRlYW1NZW1iZXJzO1xuICAgIGNvbnNvbGUubG9nKCd0ZWFtQXJyYXknLCB0ZWFtQXJyYXkpO1xuICB9XG4gIGlzRHJvcHBlZEluWm9uZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZHJvcHBlZEluWm9uZTogdHJ1ZSB9KTtcbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGVhbU1lbWJlcnMsIG9uVGVhbU1lbWJlckNsaWNrZWQsIG5hdmlnYXRpb24gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBjdXJyZW50SWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxEcmFnQ29udGFpbmVyXG4gICAgICAgIHRlYW1BcnJheT17dGVhbU1lbWJlcnN9XG4gICAgICAgIHNlbGVjdFRlYW1NZW1iZXI9e29uVGVhbU1lbWJlckNsaWNrZWR9XG4gICAgICAgIGlzRHJvcHBlZEluWm9uZT17dGhpcy5pc0Ryb3BwZWRJblpvbmV9XG4gICAgICAgIG9uRHJhZ1N0YXJ0PXsoKSA9PiB7XG4gICAgICAgICAgLy8gaWYgb25seSBvbmUgdGVhbU1lbWJlciBpcyBkcmFnZ2VkIHRoZW4gYWRkIHRoZW0gdG8gdGVhbUFycmF5XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRyb3BwZWRJblpvbmU6IGZhbHNlIH0pO1xuICAgICAgICB9fVxuICAgICAgICBvbkRyYWdFbmQ9eygpID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHt9LCAoKSA9PiB7XG4gICAgICAgICAgICAvLyB3YXMgdGVhbU1lbWJlciBkcm9wcGVkIG9uIHdvcmtPcmRlcj8sIGlmIG5vdCByZW1vdmUgZnJvbSB0ZWFtQXJyYXlcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmRyb3BwZWRJblpvbmUgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgb25UZWFtTWVtYmVyQ2xpY2tlZChjdXJyZW50SWQpO1xuICAgICAgICAgICAgICB0aGlzLnJlbW92ZUlkKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnJlbW92ZUlkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxBcHBDb250YWluZXI+XG4gICAgICAgICAgey8qID09PT09PT09XG4gICAgICAgICAgICAgTEVGVFxuICAgICAgICA9PT09PT09PSAqL31cbiAgICAgICAgICA8TGVmdFBhbmVsPlxuICAgICAgICAgICAgPExlZnRIZWFkZXI+XG4gICAgICAgICAgICAgIDxXb3JrT3JkZXJIZWFkZXI+TXkgSFZBQyBRdWV1ZTwvV29ya09yZGVySGVhZGVyPlxuICAgICAgICAgICAgPC9MZWZ0SGVhZGVyPlxuICAgICAgICAgICAgPExlZnRCb2R5PlxuICAgICAgICAgICAgICA8U3VwZXJXb3JrT3JkZXJMaXN0XG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvbj17bmF2aWdhdGlvbn1cbiAgICAgICAgICAgICAgICBkcm9wcGVkSW5ab25lPXt0aGlzLmlzRHJvcHBlZEluWm9uZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvTGVmdEJvZHk+XG4gICAgICAgICAgPC9MZWZ0UGFuZWw+XG4gICAgICAgICAgey8qID09PT09PT09XG4gICAgICAgICAgICAgUklHSFRcbiAgICAgICAgPT09PT09PT0gKi99XG4gICAgICAgICAgPFJpZ2h0UGFuZWw+XG4gICAgICAgICAgICA8UmlnaHRIZWFkZXI+XG4gICAgICAgICAgICAgIDxBY3Rpb25IZWFkZXI+SFZBQyBUZWFtPC9BY3Rpb25IZWFkZXI+XG4gICAgICAgICAgICA8L1JpZ2h0SGVhZGVyPlxuICAgICAgICAgICAgPFJpZ2h0Qm9keT5cbiAgICAgICAgICAgICAgPFRlYW1MaXN0XG4gICAgICAgICAgICAgICAgc2VsZWN0VGVhbU1lbWJlcj17dGhpcy5wcm9wcy5vblRlYW1NZW1iZXJDbGlja2VkfVxuICAgICAgICAgICAgICAgIHRlYW1BcnJheT17dGhpcy5wcm9wcy50ZWFtTWVtYmVyc31cbiAgICAgICAgICAgICAgICBhZGRDdXJyZW50SWQ9e3RoaXMuYWRkQ3VycmVudElkfVxuICAgICAgICAgICAgICAgIGN1cnJlbnRJZD17dGhpcy5zdGF0ZS5jdXJyZW50SWR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1JpZ2h0Qm9keT5cbiAgICAgICAgICA8L1JpZ2h0UGFuZWw+XG4gICAgICAgIDwvQXBwQ29udGFpbmVyPlxuICAgICAgPC9EcmFnQ29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBJU3RhdGUpID0+IHN0YXRlLmRyYWdEcm9wO1xuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoOiBEaXNwYXRjaCk6IElTdXBlclF1ZXVlRGlzcGF0Y2hQcm9wcyA9PiAoe1xuICBvblRlYW1NZW1iZXJDbGlja2VkOiAobWVtYmVySWQ6IHN0cmluZykgPT5cbiAgICBkaXNwYXRjaCh0b2dnbGVUZWFtTWVtYmVyKG1lbWJlcklkKSlcbn0pO1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICBtYXBEaXNwYXRjaFRvUHJvcHNcbikoU3VwZXJ2aXNvclF1ZXVlU2NyZWVuKTtcbiJdLCJ2ZXJzaW9uIjozfQ==