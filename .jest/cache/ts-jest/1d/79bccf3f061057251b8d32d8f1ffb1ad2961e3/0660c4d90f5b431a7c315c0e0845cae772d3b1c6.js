"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const enzyme_1 = require("enzyme");
const react_1 = __importDefault(require("react"));
// imported as a connected component!
const SupervisorQueueScreen_1 = __importDefault(require("../SupervisorQueueScreen"));
const middlewares = []; // you can mock any middlewares here if necessary
// const mockStore = configureStore(middlewares);
const initialState = {
    teamMembers: [],
    error: ''
};
// describe('Testing SupervisorQueueScreen', () => {
//   it('renders as expected', () => {
//     const wrapper = shallow(
//       <SupervisorQueueScreen />
//       // { context: { store: mockStore(initialState) } },
//     );
//     expect(wrapper.dive()).toMatchSnapshot();
//   });
// });
// jest.mock('react-native', () => require('react-native-mock'), {
//   virtual: true
// });
describe('SupervisorQueueScreen rendering', () => {
    const container = enzyme_1.shallow(react_1.default.createElement(SupervisorQueueScreen_1.default, null));
    it('should render a <DragContainer/>', () => {
        expect(container).toMatchSnapshot();
    });
    //   it('renders correctly', () => {
    //     const tree = renderer.create(<SupervisorQueueScreen />).toJSON();
    //     expect(tree).toMatchSnapshot();
    //   });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9zY3JlZW5zL19fdGVzdHNfXy9zdXBlcnZpc29yLXF1ZXF1ZS10ZXN0cy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBaUM7QUFDakMsa0RBQTBCO0FBSzFCLHFDQUFxQztBQUNyQyxxRkFBNkQ7QUFFN0QsTUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDLENBQUMsaURBQWlEO0FBQ3pFLGlEQUFpRDtBQUVqRCxNQUFNLFlBQVksR0FBRztJQUNuQixXQUFXLEVBQUUsRUFBRTtJQUNmLEtBQUssRUFBRSxFQUFFO0NBQ1YsQ0FBQztBQUVGLG9EQUFvRDtBQUNwRCxzQ0FBc0M7QUFDdEMsK0JBQStCO0FBQy9CLGtDQUFrQztBQUNsQyw0REFBNEQ7QUFDNUQsU0FBUztBQUNULGdEQUFnRDtBQUNoRCxRQUFRO0FBQ1IsTUFBTTtBQUNOLGtFQUFrRTtBQUNsRSxrQkFBa0I7QUFDbEIsTUFBTTtBQUNOLFFBQVEsQ0FBQyxpQ0FBaUMsRUFBRSxHQUFHLEVBQUU7SUFDL0MsTUFBTSxTQUFTLEdBQUcsZ0JBQU8sQ0FBQyw4QkFBQywrQkFBcUIsT0FBRyxDQUFDLENBQUM7SUFDckQsRUFBRSxDQUFDLGtDQUFrQyxFQUFFLEdBQUcsRUFBRTtRQUMxQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDdEMsQ0FBQyxDQUFDLENBQUM7SUFDSCxvQ0FBb0M7SUFDcEMsd0VBQXdFO0lBQ3hFLHNDQUFzQztJQUN0QyxRQUFRO0FBQ1YsQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC9zY3JlZW5zL19fdGVzdHNfXy9zdXBlcnZpc29yLXF1ZXF1ZS10ZXN0cy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2hhbGxvdyB9IGZyb20gJ2VuenltZSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJ3JlZHV4LW1vY2stc3RvcmUnO1xuaW1wb3J0IHt9IGZyb20gJ3RzLWplc3QnO1xuaW1wb3J0IHJlbmRlcmVyIGZyb20gJ3JlYWN0LXRlc3QtcmVuZGVyZXInO1xuXG4vLyBpbXBvcnRlZCBhcyBhIGNvbm5lY3RlZCBjb21wb25lbnQhXG5pbXBvcnQgU3VwZXJ2aXNvclF1ZXVlU2NyZWVuIGZyb20gJy4uL1N1cGVydmlzb3JRdWV1ZVNjcmVlbic7XG5cbmNvbnN0IG1pZGRsZXdhcmVzID0gW107IC8vIHlvdSBjYW4gbW9jayBhbnkgbWlkZGxld2FyZXMgaGVyZSBpZiBuZWNlc3Nhcnlcbi8vIGNvbnN0IG1vY2tTdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKG1pZGRsZXdhcmVzKTtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICB0ZWFtTWVtYmVyczogW10sXG4gIGVycm9yOiAnJ1xufTtcblxuLy8gZGVzY3JpYmUoJ1Rlc3RpbmcgU3VwZXJ2aXNvclF1ZXVlU2NyZWVuJywgKCkgPT4ge1xuLy8gICBpdCgncmVuZGVycyBhcyBleHBlY3RlZCcsICgpID0+IHtcbi8vICAgICBjb25zdCB3cmFwcGVyID0gc2hhbGxvdyhcbi8vICAgICAgIDxTdXBlcnZpc29yUXVldWVTY3JlZW4gLz5cbi8vICAgICAgIC8vIHsgY29udGV4dDogeyBzdG9yZTogbW9ja1N0b3JlKGluaXRpYWxTdGF0ZSkgfSB9LFxuLy8gICAgICk7XG4vLyAgICAgZXhwZWN0KHdyYXBwZXIuZGl2ZSgpKS50b01hdGNoU25hcHNob3QoKTtcbi8vICAgfSk7XG4vLyB9KTtcbi8vIGplc3QubW9jaygncmVhY3QtbmF0aXZlJywgKCkgPT4gcmVxdWlyZSgncmVhY3QtbmF0aXZlLW1vY2snKSwge1xuLy8gICB2aXJ0dWFsOiB0cnVlXG4vLyB9KTtcbmRlc2NyaWJlKCdTdXBlcnZpc29yUXVldWVTY3JlZW4gcmVuZGVyaW5nJywgKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBzaGFsbG93KDxTdXBlcnZpc29yUXVldWVTY3JlZW4gLz4pO1xuICBpdCgnc2hvdWxkIHJlbmRlciBhIDxEcmFnQ29udGFpbmVyLz4nLCAoKSA9PiB7XG4gICAgZXhwZWN0KGNvbnRhaW5lcikudG9NYXRjaFNuYXBzaG90KCk7XG4gIH0pO1xuICAvLyAgIGl0KCdyZW5kZXJzIGNvcnJlY3RseScsICgpID0+IHtcbiAgLy8gICAgIGNvbnN0IHRyZWUgPSByZW5kZXJlci5jcmVhdGUoPFN1cGVydmlzb3JRdWV1ZVNjcmVlbiAvPikudG9KU09OKCk7XG4gIC8vICAgICBleHBlY3QodHJlZSkudG9NYXRjaFNuYXBzaG90KCk7XG4gIC8vICAgfSk7XG59KTtcbiJdLCJ2ZXJzaW9uIjozfQ==