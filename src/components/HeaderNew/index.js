import React from 'react';
import { Image, } from 'react-native';
import { Header, Button, Left, Body, Right, Icon, Title, Container } from 'native-base';

import { Ionicons, Foundation } from '@expo/vector-icons';

import styles from "./style";

export default function HeaderNew() {
    return (
        <Container>
            <Header style={styles.header} androidStatusBarColor={"#e45205"}>
                <Left style={{ flex: 1 }}>
                    <Button transparent>
                        <Ionicons style={styles.icon} name='md-menu' size={24} />
                    </Button>
                </Left>
                <Body style={{ flex: 1, justifyContent: 'center' }}>
                    <Image source={require('../../../assets/ase_nacional_imagen_app.png')} style={styles.image}  />
                </Body>
                <Right style={{ flex: 1 }}>
                    <Button transparent>
                        <Foundation style={styles.icon} name='info' size={24} />
                    </Button>
                </Right>
            </Header>
        </Container>
    );
}