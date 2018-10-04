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
class ActionHeader extends react_1.Component {
    render() {
        return (react_1.default.createElement(react_native_1.View, { style: styles.container },
            react_1.default.createElement(react_native_1.View, { style: styles.title },
                react_1.default.createElement(react_native_1.Text, { style: styles.titleText }, this.props.children)),
            react_1.default.createElement(react_native_1.View, { style: styles.icons })));
    }
}
exports.default = ActionHeader;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
        // marginLeft: '3%',
        // backgroundColor: 'blue'
    },
    title: {
        flex: 2
        // paddingLeft: '5%'
    },
    titleText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#424242'
    },
    icons: {
        flex: 1,
        flexDirection: 'row'
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9jb21wb25lbnRzL1JpZ2h0UGFuZWwvSGVhZGVyL0FjdGlvbkhlYWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsK0NBQXlDO0FBQ3pDLCtDQUFzRDtBQUd0RCxrQkFBa0MsU0FBUSxpQkFBZ0I7SUFDeEQsTUFBTTtRQUNKLE9BQU8sQ0FDTCw4QkFBQyxtQkFBSSxJQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQiw4QkFBQyxtQkFBSSxJQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztnQkFDdkIsOEJBQUMsbUJBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFNBQVMsSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBUSxDQUN0RDtZQUNQLDhCQUFDLG1CQUFJLElBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLEdBQUksQ0FDeEIsQ0FDUixDQUFDO0lBQ0osQ0FBQztDQUNGO0FBWEQsK0JBV0M7QUFFRCxNQUFNLE1BQU0sR0FBRyx5QkFBVSxDQUFDLE1BQU0sQ0FBQztJQUMvQixTQUFTLEVBQUU7UUFDVCxJQUFJLEVBQUUsQ0FBQztRQUNQLGFBQWEsRUFBRSxLQUFLO1FBQ3BCLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLG9CQUFvQjtRQUNwQiwwQkFBMEI7S0FDM0I7SUFDRCxLQUFLLEVBQUU7UUFDTCxJQUFJLEVBQUUsQ0FBQztRQUNQLG9CQUFvQjtLQUNyQjtJQUNELFNBQVMsRUFBRTtRQUNULFFBQVEsRUFBRSxFQUFFO1FBQ1osVUFBVSxFQUFFLE1BQU07UUFDbEIsS0FBSyxFQUFFLFNBQVM7S0FDakI7SUFDRCxLQUFLLEVBQUU7UUFDTCxJQUFJLEVBQUUsQ0FBQztRQUNQLGFBQWEsRUFBRSxLQUFLO0tBQ3JCO0NBQ0YsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbzYwL0Rlc2t0b3AvV29ya0ZpbGVzL1dvcmtsaW5rRGVtby9zcmMvUmVhY3QvY29tcG9uZW50cy9SaWdodFBhbmVsL0hlYWRlci9BY3Rpb25IZWFkZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTdHlsZVNoZWV0LCBUZXh0LCBWaWV3IH0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxudHlwZSBQcm9wcyA9IHt9O1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9uSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzPiB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnRpdGxlVGV4dH0+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9UZXh0PlxuICAgICAgICA8L1ZpZXc+XG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuaWNvbnN9IC8+XG4gICAgICA8L1ZpZXc+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gIGNvbnRhaW5lcjoge1xuICAgIGZsZXg6IDEsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcidcbiAgICAvLyBtYXJnaW5MZWZ0OiAnMyUnLFxuICAgIC8vIGJhY2tncm91bmRDb2xvcjogJ2JsdWUnXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgZmxleDogMlxuICAgIC8vIHBhZGRpbmdMZWZ0OiAnNSUnXG4gIH0sXG4gIHRpdGxlVGV4dDoge1xuICAgIGZvbnRTaXplOiAxNSxcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgY29sb3I6ICcjNDI0MjQyJ1xuICB9LFxuICBpY29uczoge1xuICAgIGZsZXg6IDEsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdydcbiAgfVxufSk7XG4iXSwidmVyc2lvbiI6M30=