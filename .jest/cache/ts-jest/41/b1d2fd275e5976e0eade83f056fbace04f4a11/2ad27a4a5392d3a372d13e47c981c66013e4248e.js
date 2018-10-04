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
beforeEach(() => { });
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
    const container = enzyme_1.shallow(react_1.default.createElement(SupervisorQueueScreen_1.default, { navigation: navigation }));
    it('should render a <DragContainer/>', () => {
        expect(container).toMatchSnapshot();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9zY3JlZW5zL19fdGVzdHNfXy9zdXBlcnZpc29yLXF1ZXF1ZS10ZXN0cy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBNEM7QUFDNUMsa0RBQTBCO0FBQzFCLHdFQUE4QztBQUs5Qyx3Q0FBd0M7QUFDeEMscUZBQTZEO0FBQzdELHNGQUE4QztBQUU5QyxrQkFBUyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksaUNBQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUV0Qyw0RUFBNEU7QUFDNUUsTUFBTSxTQUFTLEdBQUcsMEJBQWMsRUFBRSxDQUFDO0FBRW5DLG9EQUFvRDtBQUNwRCxzQ0FBc0M7QUFDdEMsNERBQTREO0FBQzVELG9EQUFvRDtBQUNwRCxVQUFVO0FBQ1YsZ0RBQWdEO0FBQ2hELFFBQVE7QUFDUixNQUFNO0FBQ04scUdBQXFHO0FBQ3JHLFVBQVUsQ0FBQyxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUMsQ0FBQztBQUNyQixRQUFRLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxFQUFFO0lBQ3JDLE1BQU0sVUFBVSxHQUFHO1FBQ2pCLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1FBQ25CLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1FBQ25CLEtBQUssRUFBRSxFQUFFO1FBQ1QsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7UUFDakIsT0FBTyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7UUFDbEIsVUFBVSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7UUFDckIsV0FBVyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7UUFDdEIsWUFBWSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7UUFDdkIsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7UUFDbkIsU0FBUyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7UUFDcEIsV0FBVyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7UUFDdEIsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7UUFDZixPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUNsQixHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUNkLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1FBQ25CLFNBQVMsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO0tBQ3JCLENBQUM7SUFFRiwyQkFBMkI7SUFDM0IscUJBQXFCO0lBQ3JCLHlEQUF5RDtJQUN6RCxxQ0FBcUM7SUFDckMsdUJBQXVCO0lBQ3ZCLDZCQUE2QjtJQUM3QixrREFBa0Q7SUFDbEQsc0JBQXNCO0lBQ3RCLGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDN0Isc0JBQXNCO0lBQ3RCLFVBQVU7SUFDViw2QkFBNkI7SUFDN0IsT0FBTztJQUNQLE1BQU07SUFFTixrQ0FBa0M7SUFDbEMseUNBQXlDO0lBQ3pDLCtDQUErQztJQUMvQyxNQUFNO0lBRU4sTUFBTSxTQUFTLEdBQUcsZ0JBQU8sQ0FBQyw4QkFBQywrQkFBcUIsSUFBQyxVQUFVLEVBQUUsVUFBVSxHQUFJLENBQUMsQ0FBQztJQUM3RSxFQUFFLENBQUMsa0NBQWtDLEVBQUUsR0FBRyxFQUFFO1FBQzFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN0QyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBRUgsb0NBQW9DO0FBQ3BDLHlCQUF5QjtBQUN6QiwyQkFBMkI7QUFDM0IsMkJBQTJCO0FBQzNCLGlCQUFpQjtBQUNqQix5QkFBeUI7QUFDekIsMEJBQTBCO0FBQzFCLDZCQUE2QjtBQUM3Qiw4QkFBOEI7QUFDOUIsK0JBQStCO0FBQy9CLDJCQUEyQjtBQUMzQiw0QkFBNEI7QUFDNUIsOEJBQThCO0FBQzlCLHVCQUF1QjtBQUN2QiwwQkFBMEI7QUFDMUIsc0JBQXNCO0FBQ3RCLDJCQUEyQjtBQUMzQiwyQkFBMkI7QUFDM0IsT0FBTztBQUNQLDBCQUEwQjtBQUMxQixpRUFBaUU7QUFDakUsaUJBQWlCO0FBQ2pCLG9DQUFvQztBQUNwQyxNQUFNIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbzYwL0Rlc2t0b3AvV29ya0ZpbGVzL1dvcmtsaW5rRGVtby9zcmMvUmVhY3Qvc2NyZWVucy9fX3Rlc3RzX18vc3VwZXJ2aXNvci1xdWVxdWUtdGVzdHMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNoYWxsb3csIGNvbmZpZ3VyZSB9IGZyb20gJ2VuenltZSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJ3JlZHV4LW1vY2stc3RvcmUnO1xuaW1wb3J0IHRvSnNvbiBmcm9tICdlbnp5bWUtdG8tanNvbic7XG5pbXBvcnQge30gZnJvbSAndHMtamVzdCc7XG5pbXBvcnQgcmVuZGVyZXIgZnJvbSAncmVhY3QtdGVzdC1yZW5kZXJlcic7XG5pbXBvcnQgUHJvcHMgZnJvbSAnLi4vU3VwZXJ2aXNvclF1ZXVlU2NyZWVuJztcbi8vIGltcG9ydGVkIGFzIGFuIHVuY29ubmVjdGVkIGNvbXBvbmVudCFcbmltcG9ydCBTdXBlcnZpc29yUXVldWVTY3JlZW4gZnJvbSAnLi4vU3VwZXJ2aXNvclF1ZXVlU2NyZWVuJztcbmltcG9ydCBBZGFwdGVyIGZyb20gJ2VuenltZS1hZGFwdGVyLXJlYWN0LTE2JztcblxuY29uZmlndXJlKHsgYWRhcHRlcjogbmV3IEFkYXB0ZXIoKSB9KTtcblxuLy8gY29uc3QgbWlkZGxld2FyZXMgPSBbXTsgLy8geW91IGNhbiBtb2NrIGFueSBtaWRkbGV3YXJlcyBoZXJlIGlmIG5lY2Vzc2FyeVxuY29uc3QgbW9ja1N0b3JlID0gY29uZmlndXJlU3RvcmUoKTtcblxuLy8gZGVzY3JpYmUoJ1Rlc3RpbmcgU3VwZXJ2aXNvclF1ZXVlU2NyZWVuJywgKCkgPT4ge1xuLy8gICBpdCgncmVuZGVycyBhcyBleHBlY3RlZCcsICgpID0+IHtcbi8vICAgICBjb25zdCB3cmFwcGVyID0gc2hhbGxvdyg8U3VwZXJ2aXNvclF1ZXVlU2NyZWVuICAvPiwge1xuLy8gICAgICAgY29udGV4dDogeyBzdG9yZTogbW9ja1N0b3JlKGluaXRpYWxTdGF0ZSkgfVxuLy8gICAgIH0pO1xuLy8gICAgIGV4cGVjdCh3cmFwcGVyLmRpdmUoKSkudG9NYXRjaFNuYXBzaG90KCk7XG4vLyAgIH0pO1xuLy8gfSk7XG4vL2plc3QubW9jaygncmVhY3QtbmF2aWdhdGlvbicsICh7d2l0aE5hdmlnYXRpb246IChjb21wb25lbnQ6IFN1cGVydmlzb3JRdWV1ZVNjcmVlbikgPT4gY29tcG9uZW50fSkpO1xuYmVmb3JlRWFjaCgoKSA9PiB7fSk7XG5kZXNjcmliZSgnU3VwZXJ2aXNvclF1ZXVlU2NyZWVuJywgKCkgPT4ge1xuICBjb25zdCBuYXZpZ2F0aW9uID0ge1xuICAgIG5hdmlnYXRlOiBqZXN0LmZuKCksXG4gICAgZGlzcGF0Y2g6IGplc3QuZm4oKSxcbiAgICBzdGF0ZToge30sXG4gICAgZ29CYWNrOiBqZXN0LmZuKCksXG4gICAgZGlzbWlzczogamVzdC5mbigpLFxuICAgIG9wZW5EcmF3ZXI6IGplc3QuZm4oKSxcbiAgICBjbG9zZURyYXdlcjogamVzdC5mbigpLFxuICAgIHRvZ2dsZURyYXdlcjogamVzdC5mbigpLFxuICAgIGdldFBhcmFtOiBqZXN0LmZuKCksXG4gICAgc2V0UGFyYW1zOiBqZXN0LmZuKCksXG4gICAgYWRkTGlzdGVuZXI6IGplc3QuZm4oKSxcbiAgICBwdXNoOiBqZXN0LmZuKCksXG4gICAgcmVwbGFjZTogamVzdC5mbigpLFxuICAgIHBvcDogamVzdC5mbigpLFxuICAgIHBvcFRvVG9wOiBqZXN0LmZuKCksXG4gICAgaXNGb2N1c2VkOiBqZXN0LmZuKClcbiAgfTtcblxuICAvLyBsZXQgd3JhcHBlcjogYW55LCBzdG9yZTtcbiAgLy8gYmVmb3JlRWFjaCgoKSA9PiB7XG4gIC8vICAgY29uc3QgaW5pdGlhbFN0YXRlID0geyB0ZWFtTWVtYmVyczogW10sIGVycm9yOiAnJyB9O1xuICAvLyAgIHN0b3JlID0gbW9ja1N0b3JlKGluaXRpYWxTdGF0ZSk7XG4gIC8vICAgd3JhcHBlciA9IHNoYWxsb3coXG4gIC8vICAgICA8U3VwZXJ2aXNvclF1ZXVlU2NyZWVuXG4gIC8vICAgICAgIC8vIHRlYW1NZW1iZXJzPXtpbml0aWFsU3RhdGUudGVhbU1lbWJlcnN9XG4gIC8vICAgICAgIC8vIGVycm9yPXsnJ31cbiAgLy8gICAgICAgbmF2aWdhdGlvbj17bmF2aWdhdGlvbn1cbiAgLy8gICAgICAgLy8gc3RvcmU9e21vY2tTdG9yZX1cbiAgLy8gICAgICAgLy8gey4uLnByb3BzfVxuICAvLyAgICAgLz4sXG4gIC8vICAgICB7IGNvbnRleHQ6IHsgc3RvcmUgfSB9XG4gIC8vICAgKTtcbiAgLy8gfSk7XG5cbiAgLy8gaXQoJ3JlbmRlcnMgY29ycmVjdGx5JywgKCkgPT4ge1xuICAvLyAgIC8vIGNvbnN0IGNvbXBvbmVudCA9IHdyYXBwZXIuZGl2ZSgpO1xuICAvLyAgIGV4cGVjdCh0b0pzb24od3JhcHBlcikpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuICAvLyB9KTtcblxuICBjb25zdCBjb250YWluZXIgPSBzaGFsbG93KDxTdXBlcnZpc29yUXVldWVTY3JlZW4gbmF2aWdhdGlvbj17bmF2aWdhdGlvbn0gLz4pO1xuICBpdCgnc2hvdWxkIHJlbmRlciBhIDxEcmFnQ29udGFpbmVyLz4nLCAoKSA9PiB7XG4gICAgZXhwZWN0KGNvbnRhaW5lcikudG9NYXRjaFNuYXBzaG90KCk7XG4gIH0pO1xufSk7XG5cbi8vIHRlc3QoJ3JlbmRlcnMgY29ycmVjdGx5JywgKCkgPT4ge1xuLy8gICBjb25zdCBuYXZpZ2F0aW9uID0ge1xuLy8gICAgIG5hdmlnYXRlOiBqZXN0LmZuKCksXG4vLyAgICAgZGlzcGF0Y2g6IGplc3QuZm4oKSxcbi8vICAgICBzdGF0ZToge30sXG4vLyAgICAgZ29CYWNrOiBqZXN0LmZuKCksXG4vLyAgICAgZGlzbWlzczogamVzdC5mbigpLFxuLy8gICAgIG9wZW5EcmF3ZXI6IGplc3QuZm4oKSxcbi8vICAgICBjbG9zZURyYXdlcjogamVzdC5mbigpLFxuLy8gICAgIHRvZ2dsZURyYXdlcjogamVzdC5mbigpLFxuLy8gICAgIGdldFBhcmFtOiBqZXN0LmZuKCksXG4vLyAgICAgc2V0UGFyYW1zOiBqZXN0LmZuKCksXG4vLyAgICAgYWRkTGlzdGVuZXI6IGplc3QuZm4oKSxcbi8vICAgICBwdXNoOiBqZXN0LmZuKCksXG4vLyAgICAgcmVwbGFjZTogamVzdC5mbigpLFxuLy8gICAgIHBvcDogamVzdC5mbigpLFxuLy8gICAgIHBvcFRvVG9wOiBqZXN0LmZuKCksXG4vLyAgICAgaXNGb2N1c2VkOiBqZXN0LmZuKClcbi8vICAgfTtcbi8vICAgY29uc3QgdHJlZSA9IHJlbmRlcmVyXG4vLyAgICAgLmNyZWF0ZSg8U3VwZXJ2aXNvclF1ZXVlU2NyZWVuIG5hdmlnYXRpb249e25hdmlnYXRpb259IC8+KVxuLy8gICAgIC50b0pTT04oKTtcbi8vICAgZXhwZWN0KHRyZWUpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuLy8gfSk7XG4iXSwidmVyc2lvbiI6M30=