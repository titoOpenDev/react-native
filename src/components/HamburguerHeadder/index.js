import React from 'react';
import { Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './style'

export default function Header({}) {

  const openMenu = () => {
    // navigation.openDrawer()
  }

  return (
    <View styles={styles.header}>
      <MaterialIcons name='menu' size={28} onPress={openMenu}/>
      <View >
        <Text style={styles.headerText}>
          ASE VENTAS
        </Text>
      </View>
    </View>
  )
}