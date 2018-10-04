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
class ViewMore extends react_1.Component {
    render() {
        return (react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.more, onPress: () => this.props.onViewMore(this.props.item) },
            react_1.default.createElement(react_native_1.Text, { style: styles.moreText }, "View More")));
    }
}
exports.default = ViewMore;
const styles = react_native_1.StyleSheet.create({
    more: {
        flex: 1,
        justifyContent: 'center'
    },
    moreText: {
        color: '#757575'
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9jb21tb24vQXBwQm9keS9Xb3JrT3JkZXIvVmlld01vcmUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLCtDQUF5QztBQUN6QywrQ0FBa0U7QUFFbEUsY0FBOEIsU0FBUSxpQkFBbUI7SUFDdkQsTUFBTTtRQUNKLE9BQU8sQ0FDTCw4QkFBQywrQkFBZ0IsSUFDZixLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksRUFDbEIsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBRXJELDhCQUFDLG1CQUFJLElBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxRQUFRLGdCQUFrQixDQUM3QixDQUNwQixDQUFDO0lBQ0osQ0FBQztDQUNGO0FBWEQsMkJBV0M7QUFFRCxNQUFNLE1BQU0sR0FBRyx5QkFBVSxDQUFDLE1BQU0sQ0FBQztJQUMvQixJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsQ0FBQztRQUNQLGNBQWMsRUFBRSxRQUFRO0tBQ3pCO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsS0FBSyxFQUFFLFNBQVM7S0FDakI7Q0FDRixDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9jb21tb24vQXBwQm9keS9Xb3JrT3JkZXIvVmlld01vcmUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTdHlsZVNoZWV0LCBUZXh0LCBUb3VjaGFibGVPcGFjaXR5IH0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlld01vcmUgZXh0ZW5kcyBDb21wb25lbnQ8YW55LCBhbnk+IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8VG91Y2hhYmxlT3BhY2l0eVxuICAgICAgICBzdHlsZT17c3R5bGVzLm1vcmV9XG4gICAgICAgIG9uUHJlc3M9eygpID0+IHRoaXMucHJvcHMub25WaWV3TW9yZSh0aGlzLnByb3BzLml0ZW0pfVxuICAgICAgPlxuICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLm1vcmVUZXh0fT5WaWV3IE1vcmU8L1RleHQ+XG4gICAgICA8L1RvdWNoYWJsZU9wYWNpdHk+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gIG1vcmU6IHtcbiAgICBmbGV4OiAxLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ1xuICB9LFxuICBtb3JlVGV4dDoge1xuICAgIGNvbG9yOiAnIzc1NzU3NSdcbiAgfVxufSk7XG4iXSwidmVyc2lvbiI6M30=