import React from "react";
import { Container, Content, List, ListItem, Text, Spinner } from "native-base";

import styles from "./style";

export default function ListComponent({ items, onItemPress }) {

    return (
        <Container style={[styles.container]}>
            <Content>
                <List>
                    {(items.length > 0) ?
                        items.map((item, index) => (
                            <ListItem key={index} onPress={() => onItemPress(item)}>
                                <Text>{item.title}</Text>
                                <Text>{item.subtitle}</Text>
                            </ListItem>
                        )) : <Text>No hay elementos para mostrar </Text>}
                </List>
            </Content>
        </Container>
    );
}
