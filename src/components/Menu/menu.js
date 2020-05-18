import React from 'react';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
} from 'react-native';


export default function Menu() {
  return (
    <ScrollView scrollsToTop={false} style={styles.menu}>
      <View style={styles.avatarContainer}>
        <Text style={styles.name}>Your name</Text>
      </View>

      <Text
        style={styles.item}
      >
        About
      </Text>

      <Text
        style={styles.item}
      >
        Contacts
      </Text>
    </ScrollView>
  );
}