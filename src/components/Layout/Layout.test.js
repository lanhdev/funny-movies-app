import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Layout from "./Layout";

configure({ adapter: new Adapter() });

describe("<Layout />", () => {
  it("should have main tag", () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper.find("main").exists()).toEqual(true);
  });
});
