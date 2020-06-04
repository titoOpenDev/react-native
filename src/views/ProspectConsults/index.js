import React from 'react';
import {Container,Content,View} from 'native-base';

import MenuBar from '../../components/MenuBar/index';

export default function ProspectConsults({navigation}){

    return(
        <Container>
            <MenuBar onPress={() => navigation.openDrawer()} />
            <Content contentContainerStyle={{ flex: 1 }}>
                <View style={{ flex: 1, }}>
                    
                </View> 
            </Content>
        </Container>
    );
}