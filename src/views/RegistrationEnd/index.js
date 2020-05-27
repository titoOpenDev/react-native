import React, { useEffect, useState } from "react";
import {Text} from "react-native"
import { Spinner, Container, Content, Grid, Item, Form, Picker, Button, Header, Left, Icon, Body, Title, Input, View } from "native-base";
import genericStyles from "../../styles";
import { requestExecutive } from '../../redux/ducks/executiveDucks';

import {
  PASSWORD_RECOVERY,
  REGISTRATION_BEGIN,
  EMAIL_NOTIFICATION
} from "../../consts";
import { useDispatch , useSelector } from "react-redux";

export default function RegistrationEnd({navigation}) {

  const [network, setNetwork] = useState('')
  const [filialZone, setFilialZone] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch();


  const firstName = useSelector(store => store.executive.firstName);
  const lastName = useSelector(store => store.executive.lastName);
  const cuil = useSelector(store => store.executive.cuil);
  const email = useSelector(store => store.executive.email);

  useEffect(() => {
    
  })
   

  const handleRed = (value) => {
       setNetwork(value);
  }

  const handleZone = (value) => {
      setFilialZone(value);
  }

  const handleChangePassword = (value) => {
      setPassword(value)
  }

  const handleGoBack = () => {
    navigation.goBack();
  }

  const handleSend = () => {
     const payload = { lastName, firstName, cuil, password, email, network, filialZone}
     dispatch(requestExecutive(payload));
     navigation.navigate(EMAIL_NOTIFICATION);
  }

  return (
    <Container>
       <Header>
          <Left>
            <Button onPress={ handleGoBack }>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Registro 2/2</Title>
          </Body>
      </Header>
      <Content contentContainerStyle={[genericStyles.centeredContent]}>
          
          <Grid style={[genericStyles.centeredGrid]}>
          <Form>
            <View style={{flex:1 , justifyContent: 'center',
                  alignItems: 'stretch',}}>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={network}
                onValueChange={ (itemValue) => handleRed(itemValue)}
              >
                <Picker.Item label="Red" value="key0" />
                <Picker.Item label="Red-1" value="Red-1" />
                <Picker.Item label="Red-2" value="Red-2" />
                <Picker.Item label="Red-3" value="Red-3" />
                <Picker.Item label="Red-4" value="Red-4" />
              </Picker>
            </Item>
            </View>
            <View style={{flex:1}}>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={filialZone}
                onValueChange={ (itemValue) => handleZone(itemValue)}
              >
                <Picker.Item label="Zona filial" value="key0" />
                <Picker.Item label="Zona filial ASE - 1" value="Zona filial ASE - 1" />
                <Picker.Item label="Zona filial ASE - 2" value="Zona filial ASE - 2" />
                <Picker.Item label="Zona filial ASE - 3" value="Zona filial ASE - 3" />
                <Picker.Item label="Zona filial ASE - 4" value="Zona filial ASE - 4" />
              </Picker>
            </Item>
            </View>
            <View style={{flex:1}}>
            <Item>
              <Input placeholder="Clave" onChangeText={text => handleChangePassword(text)} />
            </Item>
            </View>
            <View style={{flex:1}}>
            <Item last>
              <Input placeholder="Repetir clave" />
            </Item>
            </View>
            <View style={{flex:1}}>
            <Button onPress={() => handleSend()} light  style={[ {backgroundColor: '#e75300'} , genericStyles.btnDefault]}>
                <Text style={genericStyles.textWhite}>Registrarme </Text>
            </Button>
            </View>
          </Form>
          </Grid>
      </Content>
    </Container>
  );
};
