
import React from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, View } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from "./style";

export default function ButtonAppBar({navigation}) {

  return (
    <View>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={{alignItems: "flex-end", margin: 16}} >
          <Button transparent>
                <Icon name='menu' />
          </Button>
        </TouchableOpacity>
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
          <Text style={styles.text}>
            {/* {props.name} */}
          </Text>
        </View>
      </SafeAreaView>
    </View>
    );

}