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
class LeftBody extends react_1.Component {
    render() {
        return react_1.default.createElement(react_native_1.View, { style: styles.leftBody }, this.props.children);
    }
}
exports.default = LeftBody;
const styles = react_native_1.StyleSheet.create({
    leftBody: {
        flex: 5,
        // borderWidth: 0.8,
        // borderStyle: 'solid',
        // borderColor: '#BDBDBD',
        // paddingTop: '5%',
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingBottom: '1%'
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9jb21tb24vQXBwQm9keS9MZWZ0Qm9keS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsK0NBQXlDO0FBQ3pDLCtDQUFnRDtBQUVoRCxjQUE4QixTQUFRLGlCQUFTO0lBQzdDLE1BQU07UUFDSixPQUFPLDhCQUFDLG1CQUFJLElBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxRQUFRLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQVEsQ0FBQztJQUNwRSxDQUFDO0NBQ0Y7QUFKRCwyQkFJQztBQUVELE1BQU0sTUFBTSxHQUFHLHlCQUFVLENBQUMsTUFBTSxDQUFDO0lBQy9CLFFBQVEsRUFBRTtRQUNSLElBQUksRUFBRSxDQUFDO1FBQ1Asb0JBQW9CO1FBQ3BCLHdCQUF3QjtRQUN4QiwwQkFBMEI7UUFDMUIsb0JBQW9CO1FBQ3BCLFdBQVcsRUFBRSxJQUFJO1FBQ2pCLFlBQVksRUFBRSxJQUFJO1FBQ2xCLGFBQWEsRUFBRSxJQUFJO0tBQ3BCO0NBQ0YsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbzYwL0Rlc2t0b3AvV29ya0ZpbGVzL1dvcmtsaW5rRGVtby9zcmMvUmVhY3QvY29tbW9uL0FwcEJvZHkvTGVmdEJvZHkudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTdHlsZVNoZWV0LCBWaWV3IH0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGVmdEJvZHkgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxWaWV3IHN0eWxlPXtzdHlsZXMubGVmdEJvZHl9Pnt0aGlzLnByb3BzLmNoaWxkcmVufTwvVmlldz47XG4gIH1cbn1cblxuY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICBsZWZ0Qm9keToge1xuICAgIGZsZXg6IDUsXG4gICAgLy8gYm9yZGVyV2lkdGg6IDAuOCxcbiAgICAvLyBib3JkZXJTdHlsZTogJ3NvbGlkJyxcbiAgICAvLyBib3JkZXJDb2xvcjogJyNCREJEQkQnLFxuICAgIC8vIHBhZGRpbmdUb3A6ICc1JScsXG4gICAgcGFkZGluZ0xlZnQ6ICc1JScsXG4gICAgcGFkZGluZ1JpZ2h0OiAnNSUnLFxuICAgIHBhZGRpbmdCb3R0b206ICcxJSdcbiAgfVxufSk7XG4iXSwidmVyc2lvbiI6M30=