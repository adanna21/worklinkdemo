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
class WorkCodeText extends react_1.Component {
    render() {
        return (react_1.default.createElement(react_native_1.Text, { numberOfLines: 1, style: styles.workCodeText }, this.props.children));
    }
}
exports.default = WorkCodeText;
const styles = react_native_1.StyleSheet.create({
    workCodeText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#616161'
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9jb21tb24vQXBwQm9keS9Xb3JrT3JkZXIvV29ya0NvZGVUZXh0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwrQ0FBeUM7QUFDekMsK0NBQWdEO0FBRWhELGtCQUFrQyxTQUFRLGlCQUFtQjtJQUMzRCxNQUFNO1FBQ0osT0FBTyxDQUNMLDhCQUFDLG1CQUFJLElBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLFlBQVksSUFDL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2YsQ0FDUixDQUFDO0lBQ0osQ0FBQztDQUNGO0FBUkQsK0JBUUM7QUFFRCxNQUFNLE1BQU0sR0FBRyx5QkFBVSxDQUFDLE1BQU0sQ0FBQztJQUMvQixZQUFZLEVBQUU7UUFDWixVQUFVLEVBQUUsTUFBTTtRQUNsQixRQUFRLEVBQUUsRUFBRTtRQUNaLEtBQUssRUFBRSxTQUFTO0tBQ2pCO0NBQ0YsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbzYwL0Rlc2t0b3AvV29ya0ZpbGVzL1dvcmtsaW5rRGVtby9zcmMvUmVhY3QvY29tbW9uL0FwcEJvZHkvV29ya09yZGVyL1dvcmtDb2RlVGV4dC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFN0eWxlU2hlZXQsIFRleHQgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JrQ29kZVRleHQgZXh0ZW5kcyBDb21wb25lbnQ8YW55LCBhbnk+IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8VGV4dCBudW1iZXJPZkxpbmVzPXsxfSBzdHlsZT17c3R5bGVzLndvcmtDb2RlVGV4dH0+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9UZXh0PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICB3b3JrQ29kZVRleHQ6IHtcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgZm9udFNpemU6IDIwLFxuICAgIGNvbG9yOiAnIzYxNjE2MSdcbiAgfVxufSk7XG4iXSwidmVyc2lvbiI6M30=