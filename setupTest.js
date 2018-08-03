import "jest-styled-components";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "unfetch/polyfill";

Enzyme.configure({ adapter: new Adapter() });
