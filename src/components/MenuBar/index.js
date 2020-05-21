import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import styles from './style';
import SideMenu from 'react-native-side-menu'

export const MenuBar = ({...params}) => {
  
  return (
    <View >
        <Text>
          Welcome to React Native!
        </Text>
        <Text >
          To get started, edit index.ios.js
        </Text>
        <Text >
          Press Cmd+R to reload,{'\n'}
          Cmd+Control+Z for dev menu
        </Text>
      </View>
  )
}
