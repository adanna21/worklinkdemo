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
class Client extends react_1.Component {
    render() {
        return react_1.default.createElement(react_native_1.Text, { style: styles.client }, this.props.children);
    }
}
exports.default = Client;
const styles = react_native_1.StyleSheet.create({
    client: {
        color: '#757575'
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9jb21tb24vQXBwQm9keS9Xb3JrT3JkZXIvQ2xpZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwrQ0FBeUM7QUFDekMsK0NBQWdEO0FBRWhELFlBQTRCLFNBQVEsaUJBQW1CO0lBQ3JELE1BQU07UUFDSixPQUFPLDhCQUFDLG1CQUFJLElBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQVEsQ0FBQztJQUNsRSxDQUFDO0NBQ0Y7QUFKRCx5QkFJQztBQUVELE1BQU0sTUFBTSxHQUFHLHlCQUFVLENBQUMsTUFBTSxDQUFDO0lBQy9CLE1BQU0sRUFBRTtRQUNOLEtBQUssRUFBRSxTQUFTO0tBQ2pCO0NBQ0YsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbzYwL0Rlc2t0b3AvV29ya0ZpbGVzL1dvcmtsaW5rRGVtby9zcmMvUmVhY3QvY29tbW9uL0FwcEJvZHkvV29ya09yZGVyL0NsaWVudC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFN0eWxlU2hlZXQsIFRleHQgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGllbnQgZXh0ZW5kcyBDb21wb25lbnQ8YW55LCBhbnk+IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8VGV4dCBzdHlsZT17c3R5bGVzLmNsaWVudH0+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9UZXh0PjtcbiAgfVxufVxuXG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gIGNsaWVudDoge1xuICAgIGNvbG9yOiAnIzc1NzU3NSdcbiAgfVxufSk7XG4iXSwidmVyc2lvbiI6M30=