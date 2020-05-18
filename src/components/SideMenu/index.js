import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import SideMenu from 'react-native-side-menu';
import Menu from '../Menu';

export default function SideMenu() {

  const [isOpen, setIsOpen] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);


  const toggle = () => {
    setIsOpen(!isOpen);
  }

  const updateMenuState = (isOpen) => {
    setIsOpen(isOpen);
  }

  const onMenuItemSelected = item =>
    this.setState({
      isOpen: false,
      selectedItem: item,
    });

  const menu = <Menu onItemSelected={this.onMenuItemSelected} />;

  return (
    <SafeAreaView>
      <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={isOpen => this.updateMenuState(isOpen)}
      >
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.ios.js
          </Text>
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+Control+Z for dev menu
          </Text>
          <Text style={styles.instructions}>
            Current selected menu item is: {this.state.selectedItem}
          </Text>
        </View>
        <TouchableOpacity
          onPress={this.toggle}
          style={styles.button}
        >
          <Image
            source={image}
            style={{ width: 32, height: 32 }}
          />
        </TouchableOpacity>
      </SideMenu>
    </SafeAreaView>
  );
}