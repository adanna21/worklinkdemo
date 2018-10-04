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
class WorkOrderDetails extends react_1.Component {
    render() {
        return react_1.default.createElement(react_native_1.View, { style: styles.details }, this.props.children);
    }
}
exports.default = WorkOrderDetails;
const styles = react_native_1.StyleSheet.create({
    details: {
        flex: 3,
        padding: '2%'
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9jb21tb24vQXBwQm9keS9Xb3JrT3JkZXIvV29ya09yZGVyRGV0YWlscy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsK0NBQXlDO0FBQ3pDLCtDQUFnRDtBQUVoRCxzQkFBc0MsU0FBUSxpQkFBbUI7SUFDL0QsTUFBTTtRQUNKLE9BQU8sOEJBQUMsbUJBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU8sSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBUSxDQUFDO0lBQ25FLENBQUM7Q0FDRjtBQUpELG1DQUlDO0FBRUQsTUFBTSxNQUFNLEdBQUcseUJBQVUsQ0FBQyxNQUFNLENBQUM7SUFDL0IsT0FBTyxFQUFFO1FBQ1AsSUFBSSxFQUFFLENBQUM7UUFDUCxPQUFPLEVBQUUsSUFBSTtLQUNkO0NBQ0YsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbzYwL0Rlc2t0b3AvV29ya0ZpbGVzL1dvcmtsaW5rRGVtby9zcmMvUmVhY3QvY29tbW9uL0FwcEJvZHkvV29ya09yZGVyL1dvcmtPcmRlckRldGFpbHMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTdHlsZVNoZWV0LCBWaWV3IH0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV29ya09yZGVyRGV0YWlscyBleHRlbmRzIENvbXBvbmVudDxhbnksIGFueT4ge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxWaWV3IHN0eWxlPXtzdHlsZXMuZGV0YWlsc30+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9WaWV3PjtcbiAgfVxufVxuXG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gIGRldGFpbHM6IHtcbiAgICBmbGV4OiAzLFxuICAgIHBhZGRpbmc6ICcyJSdcbiAgfVxufSk7XG4iXSwidmVyc2lvbiI6M30=