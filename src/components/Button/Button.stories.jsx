import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, select, text, boolean } from "@storybook/addon-knobs";
import { jsxDecorator } from "storybook-addon-jsx";

import Button from "./Button";

const types = ["button", "submit", "reset"];
const styles = ["primary", "secondary", "turquoise"];
const sizes = ["small", "normal", "large"];

const stories = storiesOf("Button", module);
stories.addDecorator(withKnobs);
stories.addDecorator(jsxDecorator);

stories.add("with knobs", () => (
  <Button
    onClick={action("Clicked Button")}
    type={select("Type", types, "button")}
    buttonStyle={select("Button Style", styles, "primary")}
    size={select("Size", sizes, "normal")}
    block={boolean("Block", false)}
  >
    {text("Button Text", "Hello Button")}
  </Button>
));
