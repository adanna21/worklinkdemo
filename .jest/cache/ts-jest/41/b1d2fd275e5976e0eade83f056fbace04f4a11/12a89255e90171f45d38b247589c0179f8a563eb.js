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
const data_1 = require("../../../../data");
const MaterialIcons_1 = __importDefault(require("react-native-vector-icons/MaterialIcons"));
const TeamMember_1 = __importDefault(require("./TeamMember"));
class TeamList extends react_1.Component {
    render() {
        return (react_1.default.createElement(react_native_1.View, { style: styles.container },
            react_1.default.createElement(react_native_1.View, { style: styles.teamSearch },
                react_1.default.createElement(react_native_1.View, { style: styles.searchInput },
                    react_1.default.createElement(react_native_1.TextInput, { style: styles.inputText, placeholder: 'Enter First or Last Name', placeholderTextColor: '#c6cacc', underlineColorAndroid: '#fff', autoCorrect: false }),
                    react_1.default.createElement(MaterialIcons_1.default, { name: "search", size: 18, color: "#BDBDBD" }))),
            react_1.default.createElement(react_native_1.FlatList, { scrollEnabled: this.props.scrollEnabled, style: styles.teamContainer, data: data_1.workOrders, extraData: this.props, renderItem: ({ item }) => (react_1.default.createElement(TeamMember_1.default, { item: item, selectTeamMember: this.props.selectTeamMember, teamArray: this.props.teamArray, addCurrentId: this.props.addCurrentId, currentId: this.props.currentId })), keyExtractor: item => item.id }),
            react_1.default.createElement(react_native_1.View, { style: styles.addGroups },
                react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.addGroupButton },
                    react_1.default.createElement(react_native_1.Text, { style: styles.addGroupText }, "+ Add Groups or People")))));
    }
}
exports.default = TeamList;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1
    },
    teamSearch: {
        flex: 0.1,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: '#c6cacc',
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        height: '100%'
    },
    inputText: {
        width: '80%',
        fontSize: 12
    },
    teamContainer: {
        flex: 2
    },
    addGroups: {
        flex: 1,
        paddingTop: '15%'
    },
    addGroupButton: {
        alignSelf: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#c6cacc',
        height: 45,
        paddingRight: '5%',
        paddingLeft: '5%'
    },
    addGroupText: {
        fontSize: 12
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9jb21wb25lbnRzL1JpZ2h0UGFuZWwvQm9keS9UZWFtTGlzdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQXlDO0FBQ3pDLCtDQU9zQjtBQUN0QiwyQ0FBOEM7QUFDOUMsNEZBQTJEO0FBQzNELDhEQUFzQztBQUV0QyxjQUE4QixTQUFRLGlCQUFtQjtJQUN2RCxNQUFNO1FBQ0osT0FBTyxDQUNMLDhCQUFDLG1CQUFJLElBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLDhCQUFDLG1CQUFJLElBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxVQUFVO2dCQUM1Qiw4QkFBQyxtQkFBSSxJQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsV0FBVztvQkFDN0IsOEJBQUMsd0JBQVMsSUFDUixLQUFLLEVBQUUsTUFBTSxDQUFDLFNBQVMsRUFDdkIsV0FBVyxFQUFFLDBCQUEwQixFQUN2QyxvQkFBb0IsRUFBRSxTQUFTLEVBQy9CLHFCQUFxQixFQUFFLE1BQU0sRUFDN0IsV0FBVyxFQUFFLEtBQUssR0FDbEI7b0JBQ0YsOEJBQUMsdUJBQUksSUFBQyxJQUFJLEVBQUMsUUFBUSxFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFDLFNBQVMsR0FBRyxDQUMzQyxDQUNGO1lBQ1AsOEJBQUMsdUJBQVEsSUFDUCxhQUFhLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQ3ZDLEtBQUssRUFBRSxNQUFNLENBQUMsYUFBYSxFQUMzQixJQUFJLEVBQUUsaUJBQVUsRUFDaEIsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQ3JCLFVBQVUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQ3hCLDhCQUFDLG9CQUFVLElBQ1QsSUFBSSxFQUFFLElBQUksRUFDVixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUM3QyxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQy9CLFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFDckMsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUMvQixDQUNILEVBQ0QsWUFBWSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FDN0I7WUFDRiw4QkFBQyxtQkFBSSxJQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsU0FBUztnQkFDM0IsOEJBQUMsK0JBQWdCLElBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxjQUFjO29CQUM1Qyw4QkFBQyxtQkFBSSxJQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsWUFBWSw2QkFBK0IsQ0FDOUMsQ0FDZCxDQUNGLENBQ1IsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQXhDRCwyQkF3Q0M7QUFFRCxNQUFNLE1BQU0sR0FBRyx5QkFBVSxDQUFDLE1BQU0sQ0FBQztJQUMvQixTQUFTLEVBQUU7UUFDVCxJQUFJLEVBQUUsQ0FBQztLQUNSO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsSUFBSSxFQUFFLEdBQUc7UUFDVCxpQkFBaUIsRUFBRSxDQUFDO1FBQ3BCLFdBQVcsRUFBRSxPQUFPO1FBQ3BCLFdBQVcsRUFBRSxTQUFTO1FBQ3RCLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLGNBQWMsRUFBRSxRQUFRO0tBQ3pCO0lBQ0QsV0FBVyxFQUFFO1FBQ1gsYUFBYSxFQUFFLEtBQUs7UUFDcEIsVUFBVSxFQUFFLFFBQVE7UUFDcEIsY0FBYyxFQUFFLFFBQVE7UUFDeEIsWUFBWSxFQUFFLENBQUM7UUFDZixNQUFNLEVBQUUsTUFBTTtLQUNmO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsS0FBSyxFQUFFLEtBQUs7UUFDWixRQUFRLEVBQUUsRUFBRTtLQUNiO0lBQ0QsYUFBYSxFQUFFO1FBQ2IsSUFBSSxFQUFFLENBQUM7S0FDUjtJQUNELFNBQVMsRUFBRTtRQUNULElBQUksRUFBRSxDQUFDO1FBQ1AsVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRCxjQUFjLEVBQUU7UUFDZCxTQUFTLEVBQUUsUUFBUTtRQUNuQixjQUFjLEVBQUUsUUFBUTtRQUN4QixXQUFXLEVBQUUsQ0FBQztRQUNkLFdBQVcsRUFBRSxPQUFPO1FBQ3BCLFdBQVcsRUFBRSxTQUFTO1FBQ3RCLE1BQU0sRUFBRSxFQUFFO1FBQ1YsWUFBWSxFQUFFLElBQUk7UUFDbEIsV0FBVyxFQUFFLElBQUk7S0FDbEI7SUFDRCxZQUFZLEVBQUU7UUFDWixRQUFRLEVBQUUsRUFBRTtLQUNiO0NBQ0YsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbzYwL0Rlc2t0b3AvV29ya0ZpbGVzL1dvcmtsaW5rRGVtby9zcmMvUmVhY3QvY29tcG9uZW50cy9SaWdodFBhbmVsL0JvZHkvVGVhbUxpc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBTdHlsZVNoZWV0LFxuICBUZXh0LFxuICBWaWV3LFxuICBUb3VjaGFibGVPcGFjaXR5LFxuICBGbGF0TGlzdCxcbiAgVGV4dElucHV0XG59IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5pbXBvcnQgeyB3b3JrT3JkZXJzIH0gZnJvbSAnLi4vLi4vLi4vLi4vZGF0YSc7XG5pbXBvcnQgSWNvbiBmcm9tICdyZWFjdC1uYXRpdmUtdmVjdG9yLWljb25zL01hdGVyaWFsSWNvbnMnO1xuaW1wb3J0IFRlYW1NZW1iZXIgZnJvbSAnLi9UZWFtTWVtYmVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVhbUxpc3QgZXh0ZW5kcyBDb21wb25lbnQ8YW55LCBhbnk+IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMudGVhbVNlYXJjaH0+XG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5zZWFyY2hJbnB1dH0+XG4gICAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuaW5wdXRUZXh0fVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17J0VudGVyIEZpcnN0IG9yIExhc3QgTmFtZSd9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyVGV4dENvbG9yPXsnI2M2Y2FjYyd9XG4gICAgICAgICAgICAgIHVuZGVybGluZUNvbG9yQW5kcm9pZD17JyNmZmYnfVxuICAgICAgICAgICAgICBhdXRvQ29ycmVjdD17ZmFsc2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEljb24gbmFtZT1cInNlYXJjaFwiIHNpemU9ezE4fSBjb2xvcj1cIiNCREJEQkRcIiAvPlxuICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgPC9WaWV3PlxuICAgICAgICA8RmxhdExpc3RcbiAgICAgICAgICBzY3JvbGxFbmFibGVkPXt0aGlzLnByb3BzLnNjcm9sbEVuYWJsZWR9XG4gICAgICAgICAgc3R5bGU9e3N0eWxlcy50ZWFtQ29udGFpbmVyfVxuICAgICAgICAgIGRhdGE9e3dvcmtPcmRlcnN9XG4gICAgICAgICAgZXh0cmFEYXRhPXt0aGlzLnByb3BzfVxuICAgICAgICAgIHJlbmRlckl0ZW09eyh7IGl0ZW0gfSkgPT4gKFxuICAgICAgICAgICAgPFRlYW1NZW1iZXJcbiAgICAgICAgICAgICAgaXRlbT17aXRlbX1cbiAgICAgICAgICAgICAgc2VsZWN0VGVhbU1lbWJlcj17dGhpcy5wcm9wcy5zZWxlY3RUZWFtTWVtYmVyfVxuICAgICAgICAgICAgICB0ZWFtQXJyYXk9e3RoaXMucHJvcHMudGVhbUFycmF5fVxuICAgICAgICAgICAgICBhZGRDdXJyZW50SWQ9e3RoaXMucHJvcHMuYWRkQ3VycmVudElkfVxuICAgICAgICAgICAgICBjdXJyZW50SWQ9e3RoaXMucHJvcHMuY3VycmVudElkfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIGtleUV4dHJhY3Rvcj17aXRlbSA9PiBpdGVtLmlkfVxuICAgICAgICAvPlxuICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmFkZEdyb3Vwc30+XG4gICAgICAgICAgPFRvdWNoYWJsZU9wYWNpdHkgc3R5bGU9e3N0eWxlcy5hZGRHcm91cEJ1dHRvbn0+XG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLmFkZEdyb3VwVGV4dH0+KyBBZGQgR3JvdXBzIG9yIFBlb3BsZTwvVGV4dD5cbiAgICAgICAgICA8L1RvdWNoYWJsZU9wYWNpdHk+XG4gICAgICAgIDwvVmlldz5cbiAgICAgIDwvVmlldz5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgY29udGFpbmVyOiB7XG4gICAgZmxleDogMVxuICB9LFxuICB0ZWFtU2VhcmNoOiB7XG4gICAgZmxleDogMC4xLFxuICAgIGJvcmRlckJvdHRvbVdpZHRoOiAxLFxuICAgIGJvcmRlclN0eWxlOiAnc29saWQnLFxuICAgIGJvcmRlckNvbG9yOiAnI2M2Y2FjYycsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInXG4gIH0sXG4gIHNlYXJjaElucHV0OiB7XG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGJvcmRlclJhZGl1czogMyxcbiAgICBoZWlnaHQ6ICcxMDAlJ1xuICB9LFxuICBpbnB1dFRleHQ6IHtcbiAgICB3aWR0aDogJzgwJScsXG4gICAgZm9udFNpemU6IDEyXG4gIH0sXG4gIHRlYW1Db250YWluZXI6IHtcbiAgICBmbGV4OiAyXG4gIH0sXG4gIGFkZEdyb3Vwczoge1xuICAgIGZsZXg6IDEsXG4gICAgcGFkZGluZ1RvcDogJzE1JSdcbiAgfSxcbiAgYWRkR3JvdXBCdXR0b246IHtcbiAgICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBib3JkZXJXaWR0aDogMSxcbiAgICBib3JkZXJTdHlsZTogJ3NvbGlkJyxcbiAgICBib3JkZXJDb2xvcjogJyNjNmNhY2MnLFxuICAgIGhlaWdodDogNDUsXG4gICAgcGFkZGluZ1JpZ2h0OiAnNSUnLFxuICAgIHBhZGRpbmdMZWZ0OiAnNSUnXG4gIH0sXG4gIGFkZEdyb3VwVGV4dDoge1xuICAgIGZvbnRTaXplOiAxMlxuICB9XG59KTtcbiJdLCJ2ZXJzaW9uIjozfQ==