import {
  Box,
  Button,
  Collapsible,
  Heading,
  Grommet,
  ResponsiveContext,
  Layer,
  TextInput,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Tag,
  Paragraph,
  Text,
} from "grommet";
import { Link, View } from "grommet-icons";
import React, { useState } from "react";
// import Onboard from "bnc-onboard";
// import Web3 from "web3";

import Page from "./components/Page";

// let web3;

// const onboard = Onboard({
//   dappId: "dc1e9457-04fc-48c3-8132-fcd296dd35db",
//   networkId: 4,
//   subscriptions: {
//     wallet: (wallet) => {
//       // instantiate web3 when the user has selected a wallet
//       web3 = new Web3(wallet.provider);
//       console.log(`${wallet.name} connected!`);
//     },
//   },
// });

// async function login() {
//   await onabort.walletSelect();
// }

const theme = {
  global: {
    colors: {
      brand: "#fac000",
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

function App() {
  const [walletAddress, setWalletAddress] = React.useState("");
  const onWalletAddressChange = (event) => setWalletAddress(event.target.value);

  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Page>
            <Box align="center" justify="center">
              <Box align="center" justify="center">
                <Heading
                  level="1"
                  size="large"
                  textAlign="center"
                  margin="none"
                >
                  Have I Been Doxxed?
                </Heading>
                <Paragraph textAlign="center" size="large">
                  Check if your wallet address is doxxed
                </Paragraph>
              </Box>
              <Box align="center" justify="center">
                <Box
                  width="large"
                  direction="row"
                  margin="medium"
                  align="center"
                  round="medium"
                  background="white"
                  border={{
                    size: "medium",
                    color: "black",
                  }}
                >
                  <TextInput
                    value={walletAddress}
                    onChange={onWalletAddressChange}
                    // round="small"
                    placeholder="0x0000000000000000000000000000000000000000"
                    // onSelect={onSelect}
                    // suggestions={suggestions}
                    // defaultSuggestion={1}
                    plain
                  ></TextInput>
                </Box>
                <Button
                  primary
                  label="doxxed?"
                  size="large"
                  color="#fac000"
                  // icon={
                  //   reveal ? <View size="medium" /> : <Hide size="medium" />
                  // }
                  // onClick={() => setReveal(!reveal)}
                  // margin="large"
                />
              </Box>
              <Box margin="large" align="center" justify="center" gap="medium">
                <Heading
                  level="3"
                  size="large"
                  textAlign="center"
                  margin="small"
                >
                  ENS Names
                </Heading>
                {/* <Paragraph textAlign="center" size="large">
                  Check if your wallet address is doxxed
                </Paragraph> */}
                {size !== "small" && (
                  <Box direction="row" gap="medium">
                    <Card width="small" background="light-1">
                      <CardHeader pad="medium">JackJack.eth</CardHeader>
                      <CardFooter
                        pad={{ horizontal: "small" }}
                        background="light-2"
                      >
                        <Button icon={<Link color="plain" />} hoverIndicator />
                      </CardFooter>
                    </Card>
                    <Card width="small" background="light-1">
                      <CardHeader pad="medium">ETHDenver.eth</CardHeader>
                      <CardFooter
                        pad={{ horizontal: "small" }}
                        background="light-2"
                      >
                        <Button icon={<Link color="plain" />} hoverIndicator />
                      </CardFooter>
                    </Card>
                  </Box>
                )}
                {size == "small" && (
                  <Box direction="column" gap="medium">
                    <Card width="medium" background="light-1">
                      <CardHeader pad="medium">JackJack.eth</CardHeader>
                      <CardFooter
                        pad={{ horizontal: "small" }}
                        background="light-2"
                      >
                        <Button icon={<Link color="plain" />} hoverIndicator />
                      </CardFooter>
                    </Card>
                    <Card width="medium" background="light-1">
                      <CardHeader pad="medium">ETHDenver.eth</CardHeader>
                      <CardFooter
                        pad={{ horizontal: "small" }}
                        background="light-2"
                      >
                        <Button icon={<Link color="plain" />} hoverIndicator />
                      </CardFooter>
                    </Card>
                  </Box>
                )}
              </Box>
              <Box margin="large" align="center" justify="center" gap="medium">
                <Heading
                  level="3"
                  size="large"
                  textAlign="center"
                  margin="small"
                >
                  People Search Engines
                </Heading>
                {/* <Paragraph textAlign="center" size="large">
                  Check if your wallet address is doxxed
                </Paragraph> */}

                {size !== "small" && (
                  <Box
                    direction="row"
                    gap="medium"
                    justify="center"
                    align="center"
                  >
                    <Card width="small" background="light-1">
                      <CardHeader pad="medium">Intelius</CardHeader>
                      <CardFooter
                        pad={{ horizontal: "small" }}
                        background="light-2"
                      >
                        <Button icon={<Link color="plain" />} hoverIndicator />
                      </CardFooter>
                    </Card>
                    <Card width="small" min-with="192px" background="light-1">
                      <CardHeader pad="medium">People Finder</CardHeader>
                      <CardFooter
                        pad={{ horizontal: "small" }}
                        background="light-2"
                      >
                        <Button icon={<Link color="plain" />} hoverIndicator />
                      </CardFooter>
                    </Card>
                    <Card width="small" background="light-1">
                      <CardHeader pad="medium">TruePeopleSearch</CardHeader>
                      <CardFooter
                        pad={{ horizontal: "small" }}
                        background="light-2"
                      >
                        <Button icon={<Link color="plain" />} hoverIndicator />
                      </CardFooter>
                    </Card>
                    <Card width="small" background="light-1">
                      <CardHeader pad="medium">AnyWho</CardHeader>
                      <CardFooter
                        pad={{ horizontal: "small" }}
                        background="light-2"
                      >
                        <Button icon={<Link color="plain" />} hoverIndicator />
                      </CardFooter>
                    </Card>
                  </Box>
                )}
                {size == "small" && (
                  <Box
                    direction="column"
                    gap="medium"
                    justify="center"
                    align="center"
                  >
                    <Card width="medium" background="light-1">
                      <CardHeader pad="medium">Intelius</CardHeader>
                      <CardFooter
                        pad={{ horizontal: "small" }}
                        background="light-2"
                      >
                        <Button icon={<Link color="plain" />} hoverIndicator />
                      </CardFooter>
                    </Card>
                    <Card width="medium" min-with="192px" background="light-1">
                      <CardHeader pad="medium">People Finder</CardHeader>
                      <CardFooter
                        pad={{ horizontal: "small" }}
                        background="light-2"
                      >
                        <Button icon={<Link color="plain" />} hoverIndicator />
                      </CardFooter>
                    </Card>
                    <Card width="medium" background="light-1">
                      <CardHeader pad="medium">TruePeopleSearch</CardHeader>
                      <CardFooter
                        pad={{ horizontal: "small" }}
                        background="light-2"
                      >
                        <Button icon={<Link color="plain" />} hoverIndicator />
                      </CardFooter>
                    </Card>
                    <Card width="medium" background="light-1">
                      <CardHeader pad="medium">AnyWho</CardHeader>
                      <CardFooter
                        pad={{ horizontal: "small" }}
                        background="light-2"
                      >
                        <Button icon={<Link color="plain" />} hoverIndicator />
                      </CardFooter>
                    </Card>
                  </Box>
                )}
              </Box>
              <Box margin="large" align="center" justify="center" gap="medium">
                <Heading
                  level="3"
                  size="large"
                  textAlign="center"
                  margin="small"
                >
                  Search Engines
                </Heading>
                {/* <Paragraph textAlign="center" size="large">
                  Check if your wallet address is doxxed
                </Paragraph> */}
                {size !== "small" && (
                  <Box direction="row" gap="medium">
                    <Card width="small" background="light-1">
                      <CardHeader pad="medium">DuckDuckGo</CardHeader>
                      <CardFooter
                        pad={{ horizontal: "small" }}
                        background="light-2"
                      >
                        <Button icon={<Link color="plain" />} hoverIndicator />
                      </CardFooter>
                    </Card>
                    <Card width="small" background="light-1">
                      <CardHeader pad="medium">Google</CardHeader>
                      <CardFooter
                        pad={{ horizontal: "small" }}
                        background="light-2"
                      >
                        <Button icon={<Link color="plain" />} hoverIndicator />
                      </CardFooter>
                    </Card>
                    <Card width="small" background="light-1">
                      <CardHeader pad="medium">Bing</CardHeader>
                      <CardFooter
                        pad={{ horizontal: "small" }}
                        background="light-2"
                      >
                        <Button icon={<Link color="plain" />} hoverIndicator />
                      </CardFooter>
                    </Card>
                    <Card width="small" background="light-1">
                      <CardHeader pad="medium">Yahoo</CardHeader>
                      <CardFooter
                        pad={{ horizontal: "small" }}
                        background="light-2"
                      >
                        <Button icon={<Link color="plain" />} hoverIndicator />
                      </CardFooter>
                    </Card>
                  </Box>
                )}
                {size == "small" && (
                  <Box direction="column" gap="medium">
                    <Card width="medium" background="light-1">
                      <CardHeader pad="medium">DuckDuckGo</CardHeader>
                      <CardFooter
                        pad={{ horizontal: "small" }}
                        background="light-2"
                      >
                        <Button icon={<Link color="plain" />} hoverIndicator />
                      </CardFooter>
                    </Card>
                    <Card width="medium" background="light-1">
                      <CardHeader pad="medium">Google</CardHeader>
                      <CardFooter
                        pad={{ horizontal: "small" }}
                        background="light-2"
                      >
                        <Button icon={<Link color="plain" />} hoverIndicator />
                      </CardFooter>
                    </Card>
                    <Card width="medium" background="light-1">
                      <CardHeader pad="medium">Bing</CardHeader>
                      <CardFooter
                        pad={{ horizontal: "small" }}
                        background="light-2"
                      >
                        <Button icon={<Link color="plain" />} hoverIndicator />
                      </CardFooter>
                    </Card>
                    <Card width="medium" background="light-1">
                      <CardHeader pad="medium">Yahoo</CardHeader>
                      <CardFooter
                        pad={{ horizontal: "small" }}
                        background="light-2"
                      >
                        <Button icon={<Link color="plain" />} hoverIndicator />
                      </CardFooter>
                    </Card>
                  </Box>
                )}
              </Box>
            </Box>
          </Page>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
