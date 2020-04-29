import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import MovieItem from "./MovieItem";
import MoviePlayer from "./MoviePlayer/MoviePlayer";
import MovieInfo from "./MovieInfo/MovieInfo";

configure({ adapter: new Adapter() });

describe("<MovieItem />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MovieItem />);
  });

  it("should not render MoviePlayer and MovieInfo components if state and props are blank", () => {
    expect(wrapper.find(MoviePlayer).exists()).toEqual(false);
    expect(wrapper.find(MovieInfo).exists()).toEqual(false);
  });

  it("should render MoviePlayer and MovieInfo components if state and props have data", () => {
    wrapper.setState({ movieTitle: "title", movieDescription: "description" });
    wrapper.setProps({ youtubeVideoId: 1 });
    expect(wrapper.find(MoviePlayer).exists()).toEqual(true);
    expect(wrapper.find(MovieInfo).exists()).toEqual(true);
  });
});
