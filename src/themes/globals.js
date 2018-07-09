import { injectGlobal } from "styled-components";
import RobotoRegular from "../fonts/Roboto-Regular.ttf";
import RobotoBold from "../fonts/Roboto-Bold.ttf";

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  @font-face {
    font-family: 'Roboto';
    font-weight: normal
    src: url(${RobotoRegular});
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 500
    src: url(${RobotoBold});
  }

  * { 
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }
`;

// export default globals;
