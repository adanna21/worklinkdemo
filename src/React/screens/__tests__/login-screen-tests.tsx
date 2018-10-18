import { shallow, configure, mount } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';
import {} from 'ts-jest';
import thunk from 'redux-thunk';
import Props from '../LoginScreen';
// imported as a connected component!
import LoginScreen from '../LoginScreen';
import LoginButton from '../../components/Buttons/LoginButton';
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
    wrapper = shallow(<LoginScreen navigation={navigation} />, {
      context: { store }
    });
  });
  it('renders as expected', () => {
    expect(wrapper.dive()).toMatchSnapshot();
  });

  // ======= USERNAME ======== //
  describe('inputs', () => {
    // function to find testID in node tree
    const testID = (id: string) => {
      return (node: React.ReactElement<any>) => node.props().testID === id;
    };
    let render: any;
    beforeEach(() => {
      render = wrapper.dive();
    });
    it('username input should respond to event and change state', () => {
      render.findWhere(testID('usernameInput')).prop('onChangeText')(
        'blah@gmail.com'
      );
      expect(render.state('username')).toEqual('blah@gmail.com');
      // const onPress = jest.fn();
      // render.find('TextInput').forEach((child: any) => {
      //   child.simulate('trash');
      // });
      // expect(handleLogin).toBeCalledTimes(1);
      // render.find('LoginButton').simulate('fish');
    });
    it('password input should respond to event and change state', () => {
      render.findWhere(testID('passwordInput')).prop('onChangeText')(
        'thisisus'
      );
      expect(render.state('password')).toEqual('thisisus');
    });
  });
  // it('onClick function is called with passed counter value', () => {
  //   const fn = jest.fn();
  //   const component = shallow(
  //     <LoginButton handleLogin={fn} navigation={navigation} loggedIn={false} />
  //     // <Button onClick={fn} label="this is test label" />
  //   ).dive();

  //   component.find('text').simulate('onPress');

  //   expect(component.state('loggedIn')).toBe(true);
  //   expect(fn.mock.calls[0][0]).toBe(1);
  // });
});
