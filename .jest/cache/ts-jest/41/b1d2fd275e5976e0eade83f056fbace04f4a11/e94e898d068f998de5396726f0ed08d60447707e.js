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
class LocationText extends react_1.Component {
    render() {
        return (react_1.default.createElement(react_native_1.Text, { numberOfLines: 1, style: styles.locationText }, this.props.children));
    }
}
exports.default = LocationText;
const styles = react_native_1.StyleSheet.create({
    locationText: {
        color: '#424242'
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9jb21tb24vQXBwQm9keS9Xb3JrT3JkZXIvTG9jYXRpb25UZXh0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwrQ0FBeUM7QUFDekMsK0NBQWdEO0FBRWhELGtCQUFrQyxTQUFRLGlCQUFtQjtJQUMzRCxNQUFNO1FBQ0osT0FBTyxDQUNMLDhCQUFDLG1CQUFJLElBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLFlBQVksSUFDL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2YsQ0FDUixDQUFDO0lBQ0osQ0FBQztDQUNGO0FBUkQsK0JBUUM7QUFFRCxNQUFNLE1BQU0sR0FBRyx5QkFBVSxDQUFDLE1BQU0sQ0FBQztJQUMvQixZQUFZLEVBQUU7UUFDWixLQUFLLEVBQUUsU0FBUztLQUNqQjtDQUNGLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMvYW82MC9EZXNrdG9wL1dvcmtGaWxlcy9Xb3JrbGlua0RlbW8vc3JjL1JlYWN0L2NvbW1vbi9BcHBCb2R5L1dvcmtPcmRlci9Mb2NhdGlvblRleHQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTdHlsZVNoZWV0LCBUZXh0IH0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYXRpb25UZXh0IGV4dGVuZHMgQ29tcG9uZW50PGFueSwgYW55PiB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFRleHQgbnVtYmVyT2ZMaW5lcz17MX0gc3R5bGU9e3N0eWxlcy5sb2NhdGlvblRleHR9PlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvVGV4dD5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgbG9jYXRpb25UZXh0OiB7XG4gICAgY29sb3I6ICcjNDI0MjQyJ1xuICB9XG59KTtcbiJdLCJ2ZXJzaW9uIjozfQ==