import React, { useEffect, useState, } from 'react';
import { Header, Left, Body, Right, Icon, Title } from 'native-base';

import { Ionicons, Foundation } from '@expo/vector-icons';

import styles from "./style";

export default function HeaderNew() {
    return (
        <Container>
            <Header style={styles.header} androidStatusBarColor={styles.header}>
                <Left style={{ flex: 1 }}>
                    <Button transparent>
                        <Ionicons style={styles.leftIcon} name={styles.leftIcon.name} size={styles.leftIcon.size} />
                    </Button>
                </Left>
                <Body style={{ flex: 1, justifyContent: 'center' }}>
                    <Image source={require('../../../assets/ase_nacional_imagen_app.png')} style={styles.image} />
                </Body>
                <Right style={{ flex: 1 }}>
                    <Button transparent>
                        <Foundation style={styles.rightIcon} name={styles.rightIcon.name} size={styles.rightIcon.size} />
                    </Button>
                </Right>
            </Header>
        </Container>
    );
}