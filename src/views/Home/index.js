import React, { useEffect } from "react";
import { Container, Text, Header, Left, Button, Icon, Title, Body } from "native-base";
import { BackHandler } from "react-native";

import styles from "./style";
import UploadProcedure from "../../components/UploadProcedure";
import PhotoUpload from '../../components/PhotoUpload';
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
          <UploadProcedure />
  );
}
