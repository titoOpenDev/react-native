import React, { useEffect } from "react";
import { Container, Text } from "native-base";
import { BackHandler } from "react-native";

import styles from "./style";
import UploadProcedure from "../../components/UploadProcedure";
import ExpoCamara from '../../components/ExpoCamara';
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
      <UploadProcedure />
    {/* <ExpoCamara /> */}
    </Container>
  );
}
