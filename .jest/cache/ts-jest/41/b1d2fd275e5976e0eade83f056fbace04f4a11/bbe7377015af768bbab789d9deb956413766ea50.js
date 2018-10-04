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
const react_native_1 = require("react-native");
const data_1 = require("../../../../data");
const WorkOrderContainer_1 = __importDefault(require("../../../common/AppBody/WorkOrder/WorkOrderContainer"));
const WorkOrderCard_1 = __importDefault(require("../../../common/AppBody/WorkOrder/WorkOrderCard"));
const WorkOrderDetails_1 = __importDefault(require("../../../common/AppBody/WorkOrder/WorkOrderDetails"));
const Status_1 = __importDefault(require("../../../common/AppBody/WorkOrder/Status"));
const StatusText_1 = __importDefault(require("../../../common/AppBody/WorkOrder/StatusText"));
const StatusIndicator_1 = __importDefault(require("../../../common/AppBody/WorkOrder/StatusIndicator"));
const WorkCode_1 = __importDefault(require("../../../common/AppBody/WorkOrder/WorkCode"));
const WorkCodeId_1 = __importDefault(require("../../../common/AppBody/WorkOrder/WorkCodeId"));
const WorkCodeText_1 = __importDefault(require("../../../common/AppBody/WorkOrder/WorkCodeText"));
const Location_1 = __importDefault(require("../../../common/AppBody/WorkOrder/Location"));
const LocationText_1 = __importDefault(require("../../../common/AppBody/WorkOrder/LocationText"));
const Client_1 = __importDefault(require("../../../common/AppBody/WorkOrder/Client"));
const ViewMore_1 = __importDefault(require("../../../common/AppBody/WorkOrder/ViewMore"));
const Avatar_1 = __importDefault(require("../../../common/AppBody/WorkOrder/Avatar"));
class SuperWorkOrderList extends react_1.Component {
    constructor() {
        super(...arguments);
        this.onViewMore = (workOrder) => {
            this.props.navigation.navigate('Details', Object.assign({}, workOrder));
        };
    }
    render() {
        return (react_1.default.createElement(WorkOrderContainer_1.default, null,
            react_1.default.createElement(react_native_1.FlatList, { data: data_1.workOrders, extraData: [this.props, this.state], renderItem: ({ item }) => (react_1.default.createElement(WorkOrderCard_1.default, { droppedInZone: this.props.droppedInZone },
                    react_1.default.createElement(WorkOrderDetails_1.default, null,
                        react_1.default.createElement(Status_1.default, null,
                            react_1.default.createElement(StatusText_1.default, null, item.status.toLocaleUpperCase()),
                            react_1.default.createElement(StatusIndicator_1.default, null)),
                        react_1.default.createElement(WorkCode_1.default, null,
                            react_1.default.createElement(WorkCodeText_1.default, null, item.workCode),
                            react_1.default.createElement(WorkCodeId_1.default, null, item.id)),
                        react_1.default.createElement(Location_1.default, null,
                            react_1.default.createElement(LocationText_1.default, null,
                                "Service Location: ",
                                item.serviceLocation),
                            react_1.default.createElement(Client_1.default, null,
                                "Client: ",
                                item.client.name)),
                        react_1.default.createElement(ViewMore_1.default, { onViewMore: this.onViewMore, item: item })),
                    react_1.default.createElement(Avatar_1.default, null,
                        react_1.default.createElement(react_native_1.Text, null, "JJ")))), keyExtractor: item => item.id })));
    }
}
exports.default = SuperWorkOrderList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9jb21wb25lbnRzL0xlZnRQYW5lbC9Cb2R5L1N1cGVyV29ya09yZGVyTGlzdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQXlDO0FBQ3pDLCtDQUE4RDtBQUM5RCwyQ0FBMEQ7QUFDMUQsOEdBQXNGO0FBQ3RGLG9HQUE0RTtBQUM1RSwwR0FBa0Y7QUFDbEYsc0ZBQThEO0FBQzlELDhGQUFzRTtBQUN0RSx3R0FBZ0Y7QUFDaEYsMEZBQWtFO0FBQ2xFLDhGQUFzRTtBQUN0RSxrR0FBMEU7QUFDMUUsMEZBQWtFO0FBQ2xFLGtHQUEwRTtBQUMxRSxzRkFBOEQ7QUFDOUQsMEZBQWtFO0FBQ2xFLHNGQUE4RDtBQUU5RCx3QkFBd0MsU0FBUSxpQkFBbUI7SUFBbkU7O1FBQ0UsZUFBVSxHQUFHLENBQUMsU0FBcUIsRUFBRSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLG9CQUNuQyxTQUFTLEVBQ1osQ0FBQztRQUNMLENBQUMsQ0FBQztJQXFDSixDQUFDO0lBbkNDLE1BQU07UUFDSixPQUFPLENBQ0wsOEJBQUMsNEJBQWtCO1lBQ2pCLDhCQUFDLHVCQUFRLElBQ1AsSUFBSSxFQUFFLGlCQUFVLEVBQ2hCLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUNuQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUN4Qiw4QkFBQyx1QkFBYSxJQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWE7b0JBQ3BELDhCQUFDLDBCQUFnQjt3QkFDZiw4QkFBQyxnQkFBTTs0QkFDTCw4QkFBQyxvQkFBVSxRQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsQ0FBYzs0QkFDMUQsOEJBQUMseUJBQWUsT0FBRyxDQUNaO3dCQUNULDhCQUFDLGtCQUFROzRCQUNQLDhCQUFDLHNCQUFZLFFBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBZ0I7NEJBQzVDLDhCQUFDLG9CQUFVLFFBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBYyxDQUN6Qjt3QkFDWCw4QkFBQyxrQkFBUTs0QkFDUCw4QkFBQyxzQkFBWTs7Z0NBQ1EsSUFBSSxDQUFDLGVBQWUsQ0FDMUI7NEJBQ2YsOEJBQUMsZ0JBQU07O2dDQUFVLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFVLENBQ2xDO3dCQUNYLDhCQUFDLGtCQUFRLElBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLElBQUksR0FBSSxDQUNwQztvQkFDbkIsOEJBQUMsZ0JBQU07d0JBQ0wsOEJBQUMsbUJBQUksYUFBVSxDQUNSLENBQ0ssQ0FDakIsRUFDRCxZQUFZLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUM3QixDQUNpQixDQUN0QixDQUFDO0lBQ0osQ0FBQztDQUNGO0FBMUNELHFDQTBDQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMvYW82MC9EZXNrdG9wL1dvcmtGaWxlcy9Xb3JrbGlua0RlbW8vc3JjL1JlYWN0L2NvbXBvbmVudHMvTGVmdFBhbmVsL0JvZHkvU3VwZXJXb3JrT3JkZXJMaXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVGV4dCwgRmxhdExpc3QsIGZpbmROb2RlSGFuZGxlIH0gZnJvbSAncmVhY3QtbmF0aXZlJztcbmltcG9ydCB7IHdvcmtPcmRlcnMsIElXb3JrT3JkZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9kYXRhJztcbmltcG9ydCBXb3JrT3JkZXJDb250YWluZXIgZnJvbSAnLi4vLi4vLi4vY29tbW9uL0FwcEJvZHkvV29ya09yZGVyL1dvcmtPcmRlckNvbnRhaW5lcic7XG5pbXBvcnQgV29ya09yZGVyQ2FyZCBmcm9tICcuLi8uLi8uLi9jb21tb24vQXBwQm9keS9Xb3JrT3JkZXIvV29ya09yZGVyQ2FyZCc7XG5pbXBvcnQgV29ya09yZGVyRGV0YWlscyBmcm9tICcuLi8uLi8uLi9jb21tb24vQXBwQm9keS9Xb3JrT3JkZXIvV29ya09yZGVyRGV0YWlscyc7XG5pbXBvcnQgU3RhdHVzIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9BcHBCb2R5L1dvcmtPcmRlci9TdGF0dXMnO1xuaW1wb3J0IFN0YXR1c1RleHQgZnJvbSAnLi4vLi4vLi4vY29tbW9uL0FwcEJvZHkvV29ya09yZGVyL1N0YXR1c1RleHQnO1xuaW1wb3J0IFN0YXR1c0luZGljYXRvciBmcm9tICcuLi8uLi8uLi9jb21tb24vQXBwQm9keS9Xb3JrT3JkZXIvU3RhdHVzSW5kaWNhdG9yJztcbmltcG9ydCBXb3JrQ29kZSBmcm9tICcuLi8uLi8uLi9jb21tb24vQXBwQm9keS9Xb3JrT3JkZXIvV29ya0NvZGUnO1xuaW1wb3J0IFdvcmtDb2RlSWQgZnJvbSAnLi4vLi4vLi4vY29tbW9uL0FwcEJvZHkvV29ya09yZGVyL1dvcmtDb2RlSWQnO1xuaW1wb3J0IFdvcmtDb2RlVGV4dCBmcm9tICcuLi8uLi8uLi9jb21tb24vQXBwQm9keS9Xb3JrT3JkZXIvV29ya0NvZGVUZXh0JztcbmltcG9ydCBMb2NhdGlvbiBmcm9tICcuLi8uLi8uLi9jb21tb24vQXBwQm9keS9Xb3JrT3JkZXIvTG9jYXRpb24nO1xuaW1wb3J0IExvY2F0aW9uVGV4dCBmcm9tICcuLi8uLi8uLi9jb21tb24vQXBwQm9keS9Xb3JrT3JkZXIvTG9jYXRpb25UZXh0JztcbmltcG9ydCBDbGllbnQgZnJvbSAnLi4vLi4vLi4vY29tbW9uL0FwcEJvZHkvV29ya09yZGVyL0NsaWVudCc7XG5pbXBvcnQgVmlld01vcmUgZnJvbSAnLi4vLi4vLi4vY29tbW9uL0FwcEJvZHkvV29ya09yZGVyL1ZpZXdNb3JlJztcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi4vLi4vLi4vY29tbW9uL0FwcEJvZHkvV29ya09yZGVyL0F2YXRhcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1cGVyV29ya09yZGVyTGlzdCBleHRlbmRzIENvbXBvbmVudDxhbnksIGFueT4ge1xuICBvblZpZXdNb3JlID0gKHdvcmtPcmRlcjogSVdvcmtPcmRlcikgPT4ge1xuICAgIHRoaXMucHJvcHMubmF2aWdhdGlvbi5uYXZpZ2F0ZSgnRGV0YWlscycsIHtcbiAgICAgIC4uLndvcmtPcmRlclxuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFdvcmtPcmRlckNvbnRhaW5lcj5cbiAgICAgICAgPEZsYXRMaXN0XG4gICAgICAgICAgZGF0YT17d29ya09yZGVyc31cbiAgICAgICAgICBleHRyYURhdGE9e1t0aGlzLnByb3BzLCB0aGlzLnN0YXRlXX1cbiAgICAgICAgICByZW5kZXJJdGVtPXsoeyBpdGVtIH0pID0+IChcbiAgICAgICAgICAgIDxXb3JrT3JkZXJDYXJkIGRyb3BwZWRJblpvbmU9e3RoaXMucHJvcHMuZHJvcHBlZEluWm9uZX0+XG4gICAgICAgICAgICAgIDxXb3JrT3JkZXJEZXRhaWxzPlxuICAgICAgICAgICAgICAgIDxTdGF0dXM+XG4gICAgICAgICAgICAgICAgICA8U3RhdHVzVGV4dD57aXRlbS5zdGF0dXMudG9Mb2NhbGVVcHBlckNhc2UoKX08L1N0YXR1c1RleHQ+XG4gICAgICAgICAgICAgICAgICA8U3RhdHVzSW5kaWNhdG9yIC8+XG4gICAgICAgICAgICAgICAgPC9TdGF0dXM+XG4gICAgICAgICAgICAgICAgPFdvcmtDb2RlPlxuICAgICAgICAgICAgICAgICAgPFdvcmtDb2RlVGV4dD57aXRlbS53b3JrQ29kZX08L1dvcmtDb2RlVGV4dD5cbiAgICAgICAgICAgICAgICAgIDxXb3JrQ29kZUlkPntpdGVtLmlkfTwvV29ya0NvZGVJZD5cbiAgICAgICAgICAgICAgICA8L1dvcmtDb2RlPlxuICAgICAgICAgICAgICAgIDxMb2NhdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxMb2NhdGlvblRleHQ+XG4gICAgICAgICAgICAgICAgICAgIFNlcnZpY2UgTG9jYXRpb246IHtpdGVtLnNlcnZpY2VMb2NhdGlvbn1cbiAgICAgICAgICAgICAgICAgIDwvTG9jYXRpb25UZXh0PlxuICAgICAgICAgICAgICAgICAgPENsaWVudD5DbGllbnQ6IHtpdGVtLmNsaWVudC5uYW1lfTwvQ2xpZW50PlxuICAgICAgICAgICAgICAgIDwvTG9jYXRpb24+XG4gICAgICAgICAgICAgICAgPFZpZXdNb3JlIG9uVmlld01vcmU9e3RoaXMub25WaWV3TW9yZX0gaXRlbT17aXRlbX0gLz5cbiAgICAgICAgICAgICAgPC9Xb3JrT3JkZXJEZXRhaWxzPlxuICAgICAgICAgICAgICA8QXZhdGFyPlxuICAgICAgICAgICAgICAgIDxUZXh0PkpKPC9UZXh0PlxuICAgICAgICAgICAgICA8L0F2YXRhcj5cbiAgICAgICAgICAgIDwvV29ya09yZGVyQ2FyZD5cbiAgICAgICAgICApfVxuICAgICAgICAgIGtleUV4dHJhY3Rvcj17aXRlbSA9PiBpdGVtLmlkfVxuICAgICAgICAvPlxuICAgICAgPC9Xb3JrT3JkZXJDb250YWluZXI+XG4gICAgKTtcbiAgfVxufVxuIl0sInZlcnNpb24iOjN9