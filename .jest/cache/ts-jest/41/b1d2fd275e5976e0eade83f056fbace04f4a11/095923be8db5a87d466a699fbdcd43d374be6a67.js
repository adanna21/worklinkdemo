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
class RightBody extends react_1.Component {
    render() {
        const shadowStyle = {
            backgroundColor: '#fff',
            shadowOpacity: 0.1,
            elevation: 4,
            shadowOffset: { width: -1, height: 3 },
            shadowRadius: 5
        };
        return (react_1.default.createElement(react_native_1.View, { style: [styles.rightBody, shadowStyle] }, this.props.children));
    }
}
exports.default = RightBody;
const styles = react_native_1.StyleSheet.create({
    rightBody: {
        flex: 5,
        backgroundColor: '#FFF',
        // marginBottom: '12%',
        borderRadius: 3
        // borderWidth: 1
        // borderStyle: 'solid',
        // borderColor: '#BDBDBD'
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9jb21tb24vQXBwQm9keS9SaWdodEJvZHkudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLCtDQUF5QztBQUN6QywrQ0FBZ0Q7QUFFaEQsZUFBK0IsU0FBUSxpQkFBUztJQUM5QyxNQUFNO1FBQ0osTUFBTSxXQUFXLEdBQUc7WUFDbEIsZUFBZSxFQUFFLE1BQU07WUFDdkIsYUFBYSxFQUFFLEdBQUc7WUFDbEIsU0FBUyxFQUFFLENBQUM7WUFDWixZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRTtZQUN0QyxZQUFZLEVBQUUsQ0FBQztTQUNoQixDQUFDO1FBQ0YsT0FBTyxDQUNMLDhCQUFDLG1CQUFJLElBQUMsS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBUSxDQUMzRSxDQUFDO0lBQ0osQ0FBQztDQUNGO0FBYkQsNEJBYUM7QUFFRCxNQUFNLE1BQU0sR0FBRyx5QkFBVSxDQUFDLE1BQU0sQ0FBQztJQUMvQixTQUFTLEVBQUU7UUFDVCxJQUFJLEVBQUUsQ0FBQztRQUNQLGVBQWUsRUFBRSxNQUFNO1FBQ3ZCLHVCQUF1QjtRQUN2QixZQUFZLEVBQUUsQ0FBQztRQUNmLGlCQUFpQjtRQUNqQix3QkFBd0I7UUFDeEIseUJBQXlCO0tBQzFCO0NBQ0YsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbzYwL0Rlc2t0b3AvV29ya0ZpbGVzL1dvcmtsaW5rRGVtby9zcmMvUmVhY3QvY29tbW9uL0FwcEJvZHkvUmlnaHRCb2R5LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3R5bGVTaGVldCwgVmlldyB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJpZ2h0Qm9keSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzaGFkb3dTdHlsZSA9IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgc2hhZG93T3BhY2l0eTogMC4xLFxuICAgICAgZWxldmF0aW9uOiA0LFxuICAgICAgc2hhZG93T2Zmc2V0OiB7IHdpZHRoOiAtMSwgaGVpZ2h0OiAzIH0sXG4gICAgICBzaGFkb3dSYWRpdXM6IDVcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8VmlldyBzdHlsZT17W3N0eWxlcy5yaWdodEJvZHksIHNoYWRvd1N0eWxlXX0+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9WaWV3PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICByaWdodEJvZHk6IHtcbiAgICBmbGV4OiA1LFxuICAgIGJhY2tncm91bmRDb2xvcjogJyNGRkYnLFxuICAgIC8vIG1hcmdpbkJvdHRvbTogJzEyJScsXG4gICAgYm9yZGVyUmFkaXVzOiAzXG4gICAgLy8gYm9yZGVyV2lkdGg6IDFcbiAgICAvLyBib3JkZXJTdHlsZTogJ3NvbGlkJyxcbiAgICAvLyBib3JkZXJDb2xvcjogJyNCREJEQkQnXG4gIH1cbn0pO1xuIl0sInZlcnNpb24iOjN9