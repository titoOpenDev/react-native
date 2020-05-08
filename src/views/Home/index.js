import React, { useEffect } from "react";
import { Container, Text } from "native-base";
import { BackHandler } from "react-native";

import MyHeader from "../../components/Header";
import styles from "./style";

export default function Home({ navigation }) {

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleHardwareBackPress);

    return () => {
      BackHandler.removeEventListener(
        "hardwareBackPress",
        handleHardwareBackPress
      );
    };
  });

  const handleHardwareBackPress = () => {
    return true;
  };

  return (
    <Container style={styles.container}>
      <MyHeader />
      <Text>
        Hola mundo!!!
      </Text>
    </Container>
  );
}
