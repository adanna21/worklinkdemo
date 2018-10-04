"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const LeftContainer_1 = __importDefault(require("../../../common/LeftHeader/LeftContainer"));
const LeftTitle_1 = __importDefault(require("../../../common/LeftHeader/LeftTitle"));
const FilterSort_1 = __importDefault(require("../../../common/LeftHeader/FilterSort"));
const OnCall_1 = __importDefault(require("../../../common/LeftHeader/OnCall"));
class MyWorkOrderHeader extends react_1.Component {
    render() {
        return (react_1.default.createElement(LeftContainer_1.default, null,
            react_1.default.createElement(LeftTitle_1.default, null,
                react_1.default.createElement(react_native_1.Text, { style: styles.titleText }, this.props.children),
                react_1.default.createElement(OnCall_1.default, null)),
            react_1.default.createElement(FilterSort_1.default, null)));
    }
}
exports.default = MyWorkOrderHeader;
const styles = react_native_1.StyleSheet.create({
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#424242'
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9jb21wb25lbnRzL0xlZnRQYW5lbC9IZWFkZXIvU3VwZXJXb3JrT3JkZXJIZWFkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLCtDQUF5QztBQUN6QywrQ0FBd0U7QUFDeEUsNkZBQXFFO0FBQ3JFLHFGQUE2RDtBQUM3RCx1RkFBK0Q7QUFDL0QsK0VBQXVEO0FBRXZELHVCQUF1QyxTQUFRLGlCQUFTO0lBQ3RELE1BQU07UUFDSixPQUFPLENBQ0wsOEJBQUMsdUJBQWE7WUFDWiw4QkFBQyxtQkFBUztnQkFDUiw4QkFBQyxtQkFBSSxJQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsU0FBUyxJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFRO2dCQUMzRCw4QkFBQyxnQkFBTSxPQUFHLENBQ0E7WUFDWiw4QkFBQyxvQkFBVSxPQUFHLENBQ0EsQ0FDakIsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQVpELG9DQVlDO0FBRUQsTUFBTSxNQUFNLEdBQUcseUJBQVUsQ0FBQyxNQUFNLENBQUM7SUFDL0IsU0FBUyxFQUFFO1FBQ1QsUUFBUSxFQUFFLEVBQUU7UUFDWixVQUFVLEVBQUUsTUFBTTtRQUNsQixLQUFLLEVBQUUsU0FBUztLQUNqQjtDQUNGLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMvYW82MC9EZXNrdG9wL1dvcmtGaWxlcy9Xb3JrbGlua0RlbW8vc3JjL1JlYWN0L2NvbXBvbmVudHMvTGVmdFBhbmVsL0hlYWRlci9TdXBlcldvcmtPcmRlckhlYWRlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFN0eWxlU2hlZXQsIFRleHQsIFZpZXcsIFRvdWNoYWJsZU9wYWNpdHkgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuaW1wb3J0IExlZnRDb250YWluZXIgZnJvbSAnLi4vLi4vLi4vY29tbW9uL0xlZnRIZWFkZXIvTGVmdENvbnRhaW5lcic7XG5pbXBvcnQgTGVmdFRpdGxlIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9MZWZ0SGVhZGVyL0xlZnRUaXRsZSc7XG5pbXBvcnQgRmlsdGVyU29ydCBmcm9tICcuLi8uLi8uLi9jb21tb24vTGVmdEhlYWRlci9GaWx0ZXJTb3J0JztcbmltcG9ydCBPbkNhbGwgZnJvbSAnLi4vLi4vLi4vY29tbW9uL0xlZnRIZWFkZXIvT25DYWxsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlXb3JrT3JkZXJIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMZWZ0Q29udGFpbmVyPlxuICAgICAgICA8TGVmdFRpdGxlPlxuICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMudGl0bGVUZXh0fT57dGhpcy5wcm9wcy5jaGlsZHJlbn08L1RleHQ+XG4gICAgICAgICAgPE9uQ2FsbCAvPlxuICAgICAgICA8L0xlZnRUaXRsZT5cbiAgICAgICAgPEZpbHRlclNvcnQgLz5cbiAgICAgIDwvTGVmdENvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgdGl0bGVUZXh0OiB7XG4gICAgZm9udFNpemU6IDIwLFxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICBjb2xvcjogJyM0MjQyNDInXG4gIH1cbn0pO1xuIl0sInZlcnNpb24iOjN9