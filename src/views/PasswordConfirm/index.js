import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  Platform,
  Dimensions,
  SafeAreaView,
  ScrollView,
  Image,
  View,
  KeyboardAvoidingView,
} from "react-native";
import { Text,  Button, Form, Item, Input,  } from "native-base";
import { Ionicons } from '@expo/vector-icons';
import Constants from "expo-constants";

import styles from './style';
import {LOGIN,UPDATE_PASSWORD_SUCCESS, MSSG_ERROR} from '../../consts';
import {updatePassword} from '../../redux/ducks/executiveDucks';

export default function PasswordConfirm({navigation}){

    
    const [password, setPassword] = useState('');
    const [passwordRepeated, setPasswordRepeated] = useState('');
    const [disabled, setDisabled] = useState(true);

    const dispatch = useDispatch();

    const error = useSelector(store => store.executive.err);
  
    const { height } = Dimensions.get('window');

    const handleGoBack = ()=>{
      navigation.goBack();
    }

    useEffect(() => {
      if(error) alert(MSSG_ERROR);
    }, [error])
    
    const handleSaveNewPass = ()=>{
      let payload = {password};
      dispatch(updatePassword(payload));      
      alert(UPDATE_PASSWORD_SUCCESS);
      setPassword("");
      setPasswordRepeated("");
      navigation.navigate(LOGIN);
    }

    const handleChangePassword = (password)=>{
      if((password.trim())&& (passwordRepeated.trim())){
        setDisabled(false);
      }else{
        setDisabled(true);
      }
      setPassword(password);
    }

    const handleChangePasswordRepeated = (password)=>{
      if((password.trim())&& (passwordRepeated.trim())){
        setDisabled(false);
      }else{
        setDisabled(true);
      }
      setPasswordRepeated(password);
    }

    return (
        <SafeAreaView style={styles.container}>
          <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS == "ios" ? "padding" : "height"} keyboardVerticalOffset={Platform.OS == "ios" ? 0 : -100}>
            <ScrollView style={{ flex: 1 }}>
              <View style={{ minHeight: height-Constants.statusBarHeight }}>
                <View style={{ backgroundColor: '#7a7e7f', flex: 1, justifyContent: 'center', }}>
                  <View style={{ alignItems: 'flex-start', top: -20 }}>
                    <Ionicons style={{ marginLeft: 24 }} name="ios-arrow-back" size={24} color="white" onPress={ handleGoBack }/>
                  </View>
                  <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginBottom: 16, }}>
                    <Image source={require('../../../assets/ase_nacional_imagen_app.png')} style={{ width: 180, height: 60 }} />
                  </View>
                </View>
                <View style={{ flex: 0.1, justifyContent: 'center', alignContent: 'center', }}>
                  <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', }}>
                    <Text style={{ textAlign: 'center', margin: 16, fontWeight: 'bold', }}>CREAR NUEVA CLAVE</Text>
                    <Text style={{ width: '75%', fontSize: 14 }}>Ingresá tu nueva CLAVE y confirmala</Text>
                  </View>
                  <Form style={{ margin: 24, }}>
                    <Item last>
                      <Input placeholder="NUEVA CLAVE" value={password} onChangeText= {handleChangePassword} />
                    </Item>
                    <Item last>
                      <Input placeholder="REPETIR CLAVE" value={passwordRepeated}  onChangeText= {handleChangePasswordRepeated}/>
                    </Item>
                  </Form>
                </View>
                <View style={{ flex: 0.1, justifyContent: 'flex-end', margin: 32, }}>
                  <Button style={{ backgroundColor: '#F16921', borderColor: '#f16820' }} onPress={handleSaveNewPass} disabled={disabled} >
                    <Text style={{ flex: 1, textAlign: 'center', textTransform: 'uppercase' }}>GUARDAR NUEVA CLAVE</Text>
                  </Button>
                </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
    );
};