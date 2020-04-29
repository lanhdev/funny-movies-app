import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import MoviePlayer from "./MoviePlayer";

configure({ adapter: new Adapter() });

describe("<MoviePlayer />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MoviePlayer />);
  });

  it("should not render if props is null", () => {
    expect(wrapper.find("iframe").exists()).toEqual(false);
  });

  it("should have iframe tag if props is present", () => {
    wrapper.setProps({ youtubeVideoId: 1 });
    expect(wrapper.find("iframe").exists()).toEqual(true);
  });
});
