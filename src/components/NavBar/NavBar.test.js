import React from 'react';
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import NavBar from "./NavBar";
import Logo from '../Logo/Logo';
import SignIn from '../SignIn/SignIn';

configure({ adapter: new Adapter() });

describe("<NavBar />", () => {
  it("should render Logo and SignIn components", () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper.find(Logo).exists()).toBeTruthy();
    expect(wrapper.find(SignIn).exists()).toBeTruthy();
  });
});
