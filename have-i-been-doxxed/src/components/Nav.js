import React from "react";
import { Box, Text, ResponsiveContext, RoutedAnchor, Button } from "grommet";
import { View } from "grommet-icons";

const Nav = (props) => {
  const size = React.useContext(ResponsiveContext);
  const { themeChecked, onThemeChange } = props;

  //   const handleThemeChange = () => {
  //     onThemeChange(!themeChecked);
  //   };

  return (
    <Box
      tag="header"
      direction="row"
      align="center"
      justify="between"
      width="xlarge"
      alignSelf="center"
      gap="medium"
      pad={{ left: "medium", right: "small", vertical: "small" }}
      {...props}
    >
      <RoutedAnchor
        path="/"
        icon={<View size="medium" />}
        color="#fac000"
        label={size !== "small" && <Text size="xlarge">Doxxed</Text>}
      />
      <Box direction="row" gap="small">
        <Button
          primary
          label="Connect Wallet"
          size="large"
          color="#fac000"
        ></Button>
      </Box>
    </Box>
  );
};

export default Nav;
