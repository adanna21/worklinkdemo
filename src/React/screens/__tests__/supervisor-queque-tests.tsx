import { shallow, configure } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';
import {} from 'ts-jest';
import renderer from 'react-test-renderer';
import Props from '../SupervisorQueueScreen';
import { ITeamMember } from '../../../Redux/drag-and-drop/types';
// imported as a connected component!
import SupervisorQueueScreen from '../SupervisorQueueScreen';
import Adapter from 'enzyme-adapter-react-16';
import { teamMembers } from '../../../config/jest/mockData';

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
  interface IInitialState {
    teamMembers: ITeamMember;
    error: string;
  }

  beforeEach(() => {
    const initialState = { teamMembers: [{ id: '' }], error: '' };

    store = mockStore(initialState);
    // Shallow render the container passing in the mock store
    wrapper = shallow(
      <SupervisorQueueScreen
        navigation={navigation}
        // teamMembers={initialState.teamMembers}
        // error={initialState.error}
      />,
      {
        context: { store }
      }
    );
  });
  it('renders correctly', () => {
    const component = wrapper.dive();
    expect(component).toMatchSnapshot();
  });
});
