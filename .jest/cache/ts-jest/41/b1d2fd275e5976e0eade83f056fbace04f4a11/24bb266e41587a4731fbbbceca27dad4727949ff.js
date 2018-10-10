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
class AppContainer extends react_1.Component {
    render() {
        return react_1.default.createElement(react_native_1.View, { style: styles.container }, this.props.children);
    }
}
exports.default = AppContainer;
const styles = react_native_1.StyleSheet.create({
    container: {
        // backgroundColor: '#fff',
        flexDirection: 'row',
        flex: 6,
        // borderWidth: 1,
        // borderStyle: 'solid',
        // borderColor: '#BDBDBD',
        paddingTop: '1%',
        paddingLeft: '3%',
        paddingRight: '3%',
        paddingBottom: '3%',
        backgroundColor: '#f7f7f7'
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9jb21tb24vQXBwQm9keS9BcHBDb250YWluZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLCtDQUF5QztBQUN6QywrQ0FBZ0Q7QUFFaEQsa0JBQWtDLFNBQVEsaUJBQVM7SUFDakQsTUFBTTtRQUNKLE9BQU8sOEJBQUMsbUJBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFNBQVMsSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBUSxDQUFDO0lBQ3JFLENBQUM7Q0FDRjtBQUpELCtCQUlDO0FBRUQsTUFBTSxNQUFNLEdBQUcseUJBQVUsQ0FBQyxNQUFNLENBQUM7SUFDL0IsU0FBUyxFQUFFO1FBQ1QsMkJBQTJCO1FBQzNCLGFBQWEsRUFBRSxLQUFLO1FBQ3BCLElBQUksRUFBRSxDQUFDO1FBQ1Asa0JBQWtCO1FBQ2xCLHdCQUF3QjtRQUN4QiwwQkFBMEI7UUFDMUIsVUFBVSxFQUFFLElBQUk7UUFDaEIsV0FBVyxFQUFFLElBQUk7UUFDakIsWUFBWSxFQUFFLElBQUk7UUFDbEIsYUFBYSxFQUFFLElBQUk7UUFDbkIsZUFBZSxFQUFFLFNBQVM7S0FDM0I7Q0FDRixDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9jb21tb24vQXBwQm9keS9BcHBDb250YWluZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTdHlsZVNoZWV0LCBWaWV3IH0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8VmlldyBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9WaWV3PjtcbiAgfVxufVxuXG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gIGNvbnRhaW5lcjoge1xuICAgIC8vIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGZsZXg6IDYsXG4gICAgLy8gYm9yZGVyV2lkdGg6IDEsXG4gICAgLy8gYm9yZGVyU3R5bGU6ICdzb2xpZCcsXG4gICAgLy8gYm9yZGVyQ29sb3I6ICcjQkRCREJEJyxcbiAgICBwYWRkaW5nVG9wOiAnMSUnLFxuICAgIHBhZGRpbmdMZWZ0OiAnMyUnLFxuICAgIHBhZGRpbmdSaWdodDogJzMlJyxcbiAgICBwYWRkaW5nQm90dG9tOiAnMyUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyNmN2Y3ZjcnXG4gIH1cbn0pO1xuIl0sInZlcnNpb24iOjN9