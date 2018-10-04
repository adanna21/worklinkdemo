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
class Status extends react_1.Component {
    render() {
        return react_1.default.createElement(react_native_1.View, { style: styles.status }, this.props.children);
    }
}
exports.default = Status;
const styles = react_native_1.StyleSheet.create({
    status: {
        flexDirection: 'row',
        flex: 1
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9jb21tb24vQXBwQm9keS9Xb3JrT3JkZXIvU3RhdHVzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwrQ0FBeUM7QUFDekMsK0NBQWdEO0FBRWhELFlBQTRCLFNBQVEsaUJBQW1CO0lBQ3JELE1BQU07UUFDSixPQUFPLDhCQUFDLG1CQUFJLElBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQVEsQ0FBQztJQUNsRSxDQUFDO0NBQ0Y7QUFKRCx5QkFJQztBQUVELE1BQU0sTUFBTSxHQUFHLHlCQUFVLENBQUMsTUFBTSxDQUFDO0lBQy9CLE1BQU0sRUFBRTtRQUNOLGFBQWEsRUFBRSxLQUFLO1FBQ3BCLElBQUksRUFBRSxDQUFDO0tBQ1I7Q0FDRixDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9jb21tb24vQXBwQm9keS9Xb3JrT3JkZXIvU3RhdHVzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3R5bGVTaGVldCwgVmlldyB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXR1cyBleHRlbmRzIENvbXBvbmVudDxhbnksIGFueT4ge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxWaWV3IHN0eWxlPXtzdHlsZXMuc3RhdHVzfT57dGhpcy5wcm9wcy5jaGlsZHJlbn08L1ZpZXc+O1xuICB9XG59XG5cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgc3RhdHVzOiB7XG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgZmxleDogMVxuICB9XG59KTtcbiJdLCJ2ZXJzaW9uIjozfQ==