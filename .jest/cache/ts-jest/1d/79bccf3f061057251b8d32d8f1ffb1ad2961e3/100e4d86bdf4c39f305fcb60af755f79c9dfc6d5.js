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
class StatusText extends react_1.Component {
    render() {
        return react_1.default.createElement(react_native_1.Text, { style: styles.statusText }, this.props.children);
    }
}
exports.default = StatusText;
const styles = react_native_1.StyleSheet.create({
    statusText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#757575'
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9jb21tb24vQXBwQm9keS9Xb3JrT3JkZXIvU3RhdHVzVGV4dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsK0NBQXlDO0FBQ3pDLCtDQUFnRDtBQUVoRCxnQkFBZ0MsU0FBUSxpQkFBbUI7SUFDekQsTUFBTTtRQUNKLE9BQU8sOEJBQUMsbUJBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFVBQVUsSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBUSxDQUFDO0lBQ3RFLENBQUM7Q0FDRjtBQUpELDZCQUlDO0FBRUQsTUFBTSxNQUFNLEdBQUcseUJBQVUsQ0FBQyxNQUFNLENBQUM7SUFDL0IsVUFBVSxFQUFFO1FBQ1YsUUFBUSxFQUFFLEVBQUU7UUFDWixVQUFVLEVBQUUsTUFBTTtRQUNsQixLQUFLLEVBQUUsU0FBUztLQUNqQjtDQUNGLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMvYW82MC9EZXNrdG9wL1dvcmtGaWxlcy9Xb3JrbGlua0RlbW8vc3JjL1JlYWN0L2NvbW1vbi9BcHBCb2R5L1dvcmtPcmRlci9TdGF0dXNUZXh0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3R5bGVTaGVldCwgVGV4dCB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXR1c1RleHQgZXh0ZW5kcyBDb21wb25lbnQ8YW55LCBhbnk+IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8VGV4dCBzdHlsZT17c3R5bGVzLnN0YXR1c1RleHR9Pnt0aGlzLnByb3BzLmNoaWxkcmVufTwvVGV4dD47XG4gIH1cbn1cblxuY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICBzdGF0dXNUZXh0OiB7XG4gICAgZm9udFNpemU6IDEyLFxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICBjb2xvcjogJyM3NTc1NzUnXG4gIH1cbn0pO1xuIl0sInZlcnNpb24iOjN9