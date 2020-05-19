import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../components/HamburguerHeadder';
import UploadProcedure from '../components/UploadProcedure';

const screens = {
  Home: {
    screen: UploadProcedure,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='GameZone' navigation={navigation} />
      }
    }
  }
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 }
  }
});

export default HomeStack;


