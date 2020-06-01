import React, { useEffect, useState } from "react";
import { Image, View, SafeAreaView, Dimensions, KeyboardAvoidingView, ScrollView,TouchableOpacity } from "react-native";
import { Container, Content, Button, Text, Form, Item, Input, Left, Header, Icon, Title, Body, Picker } from "native-base";
import genericStyles from "../../styles";
import styles from './style'
import { requestExecutive } from '../../redux/ducks/executiveDucks';
import { Ionicons } from '@expo/vector-icons';

import {
  EMAIL_NOTIFICATION,
  REGISTRATION_END,
  PASSWORDS_MUST_BE_EQUALS
} from "../../consts";
import { useDispatch, useSelector } from "react-redux";

export default function RegistrationEnd({ navigation }) {

  const [network, setNetwork] = useState('')
  const [filialZone, setFilialZone] = useState('')

  const [eye, setEye] = useState('md-eye');
  const [eyePasswordRepeated, setEyePasswordRepeated] = useState('md-eye');

  const [secureEntry, setSecureEntry] = useState(true);
  const [securePasswordRepeatedEntry, setSecurePasswordRepeatedEntry] = useState(true);

  const [password, setPassword] = useState('');
  const [passwordRepeated, setPasswordRepeated] = useState('');

  const [disabled, setDisabled] = useState(true);

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

  const handleGoBack = () => {
    navigation.goBack();
  }

  const handleSend = () => {
    if(passwordsAreEquals()){   
      const payload = { lastName, firstName, cuil, password, email, network, filialZone}
      dispatch(requestExecutive(payload));
      let params = {};
      params.sourceView = REGISTRATION_END;
      navigation.navigate(EMAIL_NOTIFICATION, params);
    }else{
      alert(PASSWORDS_MUST_BE_EQUALS);
    }
  }

  const handleChangePassword = (password)=>{
    if((!password.trim()) || (!passwordRepeated.trim())){
        setDisabled(true);
    }else{
        setDisabled(false);
    }
    setPassword(password);
  }

    const passwordsAreEquals = ()=>{
        return (password=== passwordRepeated);
    }

    const handleChangePasswordRepeated = (password)=>{
      if((!password.trim()) || (!passwordRepeated.trim())){
          setDisabled(true);
      }else{
          setDisabled(false);
      }
      setPasswordRepeated(password);
    }
    

    const handleTouchableOpacity = async () => {
      const eyeName = secureEntry ? 'md-eye-off' : 'md-eye';
      setSecureEntry(!secureEntry);
      setEye(eyeName);
    }

    const handleTouchableOpacityPasswordRepeated = async () => {
      const eyeNamePswdRepeated = securePasswordRepeatedEntry ? 'md-eye-off' : 'md-eye';
      setSecurePasswordRepeatedEntry(!securePasswordRepeatedEntry);
      setEyePasswordRepeated(eyeNamePswdRepeated);
    }


  const { height } = Dimensions.get('window');

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS == "ios" ? "padding" : "height"} keyboardVerticalOffset={Platform.OS == "ios" ? 0 : -100}>
        <ScrollView style={{ flex: 1 }}>
          <View style={{ minHeight: 700 }}>
            <View style={{ backgroundColor: '#7a7e7f', justifyContent: 'center', minHeight: 200, }}>
              <View style={{ alignItems: 'flex-start', top: -20, }}>
                <Ionicons style={{ marginLeft: 24 }} name="ios-arrow-back" size={24} color="white" onPress={handleGoBack} />
              </View>
              <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', }}>
                <Image source={require('../../../assets/ase_nacional_imagen_app.png')} style={{ width: 180, height: 60 }} />
              </View>
            </View>
            <View style={{ backgroundColor: 'white', flex: 1, alignContent: 'center', }}>
              <View style={{ margin: 10 }}>
                <Text style={{ textAlign: 'center', margin: 10, fontWeight: 'bold', }}>REGISTRO 2/2</Text>
                <Form style={{ margin: 10, }}>
                  <Item picker>
                    <Picker mode="dropdown" iosIcon={<Icon name="arrow-down" />} style={{ width: undefined }}
                      placeholder="Red"
                      placeholderStyle={{ color: "#bfc6ea" }}
                      placeholderIconColor="#007aff"
                      selectedValue={network} onValueChange={(itemValue) => handleRed(itemValue)}>
                      <Picker.Item label="Red" value="key0" />
                      <Picker.Item label="Red-1" value="Red-1" />
                      <Picker.Item label="Red-2" value="Red-2" />
                      <Picker.Item label="Red-3" value="Red-3" />
                      <Picker.Item label="Red-4" value="Red-4" />
                    </Picker>
                  </Item>
                  <Item picker>
                    <Picker mode="dropdown" iosIcon={<Icon name="arrow-down" />} style={{ width: undefined }}
                      placeholder="Filial"
                      placeholderStyle={{ color: "#bfc6ea" }}
                      placeholderIconColor="#007aff"
                      selectedValue={filialZone} onValueChange={(itemValue) => handleZone(itemValue)}>
                      <Picker.Item label="Zona filial" value="key0" />
                      <Picker.Item label="Zona filial ASE - 1" value="Zona filial ASE - 1" />
                      <Picker.Item label="Zona filial ASE - 2" value="Zona filial ASE - 2" />
                      <Picker.Item label="Zona filial ASE - 3" value="Zona filial ASE - 3" />
                      <Picker.Item label="Zona filial ASE - 4" value="Zona filial ASE - 4" />
                    </Picker>
                  </Item>
                </Form>
                <Form style={{ margin: 24, }}>
                  <Item last>
                    <Input placeholder="Clave" value={password} onChangeText= {handleChangePassword} secureTextEntry={secureEntry} maxLength={30} />
                    <TouchableOpacity onPress={handleTouchableOpacity}>
                      <Ionicons name={eye} size={24} color="gray" />
                    </TouchableOpacity>
                  </Item>
                  <Item last>
                    <Input placeholder="Repetir Clave" value={passwordRepeated}  onChangeText= {handleChangePasswordRepeated} secureTextEntry={securePasswordRepeatedEntry} maxLength={30}/>
                    <TouchableOpacity onPress={handleTouchableOpacityPasswordRepeated}>
                      <Ionicons name={eyePasswordRepeated} size={24} color="gray" />
                    </TouchableOpacity>
                  </Item>
                </Form>
              </View>
              <View style={{ flex: 0.5, justifyContent: 'flex-end', }}>
                <Button style={{ backgroundColor: '#F16921', margin: 24, }} onPress= {handleSend} disabled={disabled} >
                  <Text style={{ flex: 1, textAlign: 'center', textTransform: 'uppercase' }}>registrarme</Text>
                </Button>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
