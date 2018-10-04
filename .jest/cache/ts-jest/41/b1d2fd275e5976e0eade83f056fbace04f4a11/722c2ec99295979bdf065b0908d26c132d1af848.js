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
class LeftPanel extends react_1.Component {
    render() {
        return react_1.default.createElement(react_native_1.View, { style: styles.leftPanel }, this.props.children);
    }
}
exports.default = LeftPanel;
const styles = react_native_1.StyleSheet.create({
    leftPanel: {
        flex: 3,
        marginRight: '2%'
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9jb21tb24vQXBwQm9keS9MZWZ0UGFuZWwudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLCtDQUF5QztBQUN6QywrQ0FBc0Q7QUFFdEQsZUFBK0IsU0FBUSxpQkFBUztJQUM5QyxNQUFNO1FBQ0osT0FBTyw4QkFBQyxtQkFBSSxJQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsU0FBUyxJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFRLENBQUM7SUFDckUsQ0FBQztDQUNGO0FBSkQsNEJBSUM7QUFFRCxNQUFNLE1BQU0sR0FBRyx5QkFBVSxDQUFDLE1BQU0sQ0FBQztJQUMvQixTQUFTLEVBQUU7UUFDVCxJQUFJLEVBQUUsQ0FBQztRQUNQLFdBQVcsRUFBRSxJQUFJO0tBQ2xCO0NBQ0YsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbzYwL0Rlc2t0b3AvV29ya0ZpbGVzL1dvcmtsaW5rRGVtby9zcmMvUmVhY3QvY29tbW9uL0FwcEJvZHkvTGVmdFBhbmVsLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3R5bGVTaGVldCwgVmlldywgVGV4dCB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExlZnRQYW5lbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPFZpZXcgc3R5bGU9e3N0eWxlcy5sZWZ0UGFuZWx9Pnt0aGlzLnByb3BzLmNoaWxkcmVufTwvVmlldz47XG4gIH1cbn1cblxuY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICBsZWZ0UGFuZWw6IHtcbiAgICBmbGV4OiAzLFxuICAgIG1hcmdpblJpZ2h0OiAnMiUnXG4gIH1cbn0pO1xuIl0sInZlcnNpb24iOjN9