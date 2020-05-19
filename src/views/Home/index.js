import React, { useEffect } from "react";
import { Container, Text } from "native-base";
import { BackHandler } from "react-native";

import styles from "./style";
import UploadProcedure from "../../components/UploadProcedure";
import ExpoCamara from '../../components/ExpoCamara';
import MenuBar from "../../components/MenuBar";

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
  const menu = <MenuBar navigator={navigator}/>;
  
  return (
    <Container style={styles.container}>
      {/* <UploadProcedure /> */}
      {/* <ExpoCamara /> */}
      <SideMenu menu={menu}>
        <ContentView/>
      </SideMenu>
    </Container>
  );
}
