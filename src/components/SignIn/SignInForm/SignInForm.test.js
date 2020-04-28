import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { SignInForm } from "./SignInForm";

configure({ adapter: new Adapter() });

describe("<SignInForm />", () => {
  it("should have username form, password form and sign in button", () => {
    const wrapper = shallow(<SignInForm />);
    expect(wrapper.find("input#cucumber-username-form").exists()).toEqual(true);
    expect(wrapper.find("input#cucumber-password-form").exists()).toEqual(true);
    expect(wrapper.find("button#cucumber-sign-in-button").exists()).toEqual(true);
  });
});
