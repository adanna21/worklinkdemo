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
const mapStateToProps = (state) => state.dragDrop;
const mapDispatchToProps = (dispatch) => ({
    onTeamMemberClicked: (memberId) => dispatch(actions_1.toggleTeamMember(memberId))
});
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(SupervisorQueueScreen);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9zY3JlZW5zL1N1cGVydmlzb3JRdWV1ZVNjcmVlbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQXlDO0FBQ3pDLGtGQUEwRDtBQUMxRCw0RUFBb0Q7QUFDcEQsOEVBQXNEO0FBQ3RELDBFQUFrRDtBQUNsRCw4RUFBc0Q7QUFDdEQsZ0ZBQXdEO0FBQ3hELDRFQUFvRDtBQUNwRCwrR0FBa0Y7QUFDbEYsZ0dBQXdFO0FBQ3hFLHlHQUFpRjtBQUNqRixzRkFBOEQ7QUFFOUQsNEVBQWdFO0FBQ2hFLDZDQUFzQztBQUl0QywrREFBcUU7QUFrQnJFLDJCQUE0QixTQUFRLGlCQUFnQjtJQUFwRDs7UUFDRSxVQUFLLEdBQUc7WUFDTixTQUFTLEVBQUUsRUFBRTtZQUNiLGFBQWEsRUFBRSxJQUFJO1NBQ3BCLENBQUM7UUFFRixpQkFBWSxHQUFHLENBQUMsRUFBVSxFQUFFLEVBQUU7WUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDO1FBQ0YsYUFBUSxHQUFHLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUM7UUFTRixvQkFBZSxHQUFHLEdBQUcsRUFBRTtZQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDO0lBNERKLENBQUM7SUFyRUMseUNBQXlDO0lBQ3pDLCtDQUErQztJQUMvQyxLQUFLO0lBQ0wsaUJBQWlCO1FBQ2YsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUlELE1BQU07UUFDSixNQUFNLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLFVBQVUsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEUsTUFBTSxFQUFFLFNBQVMsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDakMsT0FBTyxDQUNMLDhCQUFDLHNDQUFhLElBQ1osU0FBUyxFQUFFLFdBQVc7WUFDdEIseUNBQXlDO1lBQ3pDLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUNyQyxXQUFXLEVBQUUsR0FBRyxFQUFFO2dCQUNoQiwrREFBK0Q7Z0JBQy9ELElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUMxQyxDQUFDLEVBQ0QsU0FBUyxFQUFFLEdBQUcsRUFBRTtnQkFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUU7b0JBQ3JCLHFFQUFxRTtvQkFDckUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsSUFBSSxLQUFLLEVBQUU7d0JBQ3JDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUMvQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7cUJBQ2pCO3lCQUFNO3dCQUNMLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztxQkFDakI7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDO1lBRUQsOEJBQUMsc0JBQVk7Z0JBSVgsOEJBQUMsbUJBQVM7b0JBQ1IsOEJBQUMsb0JBQVU7d0JBQ1QsOEJBQUMsOEJBQWUsd0JBQWdDLENBQ3JDO29CQUNiLDhCQUFDLGtCQUFRO3dCQUNQLDhCQUFDLDRCQUFrQixJQUNqQixVQUFVLEVBQUUsVUFBVSxFQUN0QixhQUFhLEVBQUUsSUFBSSxDQUFDLGVBQWUsR0FDbkMsQ0FDTyxDQUNEO2dCQUlaLDhCQUFDLG9CQUFVO29CQUNULDhCQUFDLHFCQUFXO3dCQUNWLDhCQUFDLHNCQUFZLG9CQUF5QixDQUMxQjtvQkFDZCw4QkFBQyxtQkFBUzt3QkFDUiw4QkFBQyxrQkFBUSxJQUNQLGdCQUFnQixFQUFFLG1CQUFtQixFQUNyQyxTQUFTLEVBQUUsV0FBVyxFQUN0QixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFDL0IsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUMvQixDQUNRLENBQ0QsQ0FDQSxDQUNELENBQ2pCLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUFFRCxNQUFNLGVBQWUsR0FBRyxDQUFDLEtBQWEsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztBQUMxRCxNQUFNLGtCQUFrQixHQUFHLENBQUMsUUFBa0IsRUFBNEIsRUFBRSxDQUFDLENBQUM7SUFDNUUsbUJBQW1CLEVBQUUsQ0FBQyxRQUFnQixFQUFFLEVBQUUsQ0FDeEMsUUFBUSxDQUFDLDBCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0NBQ3ZDLENBQUMsQ0FBQztBQUNILGtCQUFlLHFCQUFPLENBQ3BCLGVBQWUsRUFDZixrQkFBa0IsQ0FDbkIsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbzYwL0Rlc2t0b3AvV29ya0ZpbGVzL1dvcmtsaW5rRGVtby9zcmMvUmVhY3Qvc2NyZWVucy9TdXBlcnZpc29yUXVldWVTY3JlZW4udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXBwQ29udGFpbmVyIGZyb20gJy4uL2NvbW1vbi9BcHBCb2R5L0FwcENvbnRhaW5lcic7XG5pbXBvcnQgTGVmdFBhbmVsIGZyb20gJy4uL2NvbW1vbi9BcHBCb2R5L0xlZnRQYW5lbCc7XG5pbXBvcnQgTGVmdEhlYWRlciBmcm9tICcuLi9jb21tb24vQXBwQm9keS9MZWZ0SGVhZGVyJztcbmltcG9ydCBMZWZ0Qm9keSBmcm9tICcuLi9jb21tb24vQXBwQm9keS9MZWZ0Qm9keSc7XG5pbXBvcnQgUmlnaHRQYW5lbCBmcm9tICcuLi9jb21tb24vQXBwQm9keS9SaWdodFBhbmVsJztcbmltcG9ydCBSaWdodEhlYWRlciBmcm9tICcuLi9jb21tb24vQXBwQm9keS9SaWdodEhlYWRlcic7XG5pbXBvcnQgUmlnaHRCb2R5IGZyb20gJy4uL2NvbW1vbi9BcHBCb2R5L1JpZ2h0Qm9keSc7XG5pbXBvcnQgV29ya09yZGVySGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvTGVmdFBhbmVsL0hlYWRlci9TdXBlcldvcmtPcmRlckhlYWRlcic7XG5pbXBvcnQgQWN0aW9uSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvUmlnaHRQYW5lbC9IZWFkZXIvQWN0aW9uSGVhZGVyJztcbmltcG9ydCBTdXBlcldvcmtPcmRlckxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9MZWZ0UGFuZWwvQm9keS9TdXBlcldvcmtPcmRlckxpc3QnO1xuaW1wb3J0IFRlYW1MaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvUmlnaHRQYW5lbC9Cb2R5L1RlYW1MaXN0JztcbmltcG9ydCB7IE5hdmlnYXRpb25TY3JlZW5Qcm9wIH0gZnJvbSAncmVhY3QtbmF2aWdhdGlvbic7XG5pbXBvcnQgeyBEcmFnQ29udGFpbmVyIH0gZnJvbSAnLi4vdXRpbHMvcmVhY3QtbmF0aXZlLWRyYWctZHJvcCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgRGlzcGF0Y2ggfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBJU3RhdGUgfSBmcm9tICcuLi8uLi8uLi9zcmMvUmVkdXgnO1xuaW1wb3J0IHsgSVRlYW1NZW1iZXIgfSBmcm9tICcuLi8uLi8uLi9zcmMvUmVkdXgvZHJhZy1hbmQtZHJvcC90eXBlcyc7XG5pbXBvcnQgeyB0b2dnbGVUZWFtTWVtYmVyIH0gZnJvbSAnLi4vLi4vUmVkdXgvZHJhZy1hbmQtZHJvcC9hY3Rpb25zJztcblxuZXhwb3J0IGludGVyZmFjZSBJU3VwZXJRdWV1ZU5hdlByb3BzIHtcbiAgbmF2aWdhdGlvbjogTmF2aWdhdGlvblNjcmVlblByb3A8YW55LCBhbnk+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTdXBlclF1ZXVlUHJvcHMge1xuICB0ZWFtTWVtYmVyczogSVRlYW1NZW1iZXJbXTtcbiAgZXJyb3I6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSVN1cGVyUXVldWVEaXNwYXRjaFByb3BzIHtcbiAgb25UZWFtTWVtYmVyQ2xpY2tlZChtZW1iZXJJZDogc3RyaW5nKTogdm9pZDtcbn1cblxuZXhwb3J0IHR5cGUgUHJvcHMgPSBJU3VwZXJRdWV1ZVByb3BzICZcbiAgSVN1cGVyUXVldWVOYXZQcm9wcyAmXG4gIElTdXBlclF1ZXVlRGlzcGF0Y2hQcm9wcztcblxuY2xhc3MgU3VwZXJ2aXNvclF1ZXVlU2NyZWVuIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzPiB7XG4gIHN0YXRlID0ge1xuICAgIGN1cnJlbnRJZDogJycsXG4gICAgZHJvcHBlZEluWm9uZTogbnVsbFxuICB9O1xuXG4gIGFkZEN1cnJlbnRJZCA9IChpZDogc3RyaW5nKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2FkZGVkIGN1cnJlbnQgSWQnLCBpZCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRJZDogaWQgfSk7XG4gIH07XG4gIHJlbW92ZUlkID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50SWQ6ICcnIH0pO1xuICB9O1xuXG4gIC8vIHRvZ2dsZVNjcm9sbCA9ICh2aXNpYmxlOiBib29sZWFuKSA9PiB7XG4gIC8vICAgdGhpcy5zZXRTdGF0ZSh7IHNjcm9sbEVuYWJsZWQ6IHZpc2libGUgfSk7XG4gIC8vIH07XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHRlYW1BcnJheSA9IHRoaXMucHJvcHMudGVhbU1lbWJlcnM7XG4gICAgY29uc29sZS5sb2coJ3RlYW1BcnJheScsIHRlYW1BcnJheSk7XG4gIH1cbiAgaXNEcm9wcGVkSW5ab25lID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBkcm9wcGVkSW5ab25lOiB0cnVlIH0pO1xuICB9O1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0ZWFtTWVtYmVycywgb25UZWFtTWVtYmVyQ2xpY2tlZCwgbmF2aWdhdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGN1cnJlbnRJZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPERyYWdDb250YWluZXJcbiAgICAgICAgdGVhbUFycmF5PXt0ZWFtTWVtYmVyc31cbiAgICAgICAgLy8gc2VsZWN0VGVhbU1lbWJlcj17b25UZWFtTWVtYmVyQ2xpY2tlZH1cbiAgICAgICAgaXNEcm9wcGVkSW5ab25lPXt0aGlzLmlzRHJvcHBlZEluWm9uZX1cbiAgICAgICAgb25EcmFnU3RhcnQ9eygpID0+IHtcbiAgICAgICAgICAvLyBpZiBvbmx5IG9uZSB0ZWFtTWVtYmVyIGlzIGRyYWdnZWQgdGhlbiBhZGQgdGhlbSB0byB0ZWFtQXJyYXlcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZHJvcHBlZEluWm9uZTogZmFsc2UgfSk7XG4gICAgICAgIH19XG4gICAgICAgIG9uRHJhZ0VuZD17KCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe30sICgpID0+IHtcbiAgICAgICAgICAgIC8vIHdhcyB0ZWFtTWVtYmVyIGRyb3BwZWQgb24gd29ya09yZGVyPywgaWYgbm90IHJlbW92ZSBmcm9tIHRlYW1BcnJheVxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZHJvcHBlZEluWm9uZSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICBvblRlYW1NZW1iZXJDbGlja2VkKGN1cnJlbnRJZCk7XG4gICAgICAgICAgICAgIHRoaXMucmVtb3ZlSWQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMucmVtb3ZlSWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEFwcENvbnRhaW5lcj5cbiAgICAgICAgICB7LyogPT09PT09PT1cbiAgICAgICAgICAgICBMRUZUXG4gICAgICAgID09PT09PT09ICovfVxuICAgICAgICAgIDxMZWZ0UGFuZWw+XG4gICAgICAgICAgICA8TGVmdEhlYWRlcj5cbiAgICAgICAgICAgICAgPFdvcmtPcmRlckhlYWRlcj5NeSBIVkFDIFF1ZXVlPC9Xb3JrT3JkZXJIZWFkZXI+XG4gICAgICAgICAgICA8L0xlZnRIZWFkZXI+XG4gICAgICAgICAgICA8TGVmdEJvZHk+XG4gICAgICAgICAgICAgIDxTdXBlcldvcmtPcmRlckxpc3RcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uPXtuYXZpZ2F0aW9ufVxuICAgICAgICAgICAgICAgIGRyb3BwZWRJblpvbmU9e3RoaXMuaXNEcm9wcGVkSW5ab25lfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9MZWZ0Qm9keT5cbiAgICAgICAgICA8L0xlZnRQYW5lbD5cbiAgICAgICAgICB7LyogPT09PT09PT1cbiAgICAgICAgICAgICBSSUdIVFxuICAgICAgICA9PT09PT09PSAqL31cbiAgICAgICAgICA8UmlnaHRQYW5lbD5cbiAgICAgICAgICAgIDxSaWdodEhlYWRlcj5cbiAgICAgICAgICAgICAgPEFjdGlvbkhlYWRlcj5IVkFDIFRlYW08L0FjdGlvbkhlYWRlcj5cbiAgICAgICAgICAgIDwvUmlnaHRIZWFkZXI+XG4gICAgICAgICAgICA8UmlnaHRCb2R5PlxuICAgICAgICAgICAgICA8VGVhbUxpc3RcbiAgICAgICAgICAgICAgICBzZWxlY3RUZWFtTWVtYmVyPXtvblRlYW1NZW1iZXJDbGlja2VkfVxuICAgICAgICAgICAgICAgIHRlYW1BcnJheT17dGVhbU1lbWJlcnN9XG4gICAgICAgICAgICAgICAgYWRkQ3VycmVudElkPXt0aGlzLmFkZEN1cnJlbnRJZH1cbiAgICAgICAgICAgICAgICBjdXJyZW50SWQ9e3RoaXMuc3RhdGUuY3VycmVudElkfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9SaWdodEJvZHk+XG4gICAgICAgICAgPC9SaWdodFBhbmVsPlxuICAgICAgICA8L0FwcENvbnRhaW5lcj5cbiAgICAgIDwvRHJhZ0NvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogSVN0YXRlKSA9PiBzdGF0ZS5kcmFnRHJvcDtcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaDogRGlzcGF0Y2gpOiBJU3VwZXJRdWV1ZURpc3BhdGNoUHJvcHMgPT4gKHtcbiAgb25UZWFtTWVtYmVyQ2xpY2tlZDogKG1lbWJlcklkOiBzdHJpbmcpID0+XG4gICAgZGlzcGF0Y2godG9nZ2xlVGVhbU1lbWJlcihtZW1iZXJJZCkpXG59KTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzXG4pKFN1cGVydmlzb3JRdWV1ZVNjcmVlbik7XG4iXSwidmVyc2lvbiI6M30=