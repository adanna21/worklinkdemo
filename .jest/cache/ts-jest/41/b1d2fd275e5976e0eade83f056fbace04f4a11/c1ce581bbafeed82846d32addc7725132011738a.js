"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const enzyme_1 = require("enzyme");
const react_1 = __importDefault(require("react"));
const redux_mock_store_1 = __importDefault(require("redux-mock-store"));
// imported as an unconnected component!
const SupervisorQueueScreen_1 = __importDefault(require("../SupervisorQueueScreen"));
const enzyme_adapter_react_16_1 = __importDefault(require("enzyme-adapter-react-16"));
enzyme_1.configure({ adapter: new enzyme_adapter_react_16_1.default() });
// const middlewares = []; // you can mock any middlewares here if necessary
const mockStore = redux_mock_store_1.default();
// describe('Testing SupervisorQueueScreen', () => {
//   it('renders as expected', () => {
//     const wrapper = shallow(<SupervisorQueueScreen  />, {
//       context: { store: mockStore(initialState) }
//     });
//     expect(wrapper.dive()).toMatchSnapshot();
//   });
// });
//jest.mock('react-navigation', ({withNavigation: (component: SupervisorQueueScreen) => component}));
describe('SupervisorQueueScreen', () => {
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
    // let wrapper: any, store;
    // beforeEach(() => {
    //   const initialState = { teamMembers: [], error: '' };
    //   store = mockStore(initialState);
    //   wrapper = shallow(
    //     <SupervisorQueueScreen
    //       // teamMembers={initialState.teamMembers}
    //       // error={''}
    //       navigation={navigation}
    //       // store={mockStore}
    //       // {...props}
    //     />,
    //     { context: { store } }
    //   );
    // });
    // it('renders correctly', () => {
    //   // const component = wrapper.dive();
    //   expect(toJson(wrapper)).toMatchSnapshot();
    // });
    let wrapper, store;
    beforeEach(() => {
        const initialState = { teamMembers: [], error: '' };
        store = mockStore(initialState);
        // Shallow render the container passing in the mock store
        wrapper = enzyme_1.shallow(react_1.default.createElement(SupervisorQueueScreen_1.default, { navigation: navigation }), {
            context: { store }
        });
    });
    it('renders correctly', () => {
        const component = wrapper.dive();
        expect(component).toMatchSnapshot();
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9zY3JlZW5zL19fdGVzdHNfXy9zdXBlcnZpc29yLXF1ZXF1ZS10ZXN0cy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBNEM7QUFDNUMsa0RBQTBCO0FBQzFCLHdFQUE4QztBQUs5Qyx3Q0FBd0M7QUFDeEMscUZBQTZEO0FBQzdELHNGQUE4QztBQUU5QyxrQkFBUyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksaUNBQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUV0Qyw0RUFBNEU7QUFDNUUsTUFBTSxTQUFTLEdBQUcsMEJBQWMsRUFBRSxDQUFDO0FBRW5DLG9EQUFvRDtBQUNwRCxzQ0FBc0M7QUFDdEMsNERBQTREO0FBQzVELG9EQUFvRDtBQUNwRCxVQUFVO0FBQ1YsZ0RBQWdEO0FBQ2hELFFBQVE7QUFDUixNQUFNO0FBQ04scUdBQXFHO0FBQ3JHLFFBQVEsQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLEVBQUU7SUFDckMsTUFBTSxVQUFVLEdBQUc7UUFDakIsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7UUFDbkIsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7UUFDbkIsS0FBSyxFQUFFLEVBQUU7UUFDVCxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUNqQixPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUNsQixVQUFVLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUNyQixXQUFXLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUN0QixZQUFZLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUN2QixRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUNuQixTQUFTLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUNwQixXQUFXLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUN0QixJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUNmLE9BQU8sRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1FBQ2xCLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1FBQ2QsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7UUFDbkIsU0FBUyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7S0FDckIsQ0FBQztJQUVGLDJCQUEyQjtJQUMzQixxQkFBcUI7SUFDckIseURBQXlEO0lBQ3pELHFDQUFxQztJQUNyQyx1QkFBdUI7SUFDdkIsNkJBQTZCO0lBQzdCLGtEQUFrRDtJQUNsRCxzQkFBc0I7SUFDdEIsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3QixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLDZCQUE2QjtJQUM3QixPQUFPO0lBQ1AsTUFBTTtJQUVOLGtDQUFrQztJQUNsQyx5Q0FBeUM7SUFDekMsK0NBQStDO0lBQy9DLE1BQU07SUFDTixJQUFJLE9BQVksRUFBRSxLQUFLLENBQUM7SUFFeEIsVUFBVSxDQUFDLEdBQUcsRUFBRTtRQUNkLE1BQU0sWUFBWSxHQUFHLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDcEQsS0FBSyxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNoQyx5REFBeUQ7UUFDekQsT0FBTyxHQUFHLGdCQUFPLENBQUMsOEJBQUMsK0JBQXFCLElBQUMsVUFBVSxFQUFFLFVBQVUsR0FBSSxFQUFFO1lBQ25FLE9BQU8sRUFBRSxFQUFFLEtBQUssRUFBRTtTQUNuQixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUNILEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLEVBQUU7UUFDM0IsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN0QyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbzYwL0Rlc2t0b3AvV29ya0ZpbGVzL1dvcmtsaW5rRGVtby9zcmMvUmVhY3Qvc2NyZWVucy9fX3Rlc3RzX18vc3VwZXJ2aXNvci1xdWVxdWUtdGVzdHMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNoYWxsb3csIGNvbmZpZ3VyZSB9IGZyb20gJ2VuenltZSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJ3JlZHV4LW1vY2stc3RvcmUnO1xuaW1wb3J0IHRvSnNvbiBmcm9tICdlbnp5bWUtdG8tanNvbic7XG5pbXBvcnQge30gZnJvbSAndHMtamVzdCc7XG5pbXBvcnQgcmVuZGVyZXIgZnJvbSAncmVhY3QtdGVzdC1yZW5kZXJlcic7XG5pbXBvcnQgUHJvcHMgZnJvbSAnLi4vU3VwZXJ2aXNvclF1ZXVlU2NyZWVuJztcbi8vIGltcG9ydGVkIGFzIGFuIHVuY29ubmVjdGVkIGNvbXBvbmVudCFcbmltcG9ydCBTdXBlcnZpc29yUXVldWVTY3JlZW4gZnJvbSAnLi4vU3VwZXJ2aXNvclF1ZXVlU2NyZWVuJztcbmltcG9ydCBBZGFwdGVyIGZyb20gJ2VuenltZS1hZGFwdGVyLXJlYWN0LTE2JztcblxuY29uZmlndXJlKHsgYWRhcHRlcjogbmV3IEFkYXB0ZXIoKSB9KTtcblxuLy8gY29uc3QgbWlkZGxld2FyZXMgPSBbXTsgLy8geW91IGNhbiBtb2NrIGFueSBtaWRkbGV3YXJlcyBoZXJlIGlmIG5lY2Vzc2FyeVxuY29uc3QgbW9ja1N0b3JlID0gY29uZmlndXJlU3RvcmUoKTtcblxuLy8gZGVzY3JpYmUoJ1Rlc3RpbmcgU3VwZXJ2aXNvclF1ZXVlU2NyZWVuJywgKCkgPT4ge1xuLy8gICBpdCgncmVuZGVycyBhcyBleHBlY3RlZCcsICgpID0+IHtcbi8vICAgICBjb25zdCB3cmFwcGVyID0gc2hhbGxvdyg8U3VwZXJ2aXNvclF1ZXVlU2NyZWVuICAvPiwge1xuLy8gICAgICAgY29udGV4dDogeyBzdG9yZTogbW9ja1N0b3JlKGluaXRpYWxTdGF0ZSkgfVxuLy8gICAgIH0pO1xuLy8gICAgIGV4cGVjdCh3cmFwcGVyLmRpdmUoKSkudG9NYXRjaFNuYXBzaG90KCk7XG4vLyAgIH0pO1xuLy8gfSk7XG4vL2plc3QubW9jaygncmVhY3QtbmF2aWdhdGlvbicsICh7d2l0aE5hdmlnYXRpb246IChjb21wb25lbnQ6IFN1cGVydmlzb3JRdWV1ZVNjcmVlbikgPT4gY29tcG9uZW50fSkpO1xuZGVzY3JpYmUoJ1N1cGVydmlzb3JRdWV1ZVNjcmVlbicsICgpID0+IHtcbiAgY29uc3QgbmF2aWdhdGlvbiA9IHtcbiAgICBuYXZpZ2F0ZTogamVzdC5mbigpLFxuICAgIGRpc3BhdGNoOiBqZXN0LmZuKCksXG4gICAgc3RhdGU6IHt9LFxuICAgIGdvQmFjazogamVzdC5mbigpLFxuICAgIGRpc21pc3M6IGplc3QuZm4oKSxcbiAgICBvcGVuRHJhd2VyOiBqZXN0LmZuKCksXG4gICAgY2xvc2VEcmF3ZXI6IGplc3QuZm4oKSxcbiAgICB0b2dnbGVEcmF3ZXI6IGplc3QuZm4oKSxcbiAgICBnZXRQYXJhbTogamVzdC5mbigpLFxuICAgIHNldFBhcmFtczogamVzdC5mbigpLFxuICAgIGFkZExpc3RlbmVyOiBqZXN0LmZuKCksXG4gICAgcHVzaDogamVzdC5mbigpLFxuICAgIHJlcGxhY2U6IGplc3QuZm4oKSxcbiAgICBwb3A6IGplc3QuZm4oKSxcbiAgICBwb3BUb1RvcDogamVzdC5mbigpLFxuICAgIGlzRm9jdXNlZDogamVzdC5mbigpXG4gIH07XG5cbiAgLy8gbGV0IHdyYXBwZXI6IGFueSwgc3RvcmU7XG4gIC8vIGJlZm9yZUVhY2goKCkgPT4ge1xuICAvLyAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHsgdGVhbU1lbWJlcnM6IFtdLCBlcnJvcjogJycgfTtcbiAgLy8gICBzdG9yZSA9IG1vY2tTdG9yZShpbml0aWFsU3RhdGUpO1xuICAvLyAgIHdyYXBwZXIgPSBzaGFsbG93KFxuICAvLyAgICAgPFN1cGVydmlzb3JRdWV1ZVNjcmVlblxuICAvLyAgICAgICAvLyB0ZWFtTWVtYmVycz17aW5pdGlhbFN0YXRlLnRlYW1NZW1iZXJzfVxuICAvLyAgICAgICAvLyBlcnJvcj17Jyd9XG4gIC8vICAgICAgIG5hdmlnYXRpb249e25hdmlnYXRpb259XG4gIC8vICAgICAgIC8vIHN0b3JlPXttb2NrU3RvcmV9XG4gIC8vICAgICAgIC8vIHsuLi5wcm9wc31cbiAgLy8gICAgIC8+LFxuICAvLyAgICAgeyBjb250ZXh0OiB7IHN0b3JlIH0gfVxuICAvLyAgICk7XG4gIC8vIH0pO1xuXG4gIC8vIGl0KCdyZW5kZXJzIGNvcnJlY3RseScsICgpID0+IHtcbiAgLy8gICAvLyBjb25zdCBjb21wb25lbnQgPSB3cmFwcGVyLmRpdmUoKTtcbiAgLy8gICBleHBlY3QodG9Kc29uKHdyYXBwZXIpKS50b01hdGNoU25hcHNob3QoKTtcbiAgLy8gfSk7XG4gIGxldCB3cmFwcGVyOiBhbnksIHN0b3JlO1xuXG4gIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHsgdGVhbU1lbWJlcnM6IFtdLCBlcnJvcjogJycgfTtcbiAgICBzdG9yZSA9IG1vY2tTdG9yZShpbml0aWFsU3RhdGUpO1xuICAgIC8vIFNoYWxsb3cgcmVuZGVyIHRoZSBjb250YWluZXIgcGFzc2luZyBpbiB0aGUgbW9jayBzdG9yZVxuICAgIHdyYXBwZXIgPSBzaGFsbG93KDxTdXBlcnZpc29yUXVldWVTY3JlZW4gbmF2aWdhdGlvbj17bmF2aWdhdGlvbn0gLz4sIHtcbiAgICAgIGNvbnRleHQ6IHsgc3RvcmUgfVxuICAgIH0pO1xuICB9KTtcbiAgaXQoJ3JlbmRlcnMgY29ycmVjdGx5JywgKCkgPT4ge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IHdyYXBwZXIuZGl2ZSgpO1xuICAgIGV4cGVjdChjb21wb25lbnQpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuICB9KTtcbn0pO1xuIl0sInZlcnNpb24iOjN9