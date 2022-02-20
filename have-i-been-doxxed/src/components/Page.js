import React from "react";
import { Box } from "grommet";
import Nav from "./Nav";

const Page = ({ children, background, themeChecked, onThemeChange }) => (
  <Box pad="medium" background="black">
    <Box>
      <Nav themeChecked={themeChecked} onThemeChange={onThemeChange} />
      <Box margin={{ top: "medium" }}>{children}</Box>
    </Box>
  </Box>
);

Page.propTypes = Box.propTypes;

export default Page;
