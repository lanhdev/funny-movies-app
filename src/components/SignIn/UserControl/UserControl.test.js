import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { UserControl } from "./UserControl";

configure({ adapter: new Adapter() });

describe("<UserControl />", () => {
  it("should have username form, password form and sign in button", () => {
    const wrapper = shallow(<UserControl />);
    expect(wrapper.find("div#cucumber-welcome-user").exists()).toEqual(true);
    expect(wrapper.find("button#cucumber-share-button").exists()).toEqual(true);
    expect(wrapper.find("button#cucumber-logout-button").exists()).toEqual(
      true
    );
  });
});
