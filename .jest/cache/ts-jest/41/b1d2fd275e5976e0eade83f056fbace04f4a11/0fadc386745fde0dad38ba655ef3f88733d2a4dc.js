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
const FontAwesome_1 = __importDefault(require("react-native-vector-icons/FontAwesome"));
class FilterSort extends react_1.Component {
    render() {
        return (react_1.default.createElement(react_native_1.View, { style: styles.icons },
            react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.filter },
                react_1.default.createElement(react_native_1.Text, { style: styles.iconText }, "Filter"),
                react_1.default.createElement(FontAwesome_1.default, { name: "filter", size: 20, color: "#757575" })),
            react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.sort },
                react_1.default.createElement(react_native_1.Text, { style: styles.iconText }, "Sort"),
                react_1.default.createElement(FontAwesome_1.default, { name: "sort", size: 20, color: "#757575" }))));
    }
}
exports.default = FilterSort;
const styles = react_native_1.StyleSheet.create({
    icons: {
        flex: 1,
        flexDirection: 'row'
    },
    filter: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    sort: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    iconText: {
        color: '#757575'
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9jb21tb24vTGVmdEhlYWRlci9GaWx0ZXJTb3J0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBeUM7QUFDekMsK0NBQXdFO0FBQ3hFLHdGQUF5RDtBQUV6RCxnQkFBZ0MsU0FBUSxpQkFBUztJQUMvQyxNQUFNO1FBQ0osT0FBTyxDQUNMLDhCQUFDLG1CQUFJLElBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ3ZCLDhCQUFDLCtCQUFnQixJQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTTtnQkFDcEMsOEJBQUMsbUJBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFFBQVEsYUFBZTtnQkFDM0MsOEJBQUMscUJBQUksSUFBQyxJQUFJLEVBQUMsUUFBUSxFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFDLFNBQVMsR0FBRyxDQUMvQjtZQUNuQiw4QkFBQywrQkFBZ0IsSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUk7Z0JBQ2xDLDhCQUFDLG1CQUFJLElBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxRQUFRLFdBQWE7Z0JBQ3pDLDhCQUFDLHFCQUFJLElBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBQyxTQUFTLEdBQUcsQ0FDN0IsQ0FDZCxDQUNSLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUFmRCw2QkFlQztBQUVELE1BQU0sTUFBTSxHQUFHLHlCQUFVLENBQUMsTUFBTSxDQUFDO0lBQy9CLEtBQUssRUFBRTtRQUNMLElBQUksRUFBRSxDQUFDO1FBQ1AsYUFBYSxFQUFFLEtBQUs7S0FDckI7SUFDRCxNQUFNLEVBQUU7UUFDTixJQUFJLEVBQUUsQ0FBQztRQUNQLGFBQWEsRUFBRSxLQUFLO1FBQ3BCLGNBQWMsRUFBRSxjQUFjO0tBQy9CO0lBQ0QsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLENBQUM7UUFDUCxhQUFhLEVBQUUsS0FBSztRQUNwQixjQUFjLEVBQUUsY0FBYztLQUMvQjtJQUNELFFBQVEsRUFBRTtRQUNSLEtBQUssRUFBRSxTQUFTO0tBQ2pCO0NBQ0YsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbzYwL0Rlc2t0b3AvV29ya0ZpbGVzL1dvcmtsaW5rRGVtby9zcmMvUmVhY3QvY29tbW9uL0xlZnRIZWFkZXIvRmlsdGVyU29ydC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFN0eWxlU2hlZXQsIFRleHQsIFZpZXcsIFRvdWNoYWJsZU9wYWNpdHkgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuaW1wb3J0IEljb24gZnJvbSAncmVhY3QtbmF0aXZlLXZlY3Rvci1pY29ucy9Gb250QXdlc29tZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlclNvcnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuaWNvbnN9PlxuICAgICAgICA8VG91Y2hhYmxlT3BhY2l0eSBzdHlsZT17c3R5bGVzLmZpbHRlcn0+XG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5pY29uVGV4dH0+RmlsdGVyPC9UZXh0PlxuICAgICAgICAgIDxJY29uIG5hbWU9XCJmaWx0ZXJcIiBzaXplPXsyMH0gY29sb3I9XCIjNzU3NTc1XCIgLz5cbiAgICAgICAgPC9Ub3VjaGFibGVPcGFjaXR5PlxuICAgICAgICA8VG91Y2hhYmxlT3BhY2l0eSBzdHlsZT17c3R5bGVzLnNvcnR9PlxuICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuaWNvblRleHR9PlNvcnQ8L1RleHQ+XG4gICAgICAgICAgPEljb24gbmFtZT1cInNvcnRcIiBzaXplPXsyMH0gY29sb3I9XCIjNzU3NTc1XCIgLz5cbiAgICAgICAgPC9Ub3VjaGFibGVPcGFjaXR5PlxuICAgICAgPC9WaWV3PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICBpY29uczoge1xuICAgIGZsZXg6IDEsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdydcbiAgfSxcbiAgZmlsdGVyOiB7XG4gICAgZmxleDogMSxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWV2ZW5seSdcbiAgfSxcbiAgc29ydDoge1xuICAgIGZsZXg6IDEsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1ldmVubHknXG4gIH0sXG4gIGljb25UZXh0OiB7XG4gICAgY29sb3I6ICcjNzU3NTc1J1xuICB9XG59KTtcbiJdLCJ2ZXJzaW9uIjozfQ==