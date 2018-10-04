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
        wrapper = enzyme_1.shallow(react_1.default.createElement(SupervisorQueueScreen_1.default, { navigation: navigation }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9zY3JlZW5zL19fdGVzdHNfXy9zdXBlcnZpc29yLXF1ZXF1ZS10ZXN0cy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBNEM7QUFDNUMsa0RBQTBCO0FBQzFCLHdFQUE4QztBQUs5Qyx3Q0FBd0M7QUFDeEMscUZBQTZEO0FBQzdELHNGQUE4QztBQUU5QyxrQkFBUyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksaUNBQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUV0Qyw0RUFBNEU7QUFDNUUsTUFBTSxTQUFTLEdBQUcsMEJBQWMsRUFBRSxDQUFDO0FBRW5DLG9EQUFvRDtBQUNwRCxzQ0FBc0M7QUFDdEMsNERBQTREO0FBQzVELG9EQUFvRDtBQUNwRCxVQUFVO0FBQ1YsZ0RBQWdEO0FBQ2hELFFBQVE7QUFDUixNQUFNO0FBQ04scUdBQXFHO0FBQ3JHLFFBQVEsQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLEVBQUU7SUFDckMsTUFBTSxVQUFVLEdBQUc7UUFDakIsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7UUFDbkIsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7UUFDbkIsS0FBSyxFQUFFLEVBQUU7UUFDVCxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUNqQixPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUNsQixVQUFVLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUNyQixXQUFXLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUN0QixZQUFZLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUN2QixRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUNuQixTQUFTLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUNwQixXQUFXLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUN0QixJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUNmLE9BQU8sRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1FBQ2xCLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1FBQ2QsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7UUFDbkIsU0FBUyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7S0FDckIsQ0FBQztJQUVGLDJCQUEyQjtJQUMzQixxQkFBcUI7SUFDckIseURBQXlEO0lBQ3pELHFDQUFxQztJQUNyQyx1QkFBdUI7SUFDdkIsNkJBQTZCO0lBQzdCLGtEQUFrRDtJQUNsRCxzQkFBc0I7SUFDdEIsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3QixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLDZCQUE2QjtJQUM3QixPQUFPO0lBQ1AsTUFBTTtJQUVOLGtDQUFrQztJQUNsQyx5Q0FBeUM7SUFDekMsK0NBQStDO0lBQy9DLE1BQU07SUFDTixJQUFJLE9BQVksRUFBRSxLQUFLLENBQUM7SUFFeEIsVUFBVSxDQUFDLEdBQUcsRUFBRTtRQUNkLE1BQU0sWUFBWSxHQUFHLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDcEQsS0FBSyxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNoQyx5REFBeUQ7UUFDekQsT0FBTyxHQUFHLGdCQUFPLENBQUMsOEJBQUMsK0JBQXFCLElBQUMsVUFBVSxFQUFFLFVBQVUsR0FBSSxDQUFDLENBQUM7SUFDdkUsQ0FBQyxDQUFDLENBQUM7SUFDSCxnRkFBZ0Y7SUFDaEYsRUFBRSxDQUFDLGtDQUFrQyxFQUFFLEdBQUcsRUFBRTtRQUMxQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDcEMsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQztBQUVILG9DQUFvQztBQUNwQyx5QkFBeUI7QUFDekIsMkJBQTJCO0FBQzNCLDJCQUEyQjtBQUMzQixpQkFBaUI7QUFDakIseUJBQXlCO0FBQ3pCLDBCQUEwQjtBQUMxQiw2QkFBNkI7QUFDN0IsOEJBQThCO0FBQzlCLCtCQUErQjtBQUMvQiwyQkFBMkI7QUFDM0IsNEJBQTRCO0FBQzVCLDhCQUE4QjtBQUM5Qix1QkFBdUI7QUFDdkIsMEJBQTBCO0FBQzFCLHNCQUFzQjtBQUN0QiwyQkFBMkI7QUFDM0IsMkJBQTJCO0FBQzNCLE9BQU87QUFDUCwwQkFBMEI7QUFDMUIsaUVBQWlFO0FBQ2pFLGlCQUFpQjtBQUNqQixvQ0FBb0M7QUFDcEMsTUFBTSIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMvYW82MC9EZXNrdG9wL1dvcmtGaWxlcy9Xb3JrbGlua0RlbW8vc3JjL1JlYWN0L3NjcmVlbnMvX190ZXN0c19fL3N1cGVydmlzb3ItcXVlcXVlLXRlc3RzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzaGFsbG93LCBjb25maWd1cmUgfSBmcm9tICdlbnp5bWUnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tICdyZWR1eC1tb2NrLXN0b3JlJztcbmltcG9ydCB0b0pzb24gZnJvbSAnZW56eW1lLXRvLWpzb24nO1xuaW1wb3J0IHt9IGZyb20gJ3RzLWplc3QnO1xuaW1wb3J0IHJlbmRlcmVyIGZyb20gJ3JlYWN0LXRlc3QtcmVuZGVyZXInO1xuaW1wb3J0IFByb3BzIGZyb20gJy4uL1N1cGVydmlzb3JRdWV1ZVNjcmVlbic7XG4vLyBpbXBvcnRlZCBhcyBhbiB1bmNvbm5lY3RlZCBjb21wb25lbnQhXG5pbXBvcnQgU3VwZXJ2aXNvclF1ZXVlU2NyZWVuIGZyb20gJy4uL1N1cGVydmlzb3JRdWV1ZVNjcmVlbic7XG5pbXBvcnQgQWRhcHRlciBmcm9tICdlbnp5bWUtYWRhcHRlci1yZWFjdC0xNic7XG5cbmNvbmZpZ3VyZSh7IGFkYXB0ZXI6IG5ldyBBZGFwdGVyKCkgfSk7XG5cbi8vIGNvbnN0IG1pZGRsZXdhcmVzID0gW107IC8vIHlvdSBjYW4gbW9jayBhbnkgbWlkZGxld2FyZXMgaGVyZSBpZiBuZWNlc3NhcnlcbmNvbnN0IG1vY2tTdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKCk7XG5cbi8vIGRlc2NyaWJlKCdUZXN0aW5nIFN1cGVydmlzb3JRdWV1ZVNjcmVlbicsICgpID0+IHtcbi8vICAgaXQoJ3JlbmRlcnMgYXMgZXhwZWN0ZWQnLCAoKSA9PiB7XG4vLyAgICAgY29uc3Qgd3JhcHBlciA9IHNoYWxsb3coPFN1cGVydmlzb3JRdWV1ZVNjcmVlbiAgLz4sIHtcbi8vICAgICAgIGNvbnRleHQ6IHsgc3RvcmU6IG1vY2tTdG9yZShpbml0aWFsU3RhdGUpIH1cbi8vICAgICB9KTtcbi8vICAgICBleHBlY3Qod3JhcHBlci5kaXZlKCkpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuLy8gICB9KTtcbi8vIH0pO1xuLy9qZXN0Lm1vY2soJ3JlYWN0LW5hdmlnYXRpb24nLCAoe3dpdGhOYXZpZ2F0aW9uOiAoY29tcG9uZW50OiBTdXBlcnZpc29yUXVldWVTY3JlZW4pID0+IGNvbXBvbmVudH0pKTtcbmRlc2NyaWJlKCdTdXBlcnZpc29yUXVldWVTY3JlZW4nLCAoKSA9PiB7XG4gIGNvbnN0IG5hdmlnYXRpb24gPSB7XG4gICAgbmF2aWdhdGU6IGplc3QuZm4oKSxcbiAgICBkaXNwYXRjaDogamVzdC5mbigpLFxuICAgIHN0YXRlOiB7fSxcbiAgICBnb0JhY2s6IGplc3QuZm4oKSxcbiAgICBkaXNtaXNzOiBqZXN0LmZuKCksXG4gICAgb3BlbkRyYXdlcjogamVzdC5mbigpLFxuICAgIGNsb3NlRHJhd2VyOiBqZXN0LmZuKCksXG4gICAgdG9nZ2xlRHJhd2VyOiBqZXN0LmZuKCksXG4gICAgZ2V0UGFyYW06IGplc3QuZm4oKSxcbiAgICBzZXRQYXJhbXM6IGplc3QuZm4oKSxcbiAgICBhZGRMaXN0ZW5lcjogamVzdC5mbigpLFxuICAgIHB1c2g6IGplc3QuZm4oKSxcbiAgICByZXBsYWNlOiBqZXN0LmZuKCksXG4gICAgcG9wOiBqZXN0LmZuKCksXG4gICAgcG9wVG9Ub3A6IGplc3QuZm4oKSxcbiAgICBpc0ZvY3VzZWQ6IGplc3QuZm4oKVxuICB9O1xuXG4gIC8vIGxldCB3cmFwcGVyOiBhbnksIHN0b3JlO1xuICAvLyBiZWZvcmVFYWNoKCgpID0+IHtcbiAgLy8gICBjb25zdCBpbml0aWFsU3RhdGUgPSB7IHRlYW1NZW1iZXJzOiBbXSwgZXJyb3I6ICcnIH07XG4gIC8vICAgc3RvcmUgPSBtb2NrU3RvcmUoaW5pdGlhbFN0YXRlKTtcbiAgLy8gICB3cmFwcGVyID0gc2hhbGxvdyhcbiAgLy8gICAgIDxTdXBlcnZpc29yUXVldWVTY3JlZW5cbiAgLy8gICAgICAgLy8gdGVhbU1lbWJlcnM9e2luaXRpYWxTdGF0ZS50ZWFtTWVtYmVyc31cbiAgLy8gICAgICAgLy8gZXJyb3I9eycnfVxuICAvLyAgICAgICBuYXZpZ2F0aW9uPXtuYXZpZ2F0aW9ufVxuICAvLyAgICAgICAvLyBzdG9yZT17bW9ja1N0b3JlfVxuICAvLyAgICAgICAvLyB7Li4ucHJvcHN9XG4gIC8vICAgICAvPixcbiAgLy8gICAgIHsgY29udGV4dDogeyBzdG9yZSB9IH1cbiAgLy8gICApO1xuICAvLyB9KTtcblxuICAvLyBpdCgncmVuZGVycyBjb3JyZWN0bHknLCAoKSA9PiB7XG4gIC8vICAgLy8gY29uc3QgY29tcG9uZW50ID0gd3JhcHBlci5kaXZlKCk7XG4gIC8vICAgZXhwZWN0KHRvSnNvbih3cmFwcGVyKSkudG9NYXRjaFNuYXBzaG90KCk7XG4gIC8vIH0pO1xuICBsZXQgd3JhcHBlcjogYW55LCBzdG9yZTtcblxuICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB7IHRlYW1NZW1iZXJzOiBbXSwgZXJyb3I6ICcnIH07XG4gICAgc3RvcmUgPSBtb2NrU3RvcmUoaW5pdGlhbFN0YXRlKTtcbiAgICAvLyBTaGFsbG93IHJlbmRlciB0aGUgY29udGFpbmVyIHBhc3NpbmcgaW4gdGhlIG1vY2sgc3RvcmVcbiAgICB3cmFwcGVyID0gc2hhbGxvdyg8U3VwZXJ2aXNvclF1ZXVlU2NyZWVuIG5hdmlnYXRpb249e25hdmlnYXRpb259IC8+KTtcbiAgfSk7XG4gIC8vIGNvbnN0IGNvbnRhaW5lciA9IHNoYWxsb3coPFN1cGVydmlzb3JRdWV1ZVNjcmVlbiBuYXZpZ2F0aW9uPXtuYXZpZ2F0aW9ufSAvPik7XG4gIGl0KCdzaG91bGQgcmVuZGVyIGEgPERyYWdDb250YWluZXIvPicsICgpID0+IHtcbiAgICBleHBlY3Qod3JhcHBlcikudG9NYXRjaFNuYXBzaG90KCk7XG4gIH0pO1xufSk7XG5cbi8vIHRlc3QoJ3JlbmRlcnMgY29ycmVjdGx5JywgKCkgPT4ge1xuLy8gICBjb25zdCBuYXZpZ2F0aW9uID0ge1xuLy8gICAgIG5hdmlnYXRlOiBqZXN0LmZuKCksXG4vLyAgICAgZGlzcGF0Y2g6IGplc3QuZm4oKSxcbi8vICAgICBzdGF0ZToge30sXG4vLyAgICAgZ29CYWNrOiBqZXN0LmZuKCksXG4vLyAgICAgZGlzbWlzczogamVzdC5mbigpLFxuLy8gICAgIG9wZW5EcmF3ZXI6IGplc3QuZm4oKSxcbi8vICAgICBjbG9zZURyYXdlcjogamVzdC5mbigpLFxuLy8gICAgIHRvZ2dsZURyYXdlcjogamVzdC5mbigpLFxuLy8gICAgIGdldFBhcmFtOiBqZXN0LmZuKCksXG4vLyAgICAgc2V0UGFyYW1zOiBqZXN0LmZuKCksXG4vLyAgICAgYWRkTGlzdGVuZXI6IGplc3QuZm4oKSxcbi8vICAgICBwdXNoOiBqZXN0LmZuKCksXG4vLyAgICAgcmVwbGFjZTogamVzdC5mbigpLFxuLy8gICAgIHBvcDogamVzdC5mbigpLFxuLy8gICAgIHBvcFRvVG9wOiBqZXN0LmZuKCksXG4vLyAgICAgaXNGb2N1c2VkOiBqZXN0LmZuKClcbi8vICAgfTtcbi8vICAgY29uc3QgdHJlZSA9IHJlbmRlcmVyXG4vLyAgICAgLmNyZWF0ZSg8U3VwZXJ2aXNvclF1ZXVlU2NyZWVuIG5hdmlnYXRpb249e25hdmlnYXRpb259IC8+KVxuLy8gICAgIC50b0pTT04oKTtcbi8vICAgZXhwZWN0KHRyZWUpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuLy8gfSk7XG4iXSwidmVyc2lvbiI6M30=