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
            navigation: navigation }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9zY3JlZW5zL19fdGVzdHNfXy9zdXBlcnZpc29yLXF1ZXF1ZS10ZXN0cy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBaUM7QUFDakMsa0RBQTBCO0FBQzFCLHdFQUE4QztBQUM5QyxvRUFBb0M7QUFLcEMsd0NBQXdDO0FBQ3hDLHFGQUE2RDtBQUU3RCw0RUFBNEU7QUFDNUUsTUFBTSxTQUFTLEdBQUcsMEJBQWMsRUFBRSxDQUFDO0FBRW5DLE1BQU0sWUFBWSxHQUFHO0lBQ25CLFdBQVcsRUFBRSxFQUFFO0lBQ2YsS0FBSyxFQUFFLEVBQUU7Q0FDVixDQUFDO0FBRUYsb0RBQW9EO0FBQ3BELHNDQUFzQztBQUN0Qyw0REFBNEQ7QUFDNUQsb0RBQW9EO0FBQ3BELFVBQVU7QUFDVixnREFBZ0Q7QUFDaEQsUUFBUTtBQUNSLE1BQU07QUFDTixxR0FBcUc7QUFFckcsUUFBUSxDQUFDLGlDQUFpQyxFQUFFLEdBQUcsRUFBRTtJQUMvQyx3REFBd0Q7SUFDeEQsaURBQWlEO0lBQ2pELHlDQUF5QztJQUN6QyxNQUFNO0lBQ04sRUFBRSxDQUFDLG1CQUFtQixFQUFFLEdBQUcsRUFBRTtRQUMzQixzRUFBc0U7UUFDdEUsb0NBQW9DO1FBRXBDLE1BQU0sVUFBVSxHQUFHO1lBQ2pCLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ25CLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ25CLEtBQUssRUFBRSxFQUFFO1lBQ1QsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDakIsT0FBTyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDbEIsVUFBVSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDckIsV0FBVyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDdEIsWUFBWSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDdkIsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDbkIsU0FBUyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDcEIsV0FBVyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDdEIsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDZixPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNsQixHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNkLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ25CLFNBQVMsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1NBQ3JCLENBQUM7UUFFRixNQUFNLE9BQU8sR0FBRyxnQkFBTyxDQUNyQiw4QkFBQywrQkFBcUI7UUFDcEIsa0JBQWtCO1FBQ2xCLFlBQVk7O1lBRFosa0JBQWtCO1lBQ2xCLFlBQVk7WUFDWixVQUFVLEVBQUUsVUFBVSxHQUV0QixDQUNILENBQUM7UUFDRixNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDakMsTUFBTSxDQUFDLHdCQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUM5QyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBRUgsb0NBQW9DO0FBQ3BDLHlCQUF5QjtBQUN6QiwyQkFBMkI7QUFDM0IsMkJBQTJCO0FBQzNCLGlCQUFpQjtBQUNqQix5QkFBeUI7QUFDekIsMEJBQTBCO0FBQzFCLDZCQUE2QjtBQUM3Qiw4QkFBOEI7QUFDOUIsK0JBQStCO0FBQy9CLDJCQUEyQjtBQUMzQiw0QkFBNEI7QUFDNUIsOEJBQThCO0FBQzlCLHVCQUF1QjtBQUN2QiwwQkFBMEI7QUFDMUIsc0JBQXNCO0FBQ3RCLDJCQUEyQjtBQUMzQiwyQkFBMkI7QUFDM0IsT0FBTztBQUNQLDBCQUEwQjtBQUMxQixpRUFBaUU7QUFDakUsaUJBQWlCO0FBQ2pCLG9DQUFvQztBQUNwQyxNQUFNIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbzYwL0Rlc2t0b3AvV29ya0ZpbGVzL1dvcmtsaW5rRGVtby9zcmMvUmVhY3Qvc2NyZWVucy9fX3Rlc3RzX18vc3VwZXJ2aXNvci1xdWVxdWUtdGVzdHMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNoYWxsb3cgfSBmcm9tICdlbnp5bWUnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tICdyZWR1eC1tb2NrLXN0b3JlJztcbmltcG9ydCB0b0pzb24gZnJvbSAnZW56eW1lLXRvLWpzb24nO1xuaW1wb3J0IHt9IGZyb20gJ3RzLWplc3QnO1xuaW1wb3J0IHJlbmRlcmVyIGZyb20gJ3JlYWN0LXRlc3QtcmVuZGVyZXInO1xuaW1wb3J0IFByb3BzIGZyb20gJy4uL1N1cGVydmlzb3JRdWV1ZVNjcmVlbic7XG5cbi8vIGltcG9ydGVkIGFzIGFuIHVuY29ubmVjdGVkIGNvbXBvbmVudCFcbmltcG9ydCBTdXBlcnZpc29yUXVldWVTY3JlZW4gZnJvbSAnLi4vU3VwZXJ2aXNvclF1ZXVlU2NyZWVuJztcblxuLy8gY29uc3QgbWlkZGxld2FyZXMgPSBbXTsgLy8geW91IGNhbiBtb2NrIGFueSBtaWRkbGV3YXJlcyBoZXJlIGlmIG5lY2Vzc2FyeVxuY29uc3QgbW9ja1N0b3JlID0gY29uZmlndXJlU3RvcmUoKTtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICB0ZWFtTWVtYmVyczogW10sXG4gIGVycm9yOiAnJ1xufTtcblxuLy8gZGVzY3JpYmUoJ1Rlc3RpbmcgU3VwZXJ2aXNvclF1ZXVlU2NyZWVuJywgKCkgPT4ge1xuLy8gICBpdCgncmVuZGVycyBhcyBleHBlY3RlZCcsICgpID0+IHtcbi8vICAgICBjb25zdCB3cmFwcGVyID0gc2hhbGxvdyg8U3VwZXJ2aXNvclF1ZXVlU2NyZWVuICAvPiwge1xuLy8gICAgICAgY29udGV4dDogeyBzdG9yZTogbW9ja1N0b3JlKGluaXRpYWxTdGF0ZSkgfVxuLy8gICAgIH0pO1xuLy8gICAgIGV4cGVjdCh3cmFwcGVyLmRpdmUoKSkudG9NYXRjaFNuYXBzaG90KCk7XG4vLyAgIH0pO1xuLy8gfSk7XG4vL2plc3QubW9jaygncmVhY3QtbmF2aWdhdGlvbicsICh7d2l0aE5hdmlnYXRpb246IChjb21wb25lbnQ6IFN1cGVydmlzb3JRdWV1ZVNjcmVlbikgPT4gY29tcG9uZW50fSkpO1xuXG5kZXNjcmliZSgnU3VwZXJ2aXNvclF1ZXVlU2NyZWVuIHJlbmRlcmluZycsICgpID0+IHtcbiAgLy8gY29uc3QgY29udGFpbmVyID0gc2hhbGxvdyg8U3VwZXJ2aXNvclF1ZXVlU2NyZWVuIC8+KTtcbiAgLy8gaXQoJ3Nob3VsZCByZW5kZXIgYSA8RHJhZ0NvbnRhaW5lci8+JywgKCkgPT4ge1xuICAvLyAgIGV4cGVjdChjb250YWluZXIpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuICAvLyB9KTtcbiAgaXQoJ3JlbmRlcnMgY29ycmVjdGx5JywgKCkgPT4ge1xuICAgIC8vICAgY29uc3QgdHJlZSA9IHJlbmRlcmVyLmNyZWF0ZSg8U3VwZXJ2aXNvclF1ZXVlU2NyZWVuIC8+KS50b0pTT04oKTtcbiAgICAvLyAgIGV4cGVjdCh0cmVlKS50b01hdGNoU25hcHNob3QoKTtcblxuICAgIGNvbnN0IG5hdmlnYXRpb24gPSB7XG4gICAgICBuYXZpZ2F0ZTogamVzdC5mbigpLFxuICAgICAgZGlzcGF0Y2g6IGplc3QuZm4oKSxcbiAgICAgIHN0YXRlOiB7fSxcbiAgICAgIGdvQmFjazogamVzdC5mbigpLFxuICAgICAgZGlzbWlzczogamVzdC5mbigpLFxuICAgICAgb3BlbkRyYXdlcjogamVzdC5mbigpLFxuICAgICAgY2xvc2VEcmF3ZXI6IGplc3QuZm4oKSxcbiAgICAgIHRvZ2dsZURyYXdlcjogamVzdC5mbigpLFxuICAgICAgZ2V0UGFyYW06IGplc3QuZm4oKSxcbiAgICAgIHNldFBhcmFtczogamVzdC5mbigpLFxuICAgICAgYWRkTGlzdGVuZXI6IGplc3QuZm4oKSxcbiAgICAgIHB1c2g6IGplc3QuZm4oKSxcbiAgICAgIHJlcGxhY2U6IGplc3QuZm4oKSxcbiAgICAgIHBvcDogamVzdC5mbigpLFxuICAgICAgcG9wVG9Ub3A6IGplc3QuZm4oKSxcbiAgICAgIGlzRm9jdXNlZDogamVzdC5mbigpXG4gICAgfTtcblxuICAgIGNvbnN0IHdyYXBwZXIgPSBzaGFsbG93KFxuICAgICAgPFN1cGVydmlzb3JRdWV1ZVNjcmVlblxuICAgICAgICAvL3RlYW1NZW1iZXJzPXtbXX1cbiAgICAgICAgLy9lcnJvcj17Jyd9XG4gICAgICAgIG5hdmlnYXRpb249e25hdmlnYXRpb259XG4gICAgICAgIC8vIHsuLi5wcm9wc31cbiAgICAgIC8+XG4gICAgKTtcbiAgICBjb25zdCBjb21wb25lbnQgPSB3cmFwcGVyLmRpdmUoKTtcbiAgICBleHBlY3QodG9Kc29uKGNvbXBvbmVudCkpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuICB9KTtcbn0pO1xuXG4vLyB0ZXN0KCdyZW5kZXJzIGNvcnJlY3RseScsICgpID0+IHtcbi8vICAgY29uc3QgbmF2aWdhdGlvbiA9IHtcbi8vICAgICBuYXZpZ2F0ZTogamVzdC5mbigpLFxuLy8gICAgIGRpc3BhdGNoOiBqZXN0LmZuKCksXG4vLyAgICAgc3RhdGU6IHt9LFxuLy8gICAgIGdvQmFjazogamVzdC5mbigpLFxuLy8gICAgIGRpc21pc3M6IGplc3QuZm4oKSxcbi8vICAgICBvcGVuRHJhd2VyOiBqZXN0LmZuKCksXG4vLyAgICAgY2xvc2VEcmF3ZXI6IGplc3QuZm4oKSxcbi8vICAgICB0b2dnbGVEcmF3ZXI6IGplc3QuZm4oKSxcbi8vICAgICBnZXRQYXJhbTogamVzdC5mbigpLFxuLy8gICAgIHNldFBhcmFtczogamVzdC5mbigpLFxuLy8gICAgIGFkZExpc3RlbmVyOiBqZXN0LmZuKCksXG4vLyAgICAgcHVzaDogamVzdC5mbigpLFxuLy8gICAgIHJlcGxhY2U6IGplc3QuZm4oKSxcbi8vICAgICBwb3A6IGplc3QuZm4oKSxcbi8vICAgICBwb3BUb1RvcDogamVzdC5mbigpLFxuLy8gICAgIGlzRm9jdXNlZDogamVzdC5mbigpXG4vLyAgIH07XG4vLyAgIGNvbnN0IHRyZWUgPSByZW5kZXJlclxuLy8gICAgIC5jcmVhdGUoPFN1cGVydmlzb3JRdWV1ZVNjcmVlbiBuYXZpZ2F0aW9uPXtuYXZpZ2F0aW9ufSAvPilcbi8vICAgICAudG9KU09OKCk7XG4vLyAgIGV4cGVjdCh0cmVlKS50b01hdGNoU25hcHNob3QoKTtcbi8vIH0pO1xuIl0sInZlcnNpb24iOjN9