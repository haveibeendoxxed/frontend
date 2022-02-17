import React from "react";
import { Box, Text, ResponsiveContext, RoutedAnchor, Button } from "grommet";
import { Cloud } from "grommet-icons";

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
        icon={<Cloud size="large" />}
        label={size !== "small" && <Text size="xlarge">Doxxed</Text>}
      />
      <Box direction="row" gap="small">
        <Button plain href="https://" target="_blank" rel="noreferrer">
          {({ hover }) => (
            <Box
              pad={{ vertical: "small", horizontal: "medium" }}
              round="xlarge"
              background={hover ? "active" : "control"}
              direction="row"
              gap="small"
            >
              {/* <View /> */}
              <Text icon>Connect Wallet</Text>
            </Box>
          )}
        </Button>
      </Box>
    </Box>
  );
};

export default Nav;
