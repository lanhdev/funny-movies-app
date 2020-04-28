import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Logo from "./Logo";

configure({ adapter: new Adapter() });

describe("<Logo />", () => {
  it("should have img and a tags", () => {
    const wrapper = shallow(<Logo />);
    expect(wrapper.find("img").exists()).toEqual(true);
    expect(wrapper.find("a").text()).toEqual('Funny Movies');
  });
});
