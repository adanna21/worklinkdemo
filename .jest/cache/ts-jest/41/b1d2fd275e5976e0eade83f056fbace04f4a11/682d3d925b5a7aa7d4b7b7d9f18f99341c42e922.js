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
    // const container = shallow(<SupervisorQueueScreen navigation={navigation} />);
    it('should render a <DragContainer/>', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
// test('renders correctly', () => {
//   const navigation = {
//     navigate: jest.fn(),
//     dispatch: jest.fn(),
//     state: {},
//     goBack: jest.fn(),
//     dismiss: jest.fn(),
//     openDrawer: jest.fn(),
//     closeDrawer: jest.fn(),
//     toggleDrawer: jest.fn(),
//     getParam: jest.fn(),
//     setParams: jest.fn(),
//     addListener: jest.fn(),
//     push: jest.fn(),
//     replace: jest.fn(),
//     pop: jest.fn(),
//     popToTop: jest.fn(),
//     isFocused: jest.fn()
//   };
//   const tree = renderer
//     .create(<SupervisorQueueScreen navigation={navigation} />)
//     .toJSON();
//   expect(tree).toMatchSnapshot();
// });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9zY3JlZW5zL19fdGVzdHNfXy9zdXBlcnZpc29yLXF1ZXF1ZS10ZXN0cy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBNEM7QUFDNUMsa0RBQTBCO0FBQzFCLHdFQUE4QztBQUs5Qyx3Q0FBd0M7QUFDeEMscUZBQTZEO0FBQzdELHNGQUE4QztBQUU5QyxrQkFBUyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksaUNBQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUV0Qyw0RUFBNEU7QUFDNUUsTUFBTSxTQUFTLEdBQUcsMEJBQWMsRUFBRSxDQUFDO0FBRW5DLG9EQUFvRDtBQUNwRCxzQ0FBc0M7QUFDdEMsNERBQTREO0FBQzVELG9EQUFvRDtBQUNwRCxVQUFVO0FBQ1YsZ0RBQWdEO0FBQ2hELFFBQVE7QUFDUixNQUFNO0FBQ04scUdBQXFHO0FBQ3JHLFFBQVEsQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLEVBQUU7SUFDckMsTUFBTSxVQUFVLEdBQUc7UUFDakIsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7UUFDbkIsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7UUFDbkIsS0FBSyxFQUFFLEVBQUU7UUFDVCxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUNqQixPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUNsQixVQUFVLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUNyQixXQUFXLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUN0QixZQUFZLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUN2QixRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUNuQixTQUFTLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUNwQixXQUFXLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUN0QixJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUNmLE9BQU8sRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1FBQ2xCLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1FBQ2QsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7UUFDbkIsU0FBUyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7S0FDckIsQ0FBQztJQUVGLDJCQUEyQjtJQUMzQixxQkFBcUI7SUFDckIseURBQXlEO0lBQ3pELHFDQUFxQztJQUNyQyx1QkFBdUI7SUFDdkIsNkJBQTZCO0lBQzdCLGtEQUFrRDtJQUNsRCxzQkFBc0I7SUFDdEIsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3QixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLDZCQUE2QjtJQUM3QixPQUFPO0lBQ1AsTUFBTTtJQUVOLGtDQUFrQztJQUNsQyx5Q0FBeUM7SUFDekMsK0NBQStDO0lBQy9DLE1BQU07SUFDTixJQUFJLE9BQVksRUFBRSxLQUFLLENBQUM7SUFFeEIsVUFBVSxDQUFDLEdBQUcsRUFBRTtRQUNkLE1BQU0sWUFBWSxHQUFHLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDcEQsS0FBSyxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNoQyx5REFBeUQ7UUFDekQsT0FBTyxHQUFHLGdCQUFPLENBQUMsOEJBQUMsK0JBQXFCLElBQUMsVUFBVSxFQUFFLFVBQVUsR0FBSSxFQUFFO1lBQ25FLE9BQU8sRUFBRSxFQUFFLEtBQUssRUFBRTtTQUNuQixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUNILGdGQUFnRjtJQUNoRixFQUFFLENBQUMsa0NBQWtDLEVBQUUsR0FBRyxFQUFFO1FBQzFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNwQyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBRUgsb0NBQW9DO0FBQ3BDLHlCQUF5QjtBQUN6QiwyQkFBMkI7QUFDM0IsMkJBQTJCO0FBQzNCLGlCQUFpQjtBQUNqQix5QkFBeUI7QUFDekIsMEJBQTBCO0FBQzFCLDZCQUE2QjtBQUM3Qiw4QkFBOEI7QUFDOUIsK0JBQStCO0FBQy9CLDJCQUEyQjtBQUMzQiw0QkFBNEI7QUFDNUIsOEJBQThCO0FBQzlCLHVCQUF1QjtBQUN2QiwwQkFBMEI7QUFDMUIsc0JBQXNCO0FBQ3RCLDJCQUEyQjtBQUMzQiwyQkFBMkI7QUFDM0IsT0FBTztBQUNQLDBCQUEwQjtBQUMxQixpRUFBaUU7QUFDakUsaUJBQWlCO0FBQ2pCLG9DQUFvQztBQUNwQyxNQUFNIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbzYwL0Rlc2t0b3AvV29ya0ZpbGVzL1dvcmtsaW5rRGVtby9zcmMvUmVhY3Qvc2NyZWVucy9fX3Rlc3RzX18vc3VwZXJ2aXNvci1xdWVxdWUtdGVzdHMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNoYWxsb3csIGNvbmZpZ3VyZSB9IGZyb20gJ2VuenltZSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJ3JlZHV4LW1vY2stc3RvcmUnO1xuaW1wb3J0IHRvSnNvbiBmcm9tICdlbnp5bWUtdG8tanNvbic7XG5pbXBvcnQge30gZnJvbSAndHMtamVzdCc7XG5pbXBvcnQgcmVuZGVyZXIgZnJvbSAncmVhY3QtdGVzdC1yZW5kZXJlcic7XG5pbXBvcnQgUHJvcHMgZnJvbSAnLi4vU3VwZXJ2aXNvclF1ZXVlU2NyZWVuJztcbi8vIGltcG9ydGVkIGFzIGFuIHVuY29ubmVjdGVkIGNvbXBvbmVudCFcbmltcG9ydCBTdXBlcnZpc29yUXVldWVTY3JlZW4gZnJvbSAnLi4vU3VwZXJ2aXNvclF1ZXVlU2NyZWVuJztcbmltcG9ydCBBZGFwdGVyIGZyb20gJ2VuenltZS1hZGFwdGVyLXJlYWN0LTE2JztcblxuY29uZmlndXJlKHsgYWRhcHRlcjogbmV3IEFkYXB0ZXIoKSB9KTtcblxuLy8gY29uc3QgbWlkZGxld2FyZXMgPSBbXTsgLy8geW91IGNhbiBtb2NrIGFueSBtaWRkbGV3YXJlcyBoZXJlIGlmIG5lY2Vzc2FyeVxuY29uc3QgbW9ja1N0b3JlID0gY29uZmlndXJlU3RvcmUoKTtcblxuLy8gZGVzY3JpYmUoJ1Rlc3RpbmcgU3VwZXJ2aXNvclF1ZXVlU2NyZWVuJywgKCkgPT4ge1xuLy8gICBpdCgncmVuZGVycyBhcyBleHBlY3RlZCcsICgpID0+IHtcbi8vICAgICBjb25zdCB3cmFwcGVyID0gc2hhbGxvdyg8U3VwZXJ2aXNvclF1ZXVlU2NyZWVuICAvPiwge1xuLy8gICAgICAgY29udGV4dDogeyBzdG9yZTogbW9ja1N0b3JlKGluaXRpYWxTdGF0ZSkgfVxuLy8gICAgIH0pO1xuLy8gICAgIGV4cGVjdCh3cmFwcGVyLmRpdmUoKSkudG9NYXRjaFNuYXBzaG90KCk7XG4vLyAgIH0pO1xuLy8gfSk7XG4vL2plc3QubW9jaygncmVhY3QtbmF2aWdhdGlvbicsICh7d2l0aE5hdmlnYXRpb246IChjb21wb25lbnQ6IFN1cGVydmlzb3JRdWV1ZVNjcmVlbikgPT4gY29tcG9uZW50fSkpO1xuZGVzY3JpYmUoJ1N1cGVydmlzb3JRdWV1ZVNjcmVlbicsICgpID0+IHtcbiAgY29uc3QgbmF2aWdhdGlvbiA9IHtcbiAgICBuYXZpZ2F0ZTogamVzdC5mbigpLFxuICAgIGRpc3BhdGNoOiBqZXN0LmZuKCksXG4gICAgc3RhdGU6IHt9LFxuICAgIGdvQmFjazogamVzdC5mbigpLFxuICAgIGRpc21pc3M6IGplc3QuZm4oKSxcbiAgICBvcGVuRHJhd2VyOiBqZXN0LmZuKCksXG4gICAgY2xvc2VEcmF3ZXI6IGplc3QuZm4oKSxcbiAgICB0b2dnbGVEcmF3ZXI6IGplc3QuZm4oKSxcbiAgICBnZXRQYXJhbTogamVzdC5mbigpLFxuICAgIHNldFBhcmFtczogamVzdC5mbigpLFxuICAgIGFkZExpc3RlbmVyOiBqZXN0LmZuKCksXG4gICAgcHVzaDogamVzdC5mbigpLFxuICAgIHJlcGxhY2U6IGplc3QuZm4oKSxcbiAgICBwb3A6IGplc3QuZm4oKSxcbiAgICBwb3BUb1RvcDogamVzdC5mbigpLFxuICAgIGlzRm9jdXNlZDogamVzdC5mbigpXG4gIH07XG5cbiAgLy8gbGV0IHdyYXBwZXI6IGFueSwgc3RvcmU7XG4gIC8vIGJlZm9yZUVhY2goKCkgPT4ge1xuICAvLyAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHsgdGVhbU1lbWJlcnM6IFtdLCBlcnJvcjogJycgfTtcbiAgLy8gICBzdG9yZSA9IG1vY2tTdG9yZShpbml0aWFsU3RhdGUpO1xuICAvLyAgIHdyYXBwZXIgPSBzaGFsbG93KFxuICAvLyAgICAgPFN1cGVydmlzb3JRdWV1ZVNjcmVlblxuICAvLyAgICAgICAvLyB0ZWFtTWVtYmVycz17aW5pdGlhbFN0YXRlLnRlYW1NZW1iZXJzfVxuICAvLyAgICAgICAvLyBlcnJvcj17Jyd9XG4gIC8vICAgICAgIG5hdmlnYXRpb249e25hdmlnYXRpb259XG4gIC8vICAgICAgIC8vIHN0b3JlPXttb2NrU3RvcmV9XG4gIC8vICAgICAgIC8vIHsuLi5wcm9wc31cbiAgLy8gICAgIC8+LFxuICAvLyAgICAgeyBjb250ZXh0OiB7IHN0b3JlIH0gfVxuICAvLyAgICk7XG4gIC8vIH0pO1xuXG4gIC8vIGl0KCdyZW5kZXJzIGNvcnJlY3RseScsICgpID0+IHtcbiAgLy8gICAvLyBjb25zdCBjb21wb25lbnQgPSB3cmFwcGVyLmRpdmUoKTtcbiAgLy8gICBleHBlY3QodG9Kc29uKHdyYXBwZXIpKS50b01hdGNoU25hcHNob3QoKTtcbiAgLy8gfSk7XG4gIGxldCB3cmFwcGVyOiBhbnksIHN0b3JlO1xuXG4gIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHsgdGVhbU1lbWJlcnM6IFtdLCBlcnJvcjogJycgfTtcbiAgICBzdG9yZSA9IG1vY2tTdG9yZShpbml0aWFsU3RhdGUpO1xuICAgIC8vIFNoYWxsb3cgcmVuZGVyIHRoZSBjb250YWluZXIgcGFzc2luZyBpbiB0aGUgbW9jayBzdG9yZVxuICAgIHdyYXBwZXIgPSBzaGFsbG93KDxTdXBlcnZpc29yUXVldWVTY3JlZW4gbmF2aWdhdGlvbj17bmF2aWdhdGlvbn0gLz4sIHtcbiAgICAgIGNvbnRleHQ6IHsgc3RvcmUgfVxuICAgIH0pO1xuICB9KTtcbiAgLy8gY29uc3QgY29udGFpbmVyID0gc2hhbGxvdyg8U3VwZXJ2aXNvclF1ZXVlU2NyZWVuIG5hdmlnYXRpb249e25hdmlnYXRpb259IC8+KTtcbiAgaXQoJ3Nob3VsZCByZW5kZXIgYSA8RHJhZ0NvbnRhaW5lci8+JywgKCkgPT4ge1xuICAgIGV4cGVjdCh3cmFwcGVyKS50b01hdGNoU25hcHNob3QoKTtcbiAgfSk7XG59KTtcblxuLy8gdGVzdCgncmVuZGVycyBjb3JyZWN0bHknLCAoKSA9PiB7XG4vLyAgIGNvbnN0IG5hdmlnYXRpb24gPSB7XG4vLyAgICAgbmF2aWdhdGU6IGplc3QuZm4oKSxcbi8vICAgICBkaXNwYXRjaDogamVzdC5mbigpLFxuLy8gICAgIHN0YXRlOiB7fSxcbi8vICAgICBnb0JhY2s6IGplc3QuZm4oKSxcbi8vICAgICBkaXNtaXNzOiBqZXN0LmZuKCksXG4vLyAgICAgb3BlbkRyYXdlcjogamVzdC5mbigpLFxuLy8gICAgIGNsb3NlRHJhd2VyOiBqZXN0LmZuKCksXG4vLyAgICAgdG9nZ2xlRHJhd2VyOiBqZXN0LmZuKCksXG4vLyAgICAgZ2V0UGFyYW06IGplc3QuZm4oKSxcbi8vICAgICBzZXRQYXJhbXM6IGplc3QuZm4oKSxcbi8vICAgICBhZGRMaXN0ZW5lcjogamVzdC5mbigpLFxuLy8gICAgIHB1c2g6IGplc3QuZm4oKSxcbi8vICAgICByZXBsYWNlOiBqZXN0LmZuKCksXG4vLyAgICAgcG9wOiBqZXN0LmZuKCksXG4vLyAgICAgcG9wVG9Ub3A6IGplc3QuZm4oKSxcbi8vICAgICBpc0ZvY3VzZWQ6IGplc3QuZm4oKVxuLy8gICB9O1xuLy8gICBjb25zdCB0cmVlID0gcmVuZGVyZXJcbi8vICAgICAuY3JlYXRlKDxTdXBlcnZpc29yUXVldWVTY3JlZW4gbmF2aWdhdGlvbj17bmF2aWdhdGlvbn0gLz4pXG4vLyAgICAgLnRvSlNPTigpO1xuLy8gICBleHBlY3QodHJlZSkudG9NYXRjaFNuYXBzaG90KCk7XG4vLyB9KTtcbiJdLCJ2ZXJzaW9uIjozfQ==