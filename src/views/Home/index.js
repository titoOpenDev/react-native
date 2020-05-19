import React, { useEffect } from "react";
import { Container, Text } from "native-base";
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
      // {/* <UploadProcedure /> */}
      // {/* <PhotoUpload /> */}
  return (
      <UploadProcedure />
    //  <PhotoUpload />
  );
}
