"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const enzyme_1 = require("enzyme");
const react_1 = __importDefault(require("react"));
const redux_mock_store_1 = __importDefault(require("redux-mock-store"));
const enzyme_to_json_1 = __importDefault(require("enzyme-to-json"));
// imported as an unconnected component!
const SupervisorQueueScreen_1 = __importDefault(require("../SupervisorQueueScreen"));
const enzyme_adapter_react_16_1 = __importDefault(require("enzyme-adapter-react-16"));
enzyme_1.configure({ adapter: new enzyme_adapter_react_16_1.default() });
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
describe('SupervisorQueueScreen rendering', () => {
    // const container = shallow(<SupervisorQueueScreen />);
    // it('should render a <DragContainer/>', () => {
    //   expect(container).toMatchSnapshot();
    // });
    it('renders correctly', () => {
        //   const tree = renderer.create(<SupervisorQueueScreen />).toJSON();
        //   expect(tree).toMatchSnapshot();
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
        const wrapper = enzyme_1.shallow(react_1.default.createElement(SupervisorQueueScreen_1.default
        //teamMembers={[]}
        //error={''}
        , { 
            //teamMembers={[]}
            //error={''}
            navigation: navigation }), { context: { mockStore } });
        const component = wrapper.dive();
        expect(enzyme_to_json_1.default(component)).toMatchSnapshot();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9zY3JlZW5zL19fdGVzdHNfXy9zdXBlcnZpc29yLXF1ZXF1ZS10ZXN0cy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBNEM7QUFDNUMsa0RBQTBCO0FBQzFCLHdFQUE4QztBQUM5QyxvRUFBb0M7QUFJcEMsd0NBQXdDO0FBQ3hDLHFGQUE2RDtBQUM3RCxzRkFBOEM7QUFFOUMsa0JBQVMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLGlDQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFFdEMsNEVBQTRFO0FBQzVFLE1BQU0sU0FBUyxHQUFHLDBCQUFjLEVBQUUsQ0FBQztBQUVuQyxNQUFNLFlBQVksR0FBRztJQUNuQixXQUFXLEVBQUUsRUFBRTtJQUNmLEtBQUssRUFBRSxFQUFFO0NBQ1YsQ0FBQztBQUVGLG9EQUFvRDtBQUNwRCxzQ0FBc0M7QUFDdEMsNERBQTREO0FBQzVELG9EQUFvRDtBQUNwRCxVQUFVO0FBQ1YsZ0RBQWdEO0FBQ2hELFFBQVE7QUFDUixNQUFNO0FBQ04scUdBQXFHO0FBRXJHLFFBQVEsQ0FBQyxpQ0FBaUMsRUFBRSxHQUFHLEVBQUU7SUFDL0Msd0RBQXdEO0lBQ3hELGlEQUFpRDtJQUNqRCx5Q0FBeUM7SUFDekMsTUFBTTtJQUNOLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLEVBQUU7UUFDM0Isc0VBQXNFO1FBQ3RFLG9DQUFvQztRQUVwQyxNQUFNLFVBQVUsR0FBRztZQUNqQixRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNuQixRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNuQixLQUFLLEVBQUUsRUFBRTtZQUNULE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ2pCLE9BQU8sRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ2xCLFVBQVUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ3JCLFdBQVcsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ3RCLFlBQVksRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ3ZCLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ25CLFNBQVMsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ3BCLFdBQVcsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ3RCLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDbEIsR0FBRyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDZCxRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNuQixTQUFTLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtTQUNyQixDQUFDO1FBRUYsTUFBTSxPQUFPLEdBQUcsZ0JBQU8sQ0FDckIsOEJBQUMsK0JBQXFCO1FBQ3BCLGtCQUFrQjtRQUNsQixZQUFZOztZQURaLGtCQUFrQjtZQUNsQixZQUFZO1lBQ1osVUFBVSxFQUFFLFVBQVUsR0FHdEIsRUFDRixFQUFFLE9BQU8sRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQzNCLENBQUM7UUFDRixNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDakMsTUFBTSxDQUFDLHdCQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUM5QyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBRUgsb0NBQW9DO0FBQ3BDLHlCQUF5QjtBQUN6QiwyQkFBMkI7QUFDM0IsMkJBQTJCO0FBQzNCLGlCQUFpQjtBQUNqQix5QkFBeUI7QUFDekIsMEJBQTBCO0FBQzFCLDZCQUE2QjtBQUM3Qiw4QkFBOEI7QUFDOUIsK0JBQStCO0FBQy9CLDJCQUEyQjtBQUMzQiw0QkFBNEI7QUFDNUIsOEJBQThCO0FBQzlCLHVCQUF1QjtBQUN2QiwwQkFBMEI7QUFDMUIsc0JBQXNCO0FBQ3RCLDJCQUEyQjtBQUMzQiwyQkFBMkI7QUFDM0IsT0FBTztBQUNQLDBCQUEwQjtBQUMxQixpRUFBaUU7QUFDakUsaUJBQWlCO0FBQ2pCLG9DQUFvQztBQUNwQyxNQUFNIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbzYwL0Rlc2t0b3AvV29ya0ZpbGVzL1dvcmtsaW5rRGVtby9zcmMvUmVhY3Qvc2NyZWVucy9fX3Rlc3RzX18vc3VwZXJ2aXNvci1xdWVxdWUtdGVzdHMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNoYWxsb3csIGNvbmZpZ3VyZSB9IGZyb20gJ2VuenltZSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJ3JlZHV4LW1vY2stc3RvcmUnO1xuaW1wb3J0IHRvSnNvbiBmcm9tICdlbnp5bWUtdG8tanNvbic7XG5pbXBvcnQge30gZnJvbSAndHMtamVzdCc7XG5pbXBvcnQgcmVuZGVyZXIgZnJvbSAncmVhY3QtdGVzdC1yZW5kZXJlcic7XG5pbXBvcnQgUHJvcHMgZnJvbSAnLi4vU3VwZXJ2aXNvclF1ZXVlU2NyZWVuJztcbi8vIGltcG9ydGVkIGFzIGFuIHVuY29ubmVjdGVkIGNvbXBvbmVudCFcbmltcG9ydCBTdXBlcnZpc29yUXVldWVTY3JlZW4gZnJvbSAnLi4vU3VwZXJ2aXNvclF1ZXVlU2NyZWVuJztcbmltcG9ydCBBZGFwdGVyIGZyb20gJ2VuenltZS1hZGFwdGVyLXJlYWN0LTE2JztcblxuY29uZmlndXJlKHsgYWRhcHRlcjogbmV3IEFkYXB0ZXIoKSB9KTtcblxuLy8gY29uc3QgbWlkZGxld2FyZXMgPSBbXTsgLy8geW91IGNhbiBtb2NrIGFueSBtaWRkbGV3YXJlcyBoZXJlIGlmIG5lY2Vzc2FyeVxuY29uc3QgbW9ja1N0b3JlID0gY29uZmlndXJlU3RvcmUoKTtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICB0ZWFtTWVtYmVyczogW10sXG4gIGVycm9yOiAnJ1xufTtcblxuLy8gZGVzY3JpYmUoJ1Rlc3RpbmcgU3VwZXJ2aXNvclF1ZXVlU2NyZWVuJywgKCkgPT4ge1xuLy8gICBpdCgncmVuZGVycyBhcyBleHBlY3RlZCcsICgpID0+IHtcbi8vICAgICBjb25zdCB3cmFwcGVyID0gc2hhbGxvdyg8U3VwZXJ2aXNvclF1ZXVlU2NyZWVuICAvPiwge1xuLy8gICAgICAgY29udGV4dDogeyBzdG9yZTogbW9ja1N0b3JlKGluaXRpYWxTdGF0ZSkgfVxuLy8gICAgIH0pO1xuLy8gICAgIGV4cGVjdCh3cmFwcGVyLmRpdmUoKSkudG9NYXRjaFNuYXBzaG90KCk7XG4vLyAgIH0pO1xuLy8gfSk7XG4vL2plc3QubW9jaygncmVhY3QtbmF2aWdhdGlvbicsICh7d2l0aE5hdmlnYXRpb246IChjb21wb25lbnQ6IFN1cGVydmlzb3JRdWV1ZVNjcmVlbikgPT4gY29tcG9uZW50fSkpO1xuXG5kZXNjcmliZSgnU3VwZXJ2aXNvclF1ZXVlU2NyZWVuIHJlbmRlcmluZycsICgpID0+IHtcbiAgLy8gY29uc3QgY29udGFpbmVyID0gc2hhbGxvdyg8U3VwZXJ2aXNvclF1ZXVlU2NyZWVuIC8+KTtcbiAgLy8gaXQoJ3Nob3VsZCByZW5kZXIgYSA8RHJhZ0NvbnRhaW5lci8+JywgKCkgPT4ge1xuICAvLyAgIGV4cGVjdChjb250YWluZXIpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuICAvLyB9KTtcbiAgaXQoJ3JlbmRlcnMgY29ycmVjdGx5JywgKCkgPT4ge1xuICAgIC8vICAgY29uc3QgdHJlZSA9IHJlbmRlcmVyLmNyZWF0ZSg8U3VwZXJ2aXNvclF1ZXVlU2NyZWVuIC8+KS50b0pTT04oKTtcbiAgICAvLyAgIGV4cGVjdCh0cmVlKS50b01hdGNoU25hcHNob3QoKTtcblxuICAgIGNvbnN0IG5hdmlnYXRpb24gPSB7XG4gICAgICBuYXZpZ2F0ZTogamVzdC5mbigpLFxuICAgICAgZGlzcGF0Y2g6IGplc3QuZm4oKSxcbiAgICAgIHN0YXRlOiB7fSxcbiAgICAgIGdvQmFjazogamVzdC5mbigpLFxuICAgICAgZGlzbWlzczogamVzdC5mbigpLFxuICAgICAgb3BlbkRyYXdlcjogamVzdC5mbigpLFxuICAgICAgY2xvc2VEcmF3ZXI6IGplc3QuZm4oKSxcbiAgICAgIHRvZ2dsZURyYXdlcjogamVzdC5mbigpLFxuICAgICAgZ2V0UGFyYW06IGplc3QuZm4oKSxcbiAgICAgIHNldFBhcmFtczogamVzdC5mbigpLFxuICAgICAgYWRkTGlzdGVuZXI6IGplc3QuZm4oKSxcbiAgICAgIHB1c2g6IGplc3QuZm4oKSxcbiAgICAgIHJlcGxhY2U6IGplc3QuZm4oKSxcbiAgICAgIHBvcDogamVzdC5mbigpLFxuICAgICAgcG9wVG9Ub3A6IGplc3QuZm4oKSxcbiAgICAgIGlzRm9jdXNlZDogamVzdC5mbigpXG4gICAgfTtcblxuICAgIGNvbnN0IHdyYXBwZXIgPSBzaGFsbG93KFxuICAgICAgPFN1cGVydmlzb3JRdWV1ZVNjcmVlblxuICAgICAgICAvL3RlYW1NZW1iZXJzPXtbXX1cbiAgICAgICAgLy9lcnJvcj17Jyd9XG4gICAgICAgIG5hdmlnYXRpb249e25hdmlnYXRpb259XG4gICAgICAgIC8vIHN0b3JlPXttb2NrU3RvcmV9XG4gICAgICAgIC8vIHsuLi5wcm9wc31cbiAgICAgIC8+LFxuICAgICAgeyBjb250ZXh0OiB7IG1vY2tTdG9yZSB9IH1cbiAgICApO1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IHdyYXBwZXIuZGl2ZSgpO1xuICAgIGV4cGVjdCh0b0pzb24oY29tcG9uZW50KSkudG9NYXRjaFNuYXBzaG90KCk7XG4gIH0pO1xufSk7XG5cbi8vIHRlc3QoJ3JlbmRlcnMgY29ycmVjdGx5JywgKCkgPT4ge1xuLy8gICBjb25zdCBuYXZpZ2F0aW9uID0ge1xuLy8gICAgIG5hdmlnYXRlOiBqZXN0LmZuKCksXG4vLyAgICAgZGlzcGF0Y2g6IGplc3QuZm4oKSxcbi8vICAgICBzdGF0ZToge30sXG4vLyAgICAgZ29CYWNrOiBqZXN0LmZuKCksXG4vLyAgICAgZGlzbWlzczogamVzdC5mbigpLFxuLy8gICAgIG9wZW5EcmF3ZXI6IGplc3QuZm4oKSxcbi8vICAgICBjbG9zZURyYXdlcjogamVzdC5mbigpLFxuLy8gICAgIHRvZ2dsZURyYXdlcjogamVzdC5mbigpLFxuLy8gICAgIGdldFBhcmFtOiBqZXN0LmZuKCksXG4vLyAgICAgc2V0UGFyYW1zOiBqZXN0LmZuKCksXG4vLyAgICAgYWRkTGlzdGVuZXI6IGplc3QuZm4oKSxcbi8vICAgICBwdXNoOiBqZXN0LmZuKCksXG4vLyAgICAgcmVwbGFjZTogamVzdC5mbigpLFxuLy8gICAgIHBvcDogamVzdC5mbigpLFxuLy8gICAgIHBvcFRvVG9wOiBqZXN0LmZuKCksXG4vLyAgICAgaXNGb2N1c2VkOiBqZXN0LmZuKClcbi8vICAgfTtcbi8vICAgY29uc3QgdHJlZSA9IHJlbmRlcmVyXG4vLyAgICAgLmNyZWF0ZSg8U3VwZXJ2aXNvclF1ZXVlU2NyZWVuIG5hdmlnYXRpb249e25hdmlnYXRpb259IC8+KVxuLy8gICAgIC50b0pTT04oKTtcbi8vICAgZXhwZWN0KHRyZWUpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuLy8gfSk7XG4iXSwidmVyc2lvbiI6M30=