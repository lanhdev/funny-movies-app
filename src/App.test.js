import React from 'react';
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from './App';
import Layout from './components/Layout/Layout';
import NavBar from "./components/NavBar/NavBar";

configure({ adapter: new Adapter() });

describe('<App />', () => {
  it ('should render Layout and Navbar components', () => {
    const wrapper = shallow(<App/>)
    expect(wrapper.find(Layout).exists()).toBeTruthy();
    expect(wrapper.find(NavBar).exists()).toBeTruthy();
  })
})

