import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import MovieInfo from "./MovieInfo";

configure({ adapter: new Adapter() });

describe("<MovieInfo />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MovieInfo />);
  });

  it("should not render if title is null", () => {
    expect(wrapper.find("div").exists()).toEqual(false);
  });

  it("should have div tag if title is present", () => {
    wrapper.setProps({
      title: "title",
      author: "author",
      description: "description",
    });
    expect(wrapper.find("div")).toHaveLength(5);
  });
});
