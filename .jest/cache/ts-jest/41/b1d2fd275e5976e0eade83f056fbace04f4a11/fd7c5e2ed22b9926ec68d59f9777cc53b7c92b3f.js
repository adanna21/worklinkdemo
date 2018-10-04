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
class StatusIndicator extends react_1.Component {
    render() {
        return react_1.default.createElement(react_native_1.View, { style: styles.statusIndicator });
    }
}
exports.default = StatusIndicator;
const styles = react_native_1.StyleSheet.create({
    statusIndicator: {
        backgroundColor: '#BDBDBD',
        borderRadius: 10,
        width: 10,
        height: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9jb21tb24vQXBwQm9keS9Xb3JrT3JkZXIvU3RhdHVzSW5kaWNhdG9yLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwrQ0FBeUM7QUFDekMsK0NBQWdEO0FBRWhELHFCQUFxQyxTQUFRLGlCQUFtQjtJQUM5RCxNQUFNO1FBQ0osT0FBTyw4QkFBQyxtQkFBSSxJQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsZUFBZSxHQUFJLENBQUM7SUFDakQsQ0FBQztDQUNGO0FBSkQsa0NBSUM7QUFFRCxNQUFNLE1BQU0sR0FBRyx5QkFBVSxDQUFDLE1BQU0sQ0FBQztJQUMvQixlQUFlLEVBQUU7UUFDZixlQUFlLEVBQUUsU0FBUztRQUMxQixZQUFZLEVBQUUsRUFBRTtRQUNoQixLQUFLLEVBQUUsRUFBRTtRQUNULE1BQU0sRUFBRSxFQUFFO1FBQ1YsVUFBVSxFQUFFLFFBQVE7UUFDcEIsY0FBYyxFQUFFLFFBQVE7S0FDekI7Q0FDRixDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9jb21tb24vQXBwQm9keS9Xb3JrT3JkZXIvU3RhdHVzSW5kaWNhdG9yLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3R5bGVTaGVldCwgVmlldyB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXR1c0luZGljYXRvciBleHRlbmRzIENvbXBvbmVudDxhbnksIGFueT4ge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxWaWV3IHN0eWxlPXtzdHlsZXMuc3RhdHVzSW5kaWNhdG9yfSAvPjtcbiAgfVxufVxuXG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gIHN0YXR1c0luZGljYXRvcjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogJyNCREJEQkQnLFxuICAgIGJvcmRlclJhZGl1czogMTAsXG4gICAgd2lkdGg6IDEwLFxuICAgIGhlaWdodDogMTAsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInXG4gIH1cbn0pO1xuIl0sInZlcnNpb24iOjN9