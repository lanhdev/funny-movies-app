import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import MovieList from "./MovieList";
import MovieItem from "../../components/MovieItem/MovieItem";

configure({ adapter: new Adapter() });

describe("<MovieList />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MovieList />);
  });

  it("should not render MovieItem component if movie items state is empty", () => {
    expect(wrapper.find(MovieItem).exists()).toEqual(false);
  });

  it("should render MoviePlayer and MovieInfo components if state and props have data", () => {
    wrapper.setState({
      movieItems: [
        { id: 1, url: "url1", username: "user1" },
        { id: 2, url: "url2", username: "user2" },
      ],
    });
    expect(wrapper.find(MovieItem)).toHaveLength(2);
  });
});
