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
const react_native_drag_drop_1 = require("../../../utils/react-native-drag-drop");
const MaterialIcons_1 = __importDefault(require("react-native-vector-icons/MaterialIcons"));
class TeamMember extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {
            iconName: 'account-circle',
            iconColor: '#5eb8ec'
        };
        // change icon when teaMember selected or unselected
        this.changeIcon = (id) => {
            const memberIdPresent = this.props.teamArray.some((member) => member.id === id);
            memberIdPresent
                ? this.setState({
                    iconName: 'check-circle',
                    iconColor: '#c6cacc'
                })
                : this.setState({
                    iconName: 'account-circle',
                    iconColor: '#5eb8ec'
                });
        };
    }
    render() {
        const { item, selectTeamMember, teamArray, addCurrentId, currentId } = this.props;
        return (react_1.default.createElement(react_native_drag_drop_1.Draggable, { style: [styles.teamMember], itemId: item.id, draggableSelectTeamMember: selectTeamMember, draggableChangeIcon: this.changeIcon, teamArray: teamArray, addCurrentId: addCurrentId },
            react_1.default.createElement(react_native_1.View, { style: styles.user },
                react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: () => {
                        selectTeamMember(item.id);
                        // use setState callback to make component run changeIcon synchronously
                        this.setState({}, () => {
                            this.changeIcon(item.id);
                        });
                    } },
                    react_1.default.createElement(MaterialIcons_1.default, { name: `${this.state.iconName}`, size: 30, color: `${this.state.iconColor}` })),
                react_1.default.createElement(react_native_1.Text, { style: styles.name }, item.client.name)),
            react_1.default.createElement(react_native_1.Text, { style: styles.countText }, "5")));
    }
}
exports.default = TeamMember;
const styles = react_native_1.StyleSheet.create({
    teamMember: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: '#c6cacc',
        paddingTop: '2%',
        paddingBottom: '10%'
    },
    user: {
        flex: 4,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: '5%'
    },
    name: {
        marginLeft: '3%'
    },
    countText: {
        flex: 0.5
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9jb21wb25lbnRzL1JpZ2h0UGFuZWwvQm9keS9UZWFtTWVtYmVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBeUM7QUFDekMsK0NBQXdFO0FBQ3hFLGtGQUFrRTtBQUNsRSw0RkFBMkQ7QUFHM0QsZ0JBQWdDLFNBQVEsaUJBQW1CO0lBQTNEOztRQUNFLFVBQUssR0FBRztZQUNOLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsU0FBUyxFQUFFLFNBQVM7U0FDckIsQ0FBQztRQUNGLG9EQUFvRDtRQUNwRCxlQUFVLEdBQUcsQ0FBQyxFQUFVLEVBQUUsRUFBRTtZQUMxQixNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQy9DLENBQUMsTUFBbUIsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQzFDLENBQUM7WUFDRixlQUFlO2dCQUNiLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO29CQUNaLFFBQVEsRUFBRSxjQUFjO29CQUN4QixTQUFTLEVBQUUsU0FBUztpQkFDckIsQ0FBQztnQkFDSixDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztvQkFDWixRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixTQUFTLEVBQUUsU0FBUztpQkFDckIsQ0FBQyxDQUFDO1FBQ1QsQ0FBQyxDQUFDO0lBd0NKLENBQUM7SUF2Q0MsTUFBTTtRQUNKLE1BQU0sRUFDSixJQUFJLEVBQ0osZ0JBQWdCLEVBQ2hCLFNBQVMsRUFDVCxZQUFZLEVBQ1osU0FBUyxFQUNWLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNmLE9BQU8sQ0FDTCw4QkFBQyxrQ0FBUyxJQUNSLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFDMUIsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQ2YseUJBQXlCLEVBQUUsZ0JBQWdCLEVBQzNDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxVQUFVLEVBQ3BDLFNBQVMsRUFBRSxTQUFTLEVBQ3BCLFlBQVksRUFBRSxZQUFZO1lBRTFCLDhCQUFDLG1CQUFJLElBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJO2dCQUN0Qiw4QkFBQywrQkFBZ0IsSUFDZixPQUFPLEVBQUUsR0FBRyxFQUFFO3dCQUNaLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDMUIsdUVBQXVFO3dCQUN2RSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUU7NEJBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUMzQixDQUFDLENBQUMsQ0FBQztvQkFDTCxDQUFDO29CQUVELDhCQUFDLHVCQUFJLElBQ0gsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFDOUIsSUFBSSxFQUFFLEVBQUUsRUFDUixLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxHQUNoQyxDQUNlO2dCQUNuQiw4QkFBQyxtQkFBSSxJQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSSxJQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFRLENBQzlDO1lBQ1AsOEJBQUMsbUJBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFNBQVMsUUFBVSxDQUM3QixDQUNiLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUEzREQsNkJBMkRDO0FBRUQsTUFBTSxNQUFNLEdBQUcseUJBQVUsQ0FBQyxNQUFNLENBQUM7SUFDL0IsVUFBVSxFQUFFO1FBQ1YsVUFBVSxFQUFFLFFBQVE7UUFDcEIsY0FBYyxFQUFFLFFBQVE7UUFDeEIsYUFBYSxFQUFFLEtBQUs7UUFDcEIsaUJBQWlCLEVBQUUsQ0FBQztRQUNwQixXQUFXLEVBQUUsT0FBTztRQUNwQixXQUFXLEVBQUUsU0FBUztRQUN0QixVQUFVLEVBQUUsSUFBSTtRQUNoQixhQUFhLEVBQUUsS0FBSztLQUNyQjtJQUNELElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxDQUFDO1FBQ1AsYUFBYSxFQUFFLEtBQUs7UUFDcEIsVUFBVSxFQUFFLFFBQVE7UUFDcEIsV0FBVyxFQUFFLElBQUk7S0FDbEI7SUFDRCxJQUFJLEVBQUU7UUFDSixVQUFVLEVBQUUsSUFBSTtLQUNqQjtJQUNELFNBQVMsRUFBRTtRQUNULElBQUksRUFBRSxHQUFHO0tBQ1Y7Q0FDRixDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9jb21wb25lbnRzL1JpZ2h0UGFuZWwvQm9keS9UZWFtTWVtYmVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3R5bGVTaGVldCwgVGV4dCwgVmlldywgVG91Y2hhYmxlT3BhY2l0eSB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5pbXBvcnQgeyBEcmFnZ2FibGUgfSBmcm9tICcuLi8uLi8uLi91dGlscy9yZWFjdC1uYXRpdmUtZHJhZy1kcm9wJztcbmltcG9ydCBJY29uIGZyb20gJ3JlYWN0LW5hdGl2ZS12ZWN0b3ItaWNvbnMvTWF0ZXJpYWxJY29ucyc7XG5pbXBvcnQgeyBJVGVhbU1lbWJlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NyYy9SZWR1eC9kcmFnLWFuZC1kcm9wL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVhbU1lbWJlciBleHRlbmRzIENvbXBvbmVudDxhbnksIGFueT4ge1xuICBzdGF0ZSA9IHtcbiAgICBpY29uTmFtZTogJ2FjY291bnQtY2lyY2xlJyxcbiAgICBpY29uQ29sb3I6ICcjNWViOGVjJ1xuICB9O1xuICAvLyBjaGFuZ2UgaWNvbiB3aGVuIHRlYU1lbWJlciBzZWxlY3RlZCBvciB1bnNlbGVjdGVkXG4gIGNoYW5nZUljb24gPSAoaWQ6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IG1lbWJlcklkUHJlc2VudCA9IHRoaXMucHJvcHMudGVhbUFycmF5LnNvbWUoXG4gICAgICAobWVtYmVyOiBJVGVhbU1lbWJlcikgPT4gbWVtYmVyLmlkID09PSBpZFxuICAgICk7XG4gICAgbWVtYmVySWRQcmVzZW50XG4gICAgICA/IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGljb25OYW1lOiAnY2hlY2stY2lyY2xlJyxcbiAgICAgICAgICBpY29uQ29sb3I6ICcjYzZjYWNjJ1xuICAgICAgICB9KVxuICAgICAgOiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBpY29uTmFtZTogJ2FjY291bnQtY2lyY2xlJyxcbiAgICAgICAgICBpY29uQ29sb3I6ICcjNWViOGVjJ1xuICAgICAgICB9KTtcbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGl0ZW0sXG4gICAgICBzZWxlY3RUZWFtTWVtYmVyLFxuICAgICAgdGVhbUFycmF5LFxuICAgICAgYWRkQ3VycmVudElkLFxuICAgICAgY3VycmVudElkXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxEcmFnZ2FibGVcbiAgICAgICAgc3R5bGU9e1tzdHlsZXMudGVhbU1lbWJlcl19XG4gICAgICAgIGl0ZW1JZD17aXRlbS5pZH1cbiAgICAgICAgZHJhZ2dhYmxlU2VsZWN0VGVhbU1lbWJlcj17c2VsZWN0VGVhbU1lbWJlcn1cbiAgICAgICAgZHJhZ2dhYmxlQ2hhbmdlSWNvbj17dGhpcy5jaGFuZ2VJY29ufVxuICAgICAgICB0ZWFtQXJyYXk9e3RlYW1BcnJheX1cbiAgICAgICAgYWRkQ3VycmVudElkPXthZGRDdXJyZW50SWR9XG4gICAgICA+XG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMudXNlcn0+XG4gICAgICAgICAgPFRvdWNoYWJsZU9wYWNpdHlcbiAgICAgICAgICAgIG9uUHJlc3M9eygpID0+IHtcbiAgICAgICAgICAgICAgc2VsZWN0VGVhbU1lbWJlcihpdGVtLmlkKTtcbiAgICAgICAgICAgICAgLy8gdXNlIHNldFN0YXRlIGNhbGxiYWNrIHRvIG1ha2UgY29tcG9uZW50IHJ1biBjaGFuZ2VJY29uIHN5bmNocm9ub3VzbHlcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7fSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlSWNvbihpdGVtLmlkKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgIG5hbWU9e2Ake3RoaXMuc3RhdGUuaWNvbk5hbWV9YH1cbiAgICAgICAgICAgICAgc2l6ZT17MzB9XG4gICAgICAgICAgICAgIGNvbG9yPXtgJHt0aGlzLnN0YXRlLmljb25Db2xvcn1gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1RvdWNoYWJsZU9wYWNpdHk+XG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5uYW1lfT57aXRlbS5jbGllbnQubmFtZX08L1RleHQ+XG4gICAgICAgIDwvVmlldz5cbiAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5jb3VudFRleHR9PjU8L1RleHQ+XG4gICAgICA8L0RyYWdnYWJsZT5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgdGVhbU1lbWJlcjoge1xuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBib3JkZXJCb3R0b21XaWR0aDogMSxcbiAgICBib3JkZXJTdHlsZTogJ3NvbGlkJyxcbiAgICBib3JkZXJDb2xvcjogJyNjNmNhY2MnLFxuICAgIHBhZGRpbmdUb3A6ICcyJScsXG4gICAgcGFkZGluZ0JvdHRvbTogJzEwJSdcbiAgfSxcbiAgdXNlcjoge1xuICAgIGZsZXg6IDQsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgcGFkZGluZ0xlZnQ6ICc1JSdcbiAgfSxcbiAgbmFtZToge1xuICAgIG1hcmdpbkxlZnQ6ICczJSdcbiAgfSxcbiAgY291bnRUZXh0OiB7XG4gICAgZmxleDogMC41XG4gIH1cbn0pO1xuIl0sInZlcnNpb24iOjN9