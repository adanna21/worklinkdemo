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
const react_native_drag_drop_1 = require("../../../utils/react-native-drag-drop");
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
        return (react_1.default.createElement(react_native_drag_drop_1.DropZone, { onEnter: () => this.setState({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9jb21tb24vQXBwQm9keS9Xb3JrT3JkZXIvV29ya09yZGVyQ2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsK0NBQXlDO0FBQ3pDLCtDQUFnRDtBQUNoRCxrRkFBaUU7QUFFakUsbUJBQW1DLFNBQVEsaUJBQW1CO0lBQTlEOztRQUNFLFVBQUssR0FBRztZQUNOLFdBQVcsRUFBRSxLQUFLO1NBQ25CLENBQUM7SUFxQ0osQ0FBQztJQXBDQyxNQUFNO1FBQ0osTUFBTSxXQUFXLEdBQUc7WUFDbEIsZUFBZSxFQUFFLE1BQU07WUFDdkIsYUFBYSxFQUFFLEdBQUc7WUFDbEIsU0FBUyxFQUFFLENBQUM7WUFDWixZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRTtZQUN0QyxZQUFZLEVBQUUsQ0FBQztTQUNoQixDQUFDO1FBQ0YsT0FBTyxDQUNMLDhCQUFDLGlDQUFRLElBQ1AsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUNaLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ1osV0FBVyxFQUFFLElBQUk7YUFDbEIsQ0FBQyxFQUVKLE9BQU8sRUFBRSxHQUFHLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQztvQkFDWixXQUFXLEVBQUUsS0FBSztpQkFDbkIsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxFQUNELE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFDNUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBRXRCLDhCQUFDLG1CQUFJLElBQ0gsS0FBSyxFQUFFO29CQUNMLE1BQU0sQ0FBQyxRQUFRO29CQUNmLFdBQVc7b0JBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLElBQUksTUFBTSxDQUFDLE1BQU07aUJBQ3hDO2dCQUVELDhCQUFDLG1CQUFJLE9BQUc7Z0JBQ1AsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2YsQ0FDRSxDQUNaLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUF4Q0QsZ0NBd0NDO0FBRUQsTUFBTSxNQUFNLEdBQUcseUJBQVUsQ0FBQyxNQUFNLENBQUM7SUFDL0IsUUFBUSxFQUFFO1FBQ1IsYUFBYSxFQUFFLElBQUk7S0FDcEI7SUFDRCxRQUFRLEVBQUU7UUFDUixJQUFJLEVBQUUsQ0FBQztRQUNQLGFBQWEsRUFBRSxLQUFLO1FBQ3BCLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLE9BQU8sRUFBRSxJQUFJO1FBQ2IsYUFBYSxFQUFFLElBQUk7UUFDbkIsWUFBWSxFQUFFLENBQUM7S0FDaEI7SUFDRCxNQUFNLEVBQUU7UUFDTixlQUFlLEVBQUUsU0FBUztLQUMzQjtDQUNGLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMvYW82MC9EZXNrdG9wL1dvcmtGaWxlcy9Xb3JrbGlua0RlbW8vc3JjL1JlYWN0L2NvbW1vbi9BcHBCb2R5L1dvcmtPcmRlci9Xb3JrT3JkZXJDYXJkLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3R5bGVTaGVldCwgVmlldyB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5pbXBvcnQgeyBEcm9wWm9uZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3JlYWN0LW5hdGl2ZS1kcmFnLWRyb3AnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JrT3JkZXJDYXJkIGV4dGVuZHMgQ29tcG9uZW50PGFueSwgYW55PiB7XG4gIHN0YXRlID0ge1xuICAgIHpvbmVFbnRlcmVkOiBmYWxzZVxuICB9O1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2hhZG93U3R5bGUgPSB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgIHNoYWRvd09wYWNpdHk6IDAuMSxcbiAgICAgIGVsZXZhdGlvbjogNCxcbiAgICAgIHNoYWRvd09mZnNldDogeyB3aWR0aDogLTEsIGhlaWdodDogMyB9LFxuICAgICAgc2hhZG93UmFkaXVzOiA1XG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPERyb3Bab25lXG4gICAgICAgIG9uRW50ZXI9eygpID0+XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB6b25lRW50ZXJlZDogdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgb25MZWF2ZT17KCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgem9uZUVudGVyZWQ6IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH19XG4gICAgICAgIG9uRHJvcD17KCkgPT4gdGhpcy5wcm9wcy5kcm9wcGVkSW5ab25lKHRydWUpfVxuICAgICAgICBzdHlsZT17c3R5bGVzLmRyb3Bab25lfVxuICAgICAgPlxuICAgICAgICA8Vmlld1xuICAgICAgICAgIHN0eWxlPXtbXG4gICAgICAgICAgICBzdHlsZXMud29yZENhcmQsXG4gICAgICAgICAgICBzaGFkb3dTdHlsZSxcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuem9uZUVudGVyZWQgJiYgc3R5bGVzLmFjdGl2ZVxuICAgICAgICAgIF19XG4gICAgICAgID5cbiAgICAgICAgICA8VmlldyAvPlxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICA8L1ZpZXc+XG4gICAgICA8L0Ryb3Bab25lPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICBkcm9wWm9uZToge1xuICAgIHBhZGRpbmdCb3R0b206ICczJSdcbiAgfSxcbiAgd29yZENhcmQ6IHtcbiAgICBmbGV4OiAxLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIHBhZGRpbmc6ICczJScsXG4gICAgcGFkZGluZ0JvdHRvbTogJzglJyxcbiAgICBib3JkZXJSYWRpdXM6IDNcbiAgfSxcbiAgYWN0aXZlOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAnI0ZGRDc0MCdcbiAgfVxufSk7XG4iXSwidmVyc2lvbiI6M30=