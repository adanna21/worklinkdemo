"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const index_jsx_1 = require("../../../utils/react-native-drag-drop/index.jsx");
class WorkOrderCard extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {
            zoneEntered: false
        };
    }
    render() {
        const shadowStyle = {
            backgroundColor: '#fff',
            shadowOpacity: 0.1,
            elevation: 4,
            shadowOffset: { width: -1, height: 3 },
            shadowRadius: 5
        };
        return (react_1.default.createElement(index_jsx_1.DropZone, { onEnter: () => this.setState({
                zoneEntered: true
            }), onLeave: () => {
                this.setState({
                    zoneEntered: false
                });
            }, onDrop: () => this.props.droppedInZone(true), style: styles.dropZone },
            react_1.default.createElement(react_native_1.View, { style: [
                    styles.wordCard,
                    shadowStyle,
                    this.state.zoneEntered && styles.active
                ] },
                react_1.default.createElement(react_native_1.View, null),
                this.props.children)));
    }
}
exports.default = WorkOrderCard;
const styles = react_native_1.StyleSheet.create({
    dropZone: {
        paddingBottom: '3%'
    },
    wordCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: '3%',
        paddingBottom: '8%',
        borderRadius: 3
    },
    active: {
        backgroundColor: '#FFD740'
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9jb21tb24vQXBwQm9keS9Xb3JrT3JkZXIvV29ya09yZGVyQ2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsK0NBQXlDO0FBQ3pDLCtDQUFnRDtBQUNoRCwrRUFBMkU7QUFFM0UsbUJBQW1DLFNBQVEsaUJBQW1CO0lBQTlEOztRQUNFLFVBQUssR0FBRztZQUNOLFdBQVcsRUFBRSxLQUFLO1NBQ25CLENBQUM7SUFxQ0osQ0FBQztJQXBDQyxNQUFNO1FBQ0osTUFBTSxXQUFXLEdBQUc7WUFDbEIsZUFBZSxFQUFFLE1BQU07WUFDdkIsYUFBYSxFQUFFLEdBQUc7WUFDbEIsU0FBUyxFQUFFLENBQUM7WUFDWixZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRTtZQUN0QyxZQUFZLEVBQUUsQ0FBQztTQUNoQixDQUFDO1FBQ0YsT0FBTyxDQUNMLDhCQUFDLG9CQUFRLElBQ1AsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUNaLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ1osV0FBVyxFQUFFLElBQUk7YUFDbEIsQ0FBQyxFQUVKLE9BQU8sRUFBRSxHQUFHLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQztvQkFDWixXQUFXLEVBQUUsS0FBSztpQkFDbkIsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxFQUNELE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFDNUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBRXRCLDhCQUFDLG1CQUFJLElBQ0gsS0FBSyxFQUFFO29CQUNMLE1BQU0sQ0FBQyxRQUFRO29CQUNmLFdBQVc7b0JBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLElBQUksTUFBTSxDQUFDLE1BQU07aUJBQ3hDO2dCQUVELDhCQUFDLG1CQUFJLE9BQUc7Z0JBQ1AsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2YsQ0FDRSxDQUNaLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUF4Q0QsZ0NBd0NDO0FBRUQsTUFBTSxNQUFNLEdBQUcseUJBQVUsQ0FBQyxNQUFNLENBQUM7SUFDL0IsUUFBUSxFQUFFO1FBQ1IsYUFBYSxFQUFFLElBQUk7S0FDcEI7SUFDRCxRQUFRLEVBQUU7UUFDUixJQUFJLEVBQUUsQ0FBQztRQUNQLGFBQWEsRUFBRSxLQUFLO1FBQ3BCLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLE9BQU8sRUFBRSxJQUFJO1FBQ2IsYUFBYSxFQUFFLElBQUk7UUFDbkIsWUFBWSxFQUFFLENBQUM7S0FDaEI7SUFDRCxNQUFNLEVBQUU7UUFDTixlQUFlLEVBQUUsU0FBUztLQUMzQjtDQUNGLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMvYW82MC9EZXNrdG9wL1dvcmtGaWxlcy9Xb3JrbGlua0RlbW8vc3JjL1JlYWN0L2NvbW1vbi9BcHBCb2R5L1dvcmtPcmRlci9Xb3JrT3JkZXJDYXJkLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3R5bGVTaGVldCwgVmlldyB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5pbXBvcnQgeyBEcm9wWm9uZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3JlYWN0LW5hdGl2ZS1kcmFnLWRyb3AvaW5kZXguanN4JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV29ya09yZGVyQ2FyZCBleHRlbmRzIENvbXBvbmVudDxhbnksIGFueT4ge1xuICBzdGF0ZSA9IHtcbiAgICB6b25lRW50ZXJlZDogZmFsc2VcbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNoYWRvd1N0eWxlID0ge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICBzaGFkb3dPcGFjaXR5OiAwLjEsXG4gICAgICBlbGV2YXRpb246IDQsXG4gICAgICBzaGFkb3dPZmZzZXQ6IHsgd2lkdGg6IC0xLCBoZWlnaHQ6IDMgfSxcbiAgICAgIHNoYWRvd1JhZGl1czogNVxuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxEcm9wWm9uZVxuICAgICAgICBvbkVudGVyPXsoKSA9PlxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgem9uZUVudGVyZWQ6IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIG9uTGVhdmU9eygpID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHpvbmVFbnRlcmVkOiBmYWxzZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9fVxuICAgICAgICBvbkRyb3A9eygpID0+IHRoaXMucHJvcHMuZHJvcHBlZEluWm9uZSh0cnVlKX1cbiAgICAgICAgc3R5bGU9e3N0eWxlcy5kcm9wWm9uZX1cbiAgICAgID5cbiAgICAgICAgPFZpZXdcbiAgICAgICAgICBzdHlsZT17W1xuICAgICAgICAgICAgc3R5bGVzLndvcmRDYXJkLFxuICAgICAgICAgICAgc2hhZG93U3R5bGUsXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnpvbmVFbnRlcmVkICYmIHN0eWxlcy5hY3RpdmVcbiAgICAgICAgICBdfVxuICAgICAgICA+XG4gICAgICAgICAgPFZpZXcgLz5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9WaWV3PlxuICAgICAgPC9Ecm9wWm9uZT5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgZHJvcFpvbmU6IHtcbiAgICBwYWRkaW5nQm90dG9tOiAnMyUnXG4gIH0sXG4gIHdvcmRDYXJkOiB7XG4gICAgZmxleDogMSxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBwYWRkaW5nOiAnMyUnLFxuICAgIHBhZGRpbmdCb3R0b206ICc4JScsXG4gICAgYm9yZGVyUmFkaXVzOiAzXG4gIH0sXG4gIGFjdGl2ZToge1xuICAgIGJhY2tncm91bmRDb2xvcjogJyNGRkQ3NDAnXG4gIH1cbn0pO1xuIl0sInZlcnNpb24iOjN9