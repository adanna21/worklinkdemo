import { shallow, configure } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';
import {} from 'ts-jest';
import thunk from 'redux-thunk';
import Props from '../LoginScreen';
import { ITeamMember } from '../../../Redux/drag-and-drop/types';
// imported as a connected component!
import LoginScreen from '../LoginScreen';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const middleware = [thunk];
const mockStore = configureStore(middleware);
describe('Login Screen', () => {
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
    const initialState = {
      userSaved: false,
      loggedIn: false,
      username: '',
      user: false,
      error: ''
    };

    store = mockStore(initialState);
    // Shallow render the container passing in the mock store
    wrapper = shallow(
      <LoginScreen
        navigation={navigation}
        // teamMembers={initialState.teamMembers}
        // error={initialState.error}
      />,
      {
        context: { store }
      }
    );
  });
  it('renders as expected', () => {
    const component = wrapper.dive();
    expect(component).toMatchSnapshot();
  });
});
