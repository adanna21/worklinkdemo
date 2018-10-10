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
class WorkOrderContainer extends react_1.Component {
    render() {
        return react_1.default.createElement(react_native_1.View, { style: styles.container }, this.props.children);
    }
}
exports.default = WorkOrderContainer;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 2
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9jb21tb24vQXBwQm9keS9Xb3JrT3JkZXIvV29ya09yZGVyQ29udGFpbmVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwrQ0FBeUM7QUFDekMsK0NBQWdEO0FBRWhELHdCQUF3QyxTQUFRLGlCQUFtQjtJQUNqRSxNQUFNO1FBQ0osT0FBTyw4QkFBQyxtQkFBSSxJQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsU0FBUyxJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFRLENBQUM7SUFDckUsQ0FBQztDQUNGO0FBSkQscUNBSUM7QUFFRCxNQUFNLE1BQU0sR0FBRyx5QkFBVSxDQUFDLE1BQU0sQ0FBQztJQUMvQixTQUFTLEVBQUU7UUFDVCxJQUFJLEVBQUUsQ0FBQztLQUNSO0NBQ0YsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbzYwL0Rlc2t0b3AvV29ya0ZpbGVzL1dvcmtsaW5rRGVtby9zcmMvUmVhY3QvY29tbW9uL0FwcEJvZHkvV29ya09yZGVyL1dvcmtPcmRlckNvbnRhaW5lci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFN0eWxlU2hlZXQsIFZpZXcgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JrT3JkZXJDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQ8YW55LCBhbnk+IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8VmlldyBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9WaWV3PjtcbiAgfVxufVxuXG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gIGNvbnRhaW5lcjoge1xuICAgIGZsZXg6IDJcbiAgfVxufSk7XG4iXSwidmVyc2lvbiI6M30=