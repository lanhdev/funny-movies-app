import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { SignIn } from "./SignIn";
import SignInForm from "./SignInForm/SignInForm";
import UserControl from "./UserControl/UserControl";

configure({ adapter: new Adapter() });

describe("<SignIn />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SignIn />);
  });

  it("should render SignInForm component if not signed in", () => {
    expect(wrapper.find(SignInForm).exists()).toEqual(true);
    expect(wrapper.find(UserControl).exists()).toEqual(false);
  });

  it("should render UserControl component if signed in", () => {
    wrapper.setProps({ isSignedIn: true });
    expect(wrapper.find(UserControl).exists()).toEqual(true);
    expect(wrapper.find(SignInForm).exists()).toEqual(false);
  });
});
