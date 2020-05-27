import React, { useState, useEffect } from 'react'
import styles from './style';
import { Text, Button, Container, Content } from 'native-base';
import { logOut } from '../../redux/ducks/authenticateDucks';
import { useDispatch } from 'react-redux';

export default function Confirmation ({navigation}){

  const dispatch = useDispatch();

  const handleYes = () => {
    dispatch(logOut());
  }

  return (
    <Container style={styles.container}>
      <Text>
      </Text>
        <Button onPress={() => handleYes()}>
          <Text>Si</Text>
        </Button>
        <Button>
          <Text>No</Text>
        </Button>
    </Container>
  )
}
