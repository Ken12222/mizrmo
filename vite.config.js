// Before
const path = require("path");
module.exports = {
  content: [path.join(__dirname, "src/**/*.{html,js}")],
};

// After
import path from "path";
export default {
  content: [path.join(process.cwd(), "src/**/*.{html,js}")],
};
