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
class RightHeader extends react_1.Component {
    render() {
        return react_1.default.createElement(react_native_1.View, { style: styles.rightHeader }, this.props.children);
    }
}
exports.default = RightHeader;
const styles = react_native_1.StyleSheet.create({
    rightHeader: {
        flex: 0.3,
        paddingLeft: '10%',
        alignItems: 'center'
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9jb21tb24vQXBwQm9keS9SaWdodEhlYWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsK0NBQXlDO0FBQ3pDLCtDQUFnRDtBQUVoRCxpQkFBaUMsU0FBUSxpQkFBUztJQUNoRCxNQUFNO1FBQ0osT0FBTyw4QkFBQyxtQkFBSSxJQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsV0FBVyxJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFRLENBQUM7SUFDdkUsQ0FBQztDQUNGO0FBSkQsOEJBSUM7QUFFRCxNQUFNLE1BQU0sR0FBRyx5QkFBVSxDQUFDLE1BQU0sQ0FBQztJQUMvQixXQUFXLEVBQUU7UUFDWCxJQUFJLEVBQUUsR0FBRztRQUNULFdBQVcsRUFBRSxLQUFLO1FBQ2xCLFVBQVUsRUFBRSxRQUFRO0tBQ3JCO0NBQ0YsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbzYwL0Rlc2t0b3AvV29ya0ZpbGVzL1dvcmtsaW5rRGVtby9zcmMvUmVhY3QvY29tbW9uL0FwcEJvZHkvUmlnaHRIZWFkZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTdHlsZVNoZWV0LCBWaWV3IH0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmlnaHRIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxWaWV3IHN0eWxlPXtzdHlsZXMucmlnaHRIZWFkZXJ9Pnt0aGlzLnByb3BzLmNoaWxkcmVufTwvVmlldz47XG4gIH1cbn1cblxuY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICByaWdodEhlYWRlcjoge1xuICAgIGZsZXg6IDAuMyxcbiAgICBwYWRkaW5nTGVmdDogJzEwJScsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcidcbiAgfVxufSk7XG4iXSwidmVyc2lvbiI6M30=