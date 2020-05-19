import React from 'react';
import { Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './style'

export default function Header({title, navigation}) {

  const openMenu = () => {
    // navigation.openDrawer()
  }

  return (
    <View style={styles.header}>
      <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} />
      <View>
        <Text style={styles.headerText}>ASE VENTAS</Text>
      </View>
    </View>
  )
}