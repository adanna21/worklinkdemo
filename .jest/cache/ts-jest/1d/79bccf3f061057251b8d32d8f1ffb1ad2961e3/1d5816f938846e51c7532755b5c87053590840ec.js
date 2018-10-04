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
class LeftTitle extends react_1.Component {
    render() {
        return react_1.default.createElement(react_native_1.View, { style: styles.title }, this.props.children);
    }
}
exports.default = LeftTitle;
const styles = react_native_1.StyleSheet.create({
    title: {
        alignItems: 'center',
        flexDirection: 'row',
        flex: 2.5
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9jb21tb24vTGVmdEhlYWRlci9MZWZ0VGl0bGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLCtDQUF5QztBQUN6QywrQ0FBZ0Q7QUFFaEQsZUFBK0IsU0FBUSxpQkFBUztJQUM5QyxNQUFNO1FBQ0osT0FBTyw4QkFBQyxtQkFBSSxJQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFRLENBQUM7SUFDakUsQ0FBQztDQUNGO0FBSkQsNEJBSUM7QUFFRCxNQUFNLE1BQU0sR0FBRyx5QkFBVSxDQUFDLE1BQU0sQ0FBQztJQUMvQixLQUFLLEVBQUU7UUFDTCxVQUFVLEVBQUUsUUFBUTtRQUNwQixhQUFhLEVBQUUsS0FBSztRQUNwQixJQUFJLEVBQUUsR0FBRztLQUNWO0NBQ0YsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbzYwL0Rlc2t0b3AvV29ya0ZpbGVzL1dvcmtsaW5rRGVtby9zcmMvUmVhY3QvY29tbW9uL0xlZnRIZWFkZXIvTGVmdFRpdGxlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3R5bGVTaGVldCwgVmlldyB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExlZnRUaXRsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPFZpZXcgc3R5bGU9e3N0eWxlcy50aXRsZX0+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9WaWV3PjtcbiAgfVxufVxuXG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gIHRpdGxlOiB7XG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgZmxleDogMi41XG4gIH1cbn0pO1xuIl0sInZlcnNpb24iOjN9