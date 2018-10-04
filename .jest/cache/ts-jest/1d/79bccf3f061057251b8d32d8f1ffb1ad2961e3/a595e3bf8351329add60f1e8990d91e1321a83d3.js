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
class OnCall extends react_1.Component {
    render() {
        return (react_1.default.createElement(react_native_1.View, { style: styles.onCall },
            react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.callBottom }),
            react_1.default.createElement(react_native_1.Text, { style: styles.callText }, "I am on call")));
    }
}
exports.default = OnCall;
const styles = react_native_1.StyleSheet.create({
    onCall: {
        flexDirection: 'row',
        marginTop: '2%',
        marginLeft: '5%',
        alignSelf: 'center'
    },
    callBottom: {
        color: '#424242',
        marginRight: 10,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#BDBDBD',
        borderRadius: 3,
        width: 15,
        height: 15
    },
    callText: {
        fontSize: 12,
        color: '#424242'
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9jb21tb24vTGVmdEhlYWRlci9PbkNhbGwudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLCtDQUF5QztBQUN6QywrQ0FBd0U7QUFFeEUsWUFBNEIsU0FBUSxpQkFBUztJQUMzQyxNQUFNO1FBQ0osT0FBTyxDQUNMLDhCQUFDLG1CQUFJLElBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNO1lBQ3hCLDhCQUFDLCtCQUFnQixJQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsVUFBVSxHQUFJO1lBQzlDLDhCQUFDLG1CQUFJLElBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxRQUFRLG1CQUFxQixDQUM1QyxDQUNSLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUFURCx5QkFTQztBQUVELE1BQU0sTUFBTSxHQUFHLHlCQUFVLENBQUMsTUFBTSxDQUFDO0lBQy9CLE1BQU0sRUFBRTtRQUNOLGFBQWEsRUFBRSxLQUFLO1FBQ3BCLFNBQVMsRUFBRSxJQUFJO1FBQ2YsVUFBVSxFQUFFLElBQUk7UUFDaEIsU0FBUyxFQUFFLFFBQVE7S0FDcEI7SUFDRCxVQUFVLEVBQUU7UUFDVixLQUFLLEVBQUUsU0FBUztRQUNoQixXQUFXLEVBQUUsRUFBRTtRQUNmLFdBQVcsRUFBRSxDQUFDO1FBQ2QsV0FBVyxFQUFFLE9BQU87UUFDcEIsV0FBVyxFQUFFLFNBQVM7UUFDdEIsWUFBWSxFQUFFLENBQUM7UUFDZixLQUFLLEVBQUUsRUFBRTtRQUNULE1BQU0sRUFBRSxFQUFFO0tBQ1g7SUFDRCxRQUFRLEVBQUU7UUFDUixRQUFRLEVBQUUsRUFBRTtRQUNaLEtBQUssRUFBRSxTQUFTO0tBQ2pCO0NBQ0YsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbzYwL0Rlc2t0b3AvV29ya0ZpbGVzL1dvcmtsaW5rRGVtby9zcmMvUmVhY3QvY29tbW9uL0xlZnRIZWFkZXIvT25DYWxsLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3R5bGVTaGVldCwgVGV4dCwgVmlldywgVG91Y2hhYmxlT3BhY2l0eSB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9uQ2FsbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5vbkNhbGx9PlxuICAgICAgICA8VG91Y2hhYmxlT3BhY2l0eSBzdHlsZT17c3R5bGVzLmNhbGxCb3R0b219IC8+XG4gICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuY2FsbFRleHR9PkkgYW0gb24gY2FsbDwvVGV4dD5cbiAgICAgIDwvVmlldz5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgb25DYWxsOiB7XG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgbWFyZ2luVG9wOiAnMiUnLFxuICAgIG1hcmdpbkxlZnQ6ICc1JScsXG4gICAgYWxpZ25TZWxmOiAnY2VudGVyJ1xuICB9LFxuICBjYWxsQm90dG9tOiB7XG4gICAgY29sb3I6ICcjNDI0MjQyJyxcbiAgICBtYXJnaW5SaWdodDogMTAsXG4gICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgYm9yZGVyU3R5bGU6ICdzb2xpZCcsXG4gICAgYm9yZGVyQ29sb3I6ICcjQkRCREJEJyxcbiAgICBib3JkZXJSYWRpdXM6IDMsXG4gICAgd2lkdGg6IDE1LFxuICAgIGhlaWdodDogMTVcbiAgfSxcbiAgY2FsbFRleHQ6IHtcbiAgICBmb250U2l6ZTogMTIsXG4gICAgY29sb3I6ICcjNDI0MjQyJ1xuICB9XG59KTtcbiJdLCJ2ZXJzaW9uIjozfQ==