import React, { Component } from "react";
import PhotoUpload from "../components/PhotoUpload";
import NotificationFilters from "../views/NotificationFilters";
import SideBar from '../components/SideBar'
import { createDrawerNavigator } from "react-navigation-drawer";

const HomeScreenRouter = createDrawerNavigator(
  {
    Home: { screen: PhotoUpload }
  }, 
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;