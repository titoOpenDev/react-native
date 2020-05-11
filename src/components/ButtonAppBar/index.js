
import React from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';


export default function ButtonAppBar() {

  return (
      <Container>
        <Header>
          <Left>
          <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>ASE NACIONAL</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='infocircle' />
            </Button>
          </Right>
        </Header>
      </Container>
  );

}