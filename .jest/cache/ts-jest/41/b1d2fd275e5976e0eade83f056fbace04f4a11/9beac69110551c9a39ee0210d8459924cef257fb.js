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
describe('SupervisorQueueScreen rendering', () => {
    // const container = shallow(<SupervisorQueueScreen />);
    // it('should render a <DragContainer/>', () => {
    //   expect(container).toMatchSnapshot();
    // });
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
    let wrapper, store;
    beforeEach(() => {
        const initialState = { teamMembers: [], error: '' };
        store = mockStore(initialState);
        wrapper = enzyme_1.shallow(react_1.default.createElement(SupervisorQueueScreen_1.default
        // teamMembers={initialState.teamMembers}
        // error={''}
        , { 
            // teamMembers={initialState.teamMembers}
            // error={''}
            navigation: navigation }), { context: { store } });
    });
    it('renders correctly', () => {
        // const component = wrapper.dive();
        expect(enzyme_to_json_1.default(wrapper)).toMatchSnapshot();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9zY3JlZW5zL19fdGVzdHNfXy9zdXBlcnZpc29yLXF1ZXF1ZS10ZXN0cy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBNEM7QUFDNUMsa0RBQTBCO0FBQzFCLHdFQUE4QztBQUM5QyxvRUFBb0M7QUFJcEMsd0NBQXdDO0FBQ3hDLHFGQUE2RDtBQUM3RCxzRkFBOEM7QUFFOUMsa0JBQVMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLGlDQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFFdEMsNEVBQTRFO0FBQzVFLE1BQU0sU0FBUyxHQUFHLDBCQUFjLEVBQUUsQ0FBQztBQUVuQyxvREFBb0Q7QUFDcEQsc0NBQXNDO0FBQ3RDLDREQUE0RDtBQUM1RCxvREFBb0Q7QUFDcEQsVUFBVTtBQUNWLGdEQUFnRDtBQUNoRCxRQUFRO0FBQ1IsTUFBTTtBQUNOLHFHQUFxRztBQUNyRyxVQUFVLENBQUMsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDLENBQUM7QUFDckIsUUFBUSxDQUFDLGlDQUFpQyxFQUFFLEdBQUcsRUFBRTtJQUMvQyx3REFBd0Q7SUFDeEQsaURBQWlEO0lBQ2pELHlDQUF5QztJQUN6QyxNQUFNO0lBRU4sc0VBQXNFO0lBQ3RFLG9DQUFvQztJQUVwQyxNQUFNLFVBQVUsR0FBRztRQUNqQixRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUNuQixRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUNuQixLQUFLLEVBQUUsRUFBRTtRQUNULE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1FBQ2pCLE9BQU8sRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1FBQ2xCLFVBQVUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1FBQ3JCLFdBQVcsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1FBQ3RCLFlBQVksRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1FBQ3ZCLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1FBQ25CLFNBQVMsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1FBQ3BCLFdBQVcsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1FBQ3RCLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1FBQ2YsT0FBTyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7UUFDbEIsR0FBRyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7UUFDZCxRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUNuQixTQUFTLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtLQUNyQixDQUFDO0lBRUYsSUFBSSxPQUFZLEVBQUUsS0FBSyxDQUFDO0lBQ3hCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7UUFDZCxNQUFNLFlBQVksR0FBRyxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ3BELEtBQUssR0FBRyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDaEMsT0FBTyxHQUFHLGdCQUFPLENBQ2YsOEJBQUMsK0JBQXFCO1FBQ3BCLHlDQUF5QztRQUN6QyxhQUFhOztZQURiLHlDQUF5QztZQUN6QyxhQUFhO1lBQ2IsVUFBVSxFQUFFLFVBQVUsR0FHdEIsRUFDRixFQUFFLE9BQU8sRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQ3ZCLENBQUM7SUFDSixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLEVBQUU7UUFDM0Isb0NBQW9DO1FBQ3BDLE1BQU0sQ0FBQyx3QkFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDNUMsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQztBQUVILG9DQUFvQztBQUNwQyx5QkFBeUI7QUFDekIsMkJBQTJCO0FBQzNCLDJCQUEyQjtBQUMzQixpQkFBaUI7QUFDakIseUJBQXlCO0FBQ3pCLDBCQUEwQjtBQUMxQiw2QkFBNkI7QUFDN0IsOEJBQThCO0FBQzlCLCtCQUErQjtBQUMvQiwyQkFBMkI7QUFDM0IsNEJBQTRCO0FBQzVCLDhCQUE4QjtBQUM5Qix1QkFBdUI7QUFDdkIsMEJBQTBCO0FBQzFCLHNCQUFzQjtBQUN0QiwyQkFBMkI7QUFDM0IsMkJBQTJCO0FBQzNCLE9BQU87QUFDUCwwQkFBMEI7QUFDMUIsaUVBQWlFO0FBQ2pFLGlCQUFpQjtBQUNqQixvQ0FBb0M7QUFDcEMsTUFBTSIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMvYW82MC9EZXNrdG9wL1dvcmtGaWxlcy9Xb3JrbGlua0RlbW8vc3JjL1JlYWN0L3NjcmVlbnMvX190ZXN0c19fL3N1cGVydmlzb3ItcXVlcXVlLXRlc3RzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzaGFsbG93LCBjb25maWd1cmUgfSBmcm9tICdlbnp5bWUnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tICdyZWR1eC1tb2NrLXN0b3JlJztcbmltcG9ydCB0b0pzb24gZnJvbSAnZW56eW1lLXRvLWpzb24nO1xuaW1wb3J0IHt9IGZyb20gJ3RzLWplc3QnO1xuaW1wb3J0IHJlbmRlcmVyIGZyb20gJ3JlYWN0LXRlc3QtcmVuZGVyZXInO1xuaW1wb3J0IFByb3BzIGZyb20gJy4uL1N1cGVydmlzb3JRdWV1ZVNjcmVlbic7XG4vLyBpbXBvcnRlZCBhcyBhbiB1bmNvbm5lY3RlZCBjb21wb25lbnQhXG5pbXBvcnQgU3VwZXJ2aXNvclF1ZXVlU2NyZWVuIGZyb20gJy4uL1N1cGVydmlzb3JRdWV1ZVNjcmVlbic7XG5pbXBvcnQgQWRhcHRlciBmcm9tICdlbnp5bWUtYWRhcHRlci1yZWFjdC0xNic7XG5cbmNvbmZpZ3VyZSh7IGFkYXB0ZXI6IG5ldyBBZGFwdGVyKCkgfSk7XG5cbi8vIGNvbnN0IG1pZGRsZXdhcmVzID0gW107IC8vIHlvdSBjYW4gbW9jayBhbnkgbWlkZGxld2FyZXMgaGVyZSBpZiBuZWNlc3NhcnlcbmNvbnN0IG1vY2tTdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKCk7XG5cbi8vIGRlc2NyaWJlKCdUZXN0aW5nIFN1cGVydmlzb3JRdWV1ZVNjcmVlbicsICgpID0+IHtcbi8vICAgaXQoJ3JlbmRlcnMgYXMgZXhwZWN0ZWQnLCAoKSA9PiB7XG4vLyAgICAgY29uc3Qgd3JhcHBlciA9IHNoYWxsb3coPFN1cGVydmlzb3JRdWV1ZVNjcmVlbiAgLz4sIHtcbi8vICAgICAgIGNvbnRleHQ6IHsgc3RvcmU6IG1vY2tTdG9yZShpbml0aWFsU3RhdGUpIH1cbi8vICAgICB9KTtcbi8vICAgICBleHBlY3Qod3JhcHBlci5kaXZlKCkpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuLy8gICB9KTtcbi8vIH0pO1xuLy9qZXN0Lm1vY2soJ3JlYWN0LW5hdmlnYXRpb24nLCAoe3dpdGhOYXZpZ2F0aW9uOiAoY29tcG9uZW50OiBTdXBlcnZpc29yUXVldWVTY3JlZW4pID0+IGNvbXBvbmVudH0pKTtcbmJlZm9yZUVhY2goKCkgPT4ge30pO1xuZGVzY3JpYmUoJ1N1cGVydmlzb3JRdWV1ZVNjcmVlbiByZW5kZXJpbmcnLCAoKSA9PiB7XG4gIC8vIGNvbnN0IGNvbnRhaW5lciA9IHNoYWxsb3coPFN1cGVydmlzb3JRdWV1ZVNjcmVlbiAvPik7XG4gIC8vIGl0KCdzaG91bGQgcmVuZGVyIGEgPERyYWdDb250YWluZXIvPicsICgpID0+IHtcbiAgLy8gICBleHBlY3QoY29udGFpbmVyKS50b01hdGNoU25hcHNob3QoKTtcbiAgLy8gfSk7XG5cbiAgLy8gICBjb25zdCB0cmVlID0gcmVuZGVyZXIuY3JlYXRlKDxTdXBlcnZpc29yUXVldWVTY3JlZW4gLz4pLnRvSlNPTigpO1xuICAvLyAgIGV4cGVjdCh0cmVlKS50b01hdGNoU25hcHNob3QoKTtcblxuICBjb25zdCBuYXZpZ2F0aW9uID0ge1xuICAgIG5hdmlnYXRlOiBqZXN0LmZuKCksXG4gICAgZGlzcGF0Y2g6IGplc3QuZm4oKSxcbiAgICBzdGF0ZToge30sXG4gICAgZ29CYWNrOiBqZXN0LmZuKCksXG4gICAgZGlzbWlzczogamVzdC5mbigpLFxuICAgIG9wZW5EcmF3ZXI6IGplc3QuZm4oKSxcbiAgICBjbG9zZURyYXdlcjogamVzdC5mbigpLFxuICAgIHRvZ2dsZURyYXdlcjogamVzdC5mbigpLFxuICAgIGdldFBhcmFtOiBqZXN0LmZuKCksXG4gICAgc2V0UGFyYW1zOiBqZXN0LmZuKCksXG4gICAgYWRkTGlzdGVuZXI6IGplc3QuZm4oKSxcbiAgICBwdXNoOiBqZXN0LmZuKCksXG4gICAgcmVwbGFjZTogamVzdC5mbigpLFxuICAgIHBvcDogamVzdC5mbigpLFxuICAgIHBvcFRvVG9wOiBqZXN0LmZuKCksXG4gICAgaXNGb2N1c2VkOiBqZXN0LmZuKClcbiAgfTtcblxuICBsZXQgd3JhcHBlcjogYW55LCBzdG9yZTtcbiAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0geyB0ZWFtTWVtYmVyczogW10sIGVycm9yOiAnJyB9O1xuICAgIHN0b3JlID0gbW9ja1N0b3JlKGluaXRpYWxTdGF0ZSk7XG4gICAgd3JhcHBlciA9IHNoYWxsb3coXG4gICAgICA8U3VwZXJ2aXNvclF1ZXVlU2NyZWVuXG4gICAgICAgIC8vIHRlYW1NZW1iZXJzPXtpbml0aWFsU3RhdGUudGVhbU1lbWJlcnN9XG4gICAgICAgIC8vIGVycm9yPXsnJ31cbiAgICAgICAgbmF2aWdhdGlvbj17bmF2aWdhdGlvbn1cbiAgICAgICAgLy8gc3RvcmU9e21vY2tTdG9yZX1cbiAgICAgICAgLy8gey4uLnByb3BzfVxuICAgICAgLz4sXG4gICAgICB7IGNvbnRleHQ6IHsgc3RvcmUgfSB9XG4gICAgKTtcbiAgfSk7XG5cbiAgaXQoJ3JlbmRlcnMgY29ycmVjdGx5JywgKCkgPT4ge1xuICAgIC8vIGNvbnN0IGNvbXBvbmVudCA9IHdyYXBwZXIuZGl2ZSgpO1xuICAgIGV4cGVjdCh0b0pzb24od3JhcHBlcikpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuICB9KTtcbn0pO1xuXG4vLyB0ZXN0KCdyZW5kZXJzIGNvcnJlY3RseScsICgpID0+IHtcbi8vICAgY29uc3QgbmF2aWdhdGlvbiA9IHtcbi8vICAgICBuYXZpZ2F0ZTogamVzdC5mbigpLFxuLy8gICAgIGRpc3BhdGNoOiBqZXN0LmZuKCksXG4vLyAgICAgc3RhdGU6IHt9LFxuLy8gICAgIGdvQmFjazogamVzdC5mbigpLFxuLy8gICAgIGRpc21pc3M6IGplc3QuZm4oKSxcbi8vICAgICBvcGVuRHJhd2VyOiBqZXN0LmZuKCksXG4vLyAgICAgY2xvc2VEcmF3ZXI6IGplc3QuZm4oKSxcbi8vICAgICB0b2dnbGVEcmF3ZXI6IGplc3QuZm4oKSxcbi8vICAgICBnZXRQYXJhbTogamVzdC5mbigpLFxuLy8gICAgIHNldFBhcmFtczogamVzdC5mbigpLFxuLy8gICAgIGFkZExpc3RlbmVyOiBqZXN0LmZuKCksXG4vLyAgICAgcHVzaDogamVzdC5mbigpLFxuLy8gICAgIHJlcGxhY2U6IGplc3QuZm4oKSxcbi8vICAgICBwb3A6IGplc3QuZm4oKSxcbi8vICAgICBwb3BUb1RvcDogamVzdC5mbigpLFxuLy8gICAgIGlzRm9jdXNlZDogamVzdC5mbigpXG4vLyAgIH07XG4vLyAgIGNvbnN0IHRyZWUgPSByZW5kZXJlclxuLy8gICAgIC5jcmVhdGUoPFN1cGVydmlzb3JRdWV1ZVNjcmVlbiBuYXZpZ2F0aW9uPXtuYXZpZ2F0aW9ufSAvPilcbi8vICAgICAudG9KU09OKCk7XG4vLyAgIGV4cGVjdCh0cmVlKS50b01hdGNoU25hcHNob3QoKTtcbi8vIH0pO1xuIl0sInZlcnNpb24iOjN9