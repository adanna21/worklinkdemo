import { shallow, configure } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';
import toJson from 'enzyme-to-json';
import {} from 'ts-jest';
import renderer from 'react-test-renderer';
import Props from '../SupervisorQueueScreen';
// imported as an unconnected component!
import SupervisorQueueScreen from '../SupervisorQueueScreen';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const mockStore = configureStore();
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
  let wrapper: any, store;
  beforeEach(() => {
    const initialState = { teamMembers: [], error: '' };
    store = mockStore(initialState);
    // Shallow render the container passing in the mock store
    wrapper = shallow(<SupervisorQueueScreen navigation={navigation} />, {
      context: { store }
    });
  });
  it('renders correctly', () => {
    const component = wrapper.dive();
    expect(component).toMatchSnapshot();
  });
});
