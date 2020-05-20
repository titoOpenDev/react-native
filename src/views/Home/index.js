import React, { useEffect } from "react";
import { Container, Text, Header, Left, Button, Icon, Title, Body } from "native-base";
import { BackHandler } from "react-native";

import styles from "./style";
import UploadProcedure from "../../components/UploadProcedure";
import PhotoUpload from '../../components/PhotoUpload';
import MenuBar from "../../components/MenuBar";
import HambungerHeadder from '../../components/HamburguerHeadder';
import SideMenu from 'react-native-side-menu'

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

  const handleGoBack = () => {
    navigation.goBack();
  }
      // {/* <UploadProcedure /> */}
      // {/* <PhotoUpload /> */}
  return (
    <>
          <Header>
            <Left>
              <Button onPress={ handleGoBack }>
                <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body>
              <Title>NUEVO TRAMITE</Title>
            </Body>
          </Header>
          <UploadProcedure />
    </>
    //  <PhotoUpload />
  );
}
