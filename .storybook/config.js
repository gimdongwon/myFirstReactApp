import { configure } from "@storybook/react";
import "../src/index";

// function loadStories() {
//   require("../src/stories");
// }

// configure(loadStories, module);

const req = require.context("../src/components", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
