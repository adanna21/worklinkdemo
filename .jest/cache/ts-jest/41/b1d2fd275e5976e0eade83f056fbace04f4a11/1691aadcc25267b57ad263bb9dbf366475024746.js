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
class RightPanel extends react_1.Component {
    render() {
        return react_1.default.createElement(react_native_1.View, { style: styles.rightPanel }, this.props.children);
    }
}
exports.default = RightPanel;
const styles = react_native_1.StyleSheet.create({
    rightPanel: {
        flex: 1.2,
        marginLeft: '2%'
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9jb21tb24vQXBwQm9keS9SaWdodFBhbmVsLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwrQ0FBeUM7QUFDekMsK0NBQWdEO0FBRWhELGdCQUFnQyxTQUFRLGlCQUFTO0lBQy9DLE1BQU07UUFDSixPQUFPLDhCQUFDLG1CQUFJLElBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxVQUFVLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQVEsQ0FBQztJQUN0RSxDQUFDO0NBQ0Y7QUFKRCw2QkFJQztBQUVELE1BQU0sTUFBTSxHQUFHLHlCQUFVLENBQUMsTUFBTSxDQUFDO0lBQy9CLFVBQVUsRUFBRTtRQUNWLElBQUksRUFBRSxHQUFHO1FBQ1QsVUFBVSxFQUFFLElBQUk7S0FDakI7Q0FDRixDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9jb21tb24vQXBwQm9keS9SaWdodFBhbmVsLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3R5bGVTaGVldCwgVmlldyB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJpZ2h0UGFuZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxWaWV3IHN0eWxlPXtzdHlsZXMucmlnaHRQYW5lbH0+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9WaWV3PjtcbiAgfVxufVxuXG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gIHJpZ2h0UGFuZWw6IHtcbiAgICBmbGV4OiAxLjIsXG4gICAgbWFyZ2luTGVmdDogJzIlJ1xuICB9XG59KTtcbiJdLCJ2ZXJzaW9uIjozfQ==