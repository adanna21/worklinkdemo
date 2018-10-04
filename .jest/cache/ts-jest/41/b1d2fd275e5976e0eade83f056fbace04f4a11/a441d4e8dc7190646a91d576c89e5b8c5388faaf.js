"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const redux_mock_store_1 = __importDefault(require("redux-mock-store"));
const react_test_renderer_1 = __importDefault(require("react-test-renderer"));
// imported as an unconnected component!
const SupervisorQueueScreen_1 = __importDefault(require("../SupervisorQueueScreen"));
// const middlewares = []; // you can mock any middlewares here if necessary
const mockStore = redux_mock_store_1.default();
const initialState = {
    teamMembers: [],
    error: ''
};
// describe('Testing SupervisorQueueScreen', () => {
//   it('renders as expected', () => {
//     const wrapper = shallow(<SupervisorQueueScreen  />, {
//       context: { store: mockStore(initialState) }
//     });
//     expect(wrapper.dive()).toMatchSnapshot();
//   });
// });
//jest.mock('react-navigation', ({withNavigation: (component: SupervisorQueueScreen) => component}));
// describe('SupervisorQueueScreen rendering', () => {
//   // const container = shallow(<SupervisorQueueScreen />);
//   // it('should render a <DragContainer/>', () => {
//   //   expect(container).toMatchSnapshot();
//   // });
//   it('renders correctly', () => {
//     //   const tree = renderer.create(<SupervisorQueueScreen />).toJSON();
//     //   expect(tree).toMatchSnapshot();
//     const navigation = {
//       navigate: jest.fn(),
//       dispatch: jest.fn(),
//       state: {},
//       goBack: jest.fn(),
//       dismiss: jest.fn(),
//       openDrawer: jest.fn(),
//       closeDrawer: jest.fn(),
//       toggleDrawer: jest.fn(),
//       getParam: jest.fn(),
//       setParams: jest.fn(),
//       addListener: jest.fn(),
//       push: jest.fn(),
//       replace: jest.fn(),
//       pop: jest.fn(),
//       popToTop: jest.fn(),
//       isFocused: jest.fn()
//     };
//     const wrapper = shallow(
//       <SupervisorQueueScreen
//         //teamMembers={[]}
//         //error={''}
//         navigation={navigation}
//         // {...props}
//       />
//     );
//     const component = wrapper.dive();
//     expect(toJson(wrapper)).toMatchSnapshot();
//   });
// });
test('renders correctly', () => {
    const navigation = {
        navigate: jest.fn(),
        dispatch: jest.fn(),
        state: {},
        goBack: jest.fn(),
        dismiss: jest.fn(),
        openDrawer: jest.fn(),
        closeDrawer: jest.fn(),
        toggleDrawer: jest.fn(),
        getParam: jest.fn(),
        setParams: jest.fn(),
        addListener: jest.fn(),
        push: jest.fn(),
        replace: jest.fn(),
        pop: jest.fn(),
        popToTop: jest.fn(),
        isFocused: jest.fn()
    };
    const tree = react_test_renderer_1.default
        .create(react_1.default.createElement(SupervisorQueueScreen_1.default, { navigation: navigation }))
        .toJSON();
    expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9zY3JlZW5zL19fdGVzdHNfXy9zdXBlcnZpc29yLXF1ZXF1ZS10ZXN0cy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxrREFBMEI7QUFDMUIsd0VBQThDO0FBRzlDLDhFQUEyQztBQUczQyx3Q0FBd0M7QUFDeEMscUZBQTZEO0FBRTdELDRFQUE0RTtBQUM1RSxNQUFNLFNBQVMsR0FBRywwQkFBYyxFQUFFLENBQUM7QUFFbkMsTUFBTSxZQUFZLEdBQUc7SUFDbkIsV0FBVyxFQUFFLEVBQUU7SUFDZixLQUFLLEVBQUUsRUFBRTtDQUNWLENBQUM7QUFFRixvREFBb0Q7QUFDcEQsc0NBQXNDO0FBQ3RDLDREQUE0RDtBQUM1RCxvREFBb0Q7QUFDcEQsVUFBVTtBQUNWLGdEQUFnRDtBQUNoRCxRQUFRO0FBQ1IsTUFBTTtBQUNOLHFHQUFxRztBQUVyRyxzREFBc0Q7QUFDdEQsNkRBQTZEO0FBQzdELHNEQUFzRDtBQUN0RCw4Q0FBOEM7QUFDOUMsV0FBVztBQUNYLG9DQUFvQztBQUNwQyw2RUFBNkU7QUFDN0UsMkNBQTJDO0FBRTNDLDJCQUEyQjtBQUMzQiw2QkFBNkI7QUFDN0IsNkJBQTZCO0FBQzdCLG1CQUFtQjtBQUNuQiwyQkFBMkI7QUFDM0IsNEJBQTRCO0FBQzVCLCtCQUErQjtBQUMvQixnQ0FBZ0M7QUFDaEMsaUNBQWlDO0FBQ2pDLDZCQUE2QjtBQUM3Qiw4QkFBOEI7QUFDOUIsZ0NBQWdDO0FBQ2hDLHlCQUF5QjtBQUN6Qiw0QkFBNEI7QUFDNUIsd0JBQXdCO0FBQ3hCLDZCQUE2QjtBQUM3Qiw2QkFBNkI7QUFDN0IsU0FBUztBQUVULCtCQUErQjtBQUMvQiwrQkFBK0I7QUFDL0IsNkJBQTZCO0FBQzdCLHVCQUF1QjtBQUN2QixrQ0FBa0M7QUFDbEMsd0JBQXdCO0FBQ3hCLFdBQVc7QUFDWCxTQUFTO0FBQ1Qsd0NBQXdDO0FBQ3hDLGlEQUFpRDtBQUNqRCxRQUFRO0FBQ1IsTUFBTTtBQUVOLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLEVBQUU7SUFDN0IsTUFBTSxVQUFVLEdBQUc7UUFDakIsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7UUFDbkIsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7UUFDbkIsS0FBSyxFQUFFLEVBQUU7UUFDVCxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUNqQixPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUNsQixVQUFVLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUNyQixXQUFXLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUN0QixZQUFZLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUN2QixRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUNuQixTQUFTLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUNwQixXQUFXLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUN0QixJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUNmLE9BQU8sRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1FBQ2xCLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1FBQ2QsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7UUFDbkIsU0FBUyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7S0FDckIsQ0FBQztJQUNGLE1BQU0sSUFBSSxHQUFHLDZCQUFRO1NBQ2xCLE1BQU0sQ0FBQyw4QkFBQywrQkFBcUIsSUFBQyxVQUFVLEVBQUUsVUFBVSxHQUFJLENBQUM7U0FDekQsTUFBTSxFQUFFLENBQUM7SUFDWixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7QUFDakMsQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9zY3JlZW5zL19fdGVzdHNfXy9zdXBlcnZpc29yLXF1ZXF1ZS10ZXN0cy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2hhbGxvdyB9IGZyb20gJ2VuenltZSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJ3JlZHV4LW1vY2stc3RvcmUnO1xuaW1wb3J0IHRvSnNvbiBmcm9tICdlbnp5bWUtdG8tanNvbic7XG5pbXBvcnQge30gZnJvbSAndHMtamVzdCc7XG5pbXBvcnQgcmVuZGVyZXIgZnJvbSAncmVhY3QtdGVzdC1yZW5kZXJlcic7XG5pbXBvcnQgUHJvcHMgZnJvbSAnLi4vU3VwZXJ2aXNvclF1ZXVlU2NyZWVuJztcblxuLy8gaW1wb3J0ZWQgYXMgYW4gdW5jb25uZWN0ZWQgY29tcG9uZW50IVxuaW1wb3J0IFN1cGVydmlzb3JRdWV1ZVNjcmVlbiBmcm9tICcuLi9TdXBlcnZpc29yUXVldWVTY3JlZW4nO1xuXG4vLyBjb25zdCBtaWRkbGV3YXJlcyA9IFtdOyAvLyB5b3UgY2FuIG1vY2sgYW55IG1pZGRsZXdhcmVzIGhlcmUgaWYgbmVjZXNzYXJ5XG5jb25zdCBtb2NrU3RvcmUgPSBjb25maWd1cmVTdG9yZSgpO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHRlYW1NZW1iZXJzOiBbXSxcbiAgZXJyb3I6ICcnXG59O1xuXG4vLyBkZXNjcmliZSgnVGVzdGluZyBTdXBlcnZpc29yUXVldWVTY3JlZW4nLCAoKSA9PiB7XG4vLyAgIGl0KCdyZW5kZXJzIGFzIGV4cGVjdGVkJywgKCkgPT4ge1xuLy8gICAgIGNvbnN0IHdyYXBwZXIgPSBzaGFsbG93KDxTdXBlcnZpc29yUXVldWVTY3JlZW4gIC8+LCB7XG4vLyAgICAgICBjb250ZXh0OiB7IHN0b3JlOiBtb2NrU3RvcmUoaW5pdGlhbFN0YXRlKSB9XG4vLyAgICAgfSk7XG4vLyAgICAgZXhwZWN0KHdyYXBwZXIuZGl2ZSgpKS50b01hdGNoU25hcHNob3QoKTtcbi8vICAgfSk7XG4vLyB9KTtcbi8vamVzdC5tb2NrKCdyZWFjdC1uYXZpZ2F0aW9uJywgKHt3aXRoTmF2aWdhdGlvbjogKGNvbXBvbmVudDogU3VwZXJ2aXNvclF1ZXVlU2NyZWVuKSA9PiBjb21wb25lbnR9KSk7XG5cbi8vIGRlc2NyaWJlKCdTdXBlcnZpc29yUXVldWVTY3JlZW4gcmVuZGVyaW5nJywgKCkgPT4ge1xuLy8gICAvLyBjb25zdCBjb250YWluZXIgPSBzaGFsbG93KDxTdXBlcnZpc29yUXVldWVTY3JlZW4gLz4pO1xuLy8gICAvLyBpdCgnc2hvdWxkIHJlbmRlciBhIDxEcmFnQ29udGFpbmVyLz4nLCAoKSA9PiB7XG4vLyAgIC8vICAgZXhwZWN0KGNvbnRhaW5lcikudG9NYXRjaFNuYXBzaG90KCk7XG4vLyAgIC8vIH0pO1xuLy8gICBpdCgncmVuZGVycyBjb3JyZWN0bHknLCAoKSA9PiB7XG4vLyAgICAgLy8gICBjb25zdCB0cmVlID0gcmVuZGVyZXIuY3JlYXRlKDxTdXBlcnZpc29yUXVldWVTY3JlZW4gLz4pLnRvSlNPTigpO1xuLy8gICAgIC8vICAgZXhwZWN0KHRyZWUpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuXG4vLyAgICAgY29uc3QgbmF2aWdhdGlvbiA9IHtcbi8vICAgICAgIG5hdmlnYXRlOiBqZXN0LmZuKCksXG4vLyAgICAgICBkaXNwYXRjaDogamVzdC5mbigpLFxuLy8gICAgICAgc3RhdGU6IHt9LFxuLy8gICAgICAgZ29CYWNrOiBqZXN0LmZuKCksXG4vLyAgICAgICBkaXNtaXNzOiBqZXN0LmZuKCksXG4vLyAgICAgICBvcGVuRHJhd2VyOiBqZXN0LmZuKCksXG4vLyAgICAgICBjbG9zZURyYXdlcjogamVzdC5mbigpLFxuLy8gICAgICAgdG9nZ2xlRHJhd2VyOiBqZXN0LmZuKCksXG4vLyAgICAgICBnZXRQYXJhbTogamVzdC5mbigpLFxuLy8gICAgICAgc2V0UGFyYW1zOiBqZXN0LmZuKCksXG4vLyAgICAgICBhZGRMaXN0ZW5lcjogamVzdC5mbigpLFxuLy8gICAgICAgcHVzaDogamVzdC5mbigpLFxuLy8gICAgICAgcmVwbGFjZTogamVzdC5mbigpLFxuLy8gICAgICAgcG9wOiBqZXN0LmZuKCksXG4vLyAgICAgICBwb3BUb1RvcDogamVzdC5mbigpLFxuLy8gICAgICAgaXNGb2N1c2VkOiBqZXN0LmZuKClcbi8vICAgICB9O1xuXG4vLyAgICAgY29uc3Qgd3JhcHBlciA9IHNoYWxsb3coXG4vLyAgICAgICA8U3VwZXJ2aXNvclF1ZXVlU2NyZWVuXG4vLyAgICAgICAgIC8vdGVhbU1lbWJlcnM9e1tdfVxuLy8gICAgICAgICAvL2Vycm9yPXsnJ31cbi8vICAgICAgICAgbmF2aWdhdGlvbj17bmF2aWdhdGlvbn1cbi8vICAgICAgICAgLy8gey4uLnByb3BzfVxuLy8gICAgICAgLz5cbi8vICAgICApO1xuLy8gICAgIGNvbnN0IGNvbXBvbmVudCA9IHdyYXBwZXIuZGl2ZSgpO1xuLy8gICAgIGV4cGVjdCh0b0pzb24od3JhcHBlcikpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuLy8gICB9KTtcbi8vIH0pO1xuXG50ZXN0KCdyZW5kZXJzIGNvcnJlY3RseScsICgpID0+IHtcbiAgY29uc3QgbmF2aWdhdGlvbiA9IHtcbiAgICBuYXZpZ2F0ZTogamVzdC5mbigpLFxuICAgIGRpc3BhdGNoOiBqZXN0LmZuKCksXG4gICAgc3RhdGU6IHt9LFxuICAgIGdvQmFjazogamVzdC5mbigpLFxuICAgIGRpc21pc3M6IGplc3QuZm4oKSxcbiAgICBvcGVuRHJhd2VyOiBqZXN0LmZuKCksXG4gICAgY2xvc2VEcmF3ZXI6IGplc3QuZm4oKSxcbiAgICB0b2dnbGVEcmF3ZXI6IGplc3QuZm4oKSxcbiAgICBnZXRQYXJhbTogamVzdC5mbigpLFxuICAgIHNldFBhcmFtczogamVzdC5mbigpLFxuICAgIGFkZExpc3RlbmVyOiBqZXN0LmZuKCksXG4gICAgcHVzaDogamVzdC5mbigpLFxuICAgIHJlcGxhY2U6IGplc3QuZm4oKSxcbiAgICBwb3A6IGplc3QuZm4oKSxcbiAgICBwb3BUb1RvcDogamVzdC5mbigpLFxuICAgIGlzRm9jdXNlZDogamVzdC5mbigpXG4gIH07XG4gIGNvbnN0IHRyZWUgPSByZW5kZXJlclxuICAgIC5jcmVhdGUoPFN1cGVydmlzb3JRdWV1ZVNjcmVlbiBuYXZpZ2F0aW9uPXtuYXZpZ2F0aW9ufSAvPilcbiAgICAudG9KU09OKCk7XG4gIGV4cGVjdCh0cmVlKS50b01hdGNoU25hcHNob3QoKTtcbn0pO1xuIl0sInZlcnNpb24iOjN9