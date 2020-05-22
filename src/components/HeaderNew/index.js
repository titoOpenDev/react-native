import React, {useEffect, useState,} from 'react';
import { Header, Left, Body, Right, Icon, Title } from 'native-base';

import { Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons'; 

import styles from "./style";


function Home() {
    return (
      <Container>
        <Header style={styles.header} androidStatusBarColor={styles.header}>
          <Left>
            <Button transparent>
              <Ionicons style={styles.leftIcon} name={styles.leftIcon.name} size={styles.leftIcon.size} />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Foundation style={styles.rightIcon} name={styles.rightIcon.name} size={styles.rightIcon.size} />
            </Button>
          </Right>
        </Header>
      </Container>
    );
  }