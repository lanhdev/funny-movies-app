import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Unauthorized from "./Unauthorized";

configure({ adapter: new Adapter() });

describe("<Unauthorized />", () => {
  it("should have warning message within h2 tag", () => {
    const wrapper = shallow(<Unauthorized />);
    expect(wrapper.find("h2").text()).toContain('401');
  });
});
