import React  from 'react';
import { Text, Button, Container, View } from 'native-base';

import styles from './style';

import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/ducks/authenticateDucks';
import { LOGIN, HOME } from '../../consts';

export default function Confirmation ({navigation}){

  const dispatch = useDispatch();

  const handleYes = async () => {
    await dispatch(logOut());
    navigation.navigate(LOGIN);
  }

  const handleNo = async () => {
    navigation.navigate(HOME);
  }

  return (
    <Container style={styles.container}>
      <View>
        <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>¿ Está seguro de cerrar la sesión ? </Text>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 50 }}>
        <Button warning style={{ width: 100 , margin: 10, backgroundColor: '#f16921', }} onPress={() => handleYes()}>
          <Text style={{ flex: 1, textAlign: 'center' }}>Si</Text>
        </Button>
        <Button warning style={{ width: 100, margin: 10, backgroundColor: '#f16921', }} onPress={() => handleNo()}>
          <Text style={{ flex: 1, textAlign: 'center' }}>No</Text>
        </Button>
      </View>
    </Container>
  )
}
