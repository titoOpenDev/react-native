import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Button, Image, Icon, TouchableHighlight } from 'react-native';
import { Camera } from 'expo-camera';
import styles from './style';

export default function PhotoUpload({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [photo, setPhoto] = useState({});

  const getPreimage = () => {
    if (photo && photo.uri) {
      return <Image  
              source={{
                uri: photo.uri ,
              }}
              style={{height: 200, width: null, flex: 1}}
            />
    }
  }

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  snap = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync();
      console.log('photo', photo);
      setPhoto(photo);
    }
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
     {getPreimage()}
      <Camera style={{ flex: 1 }} type={type}
      ref= {ref => {
        this.camera = ref
      }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
            {/* <Button
              onPress={()=> this.snap()}
              title="Photo"
              color="#841584"
            /> */}
          </TouchableOpacity>
        </View>
          <TouchableOpacity
          style={{
              borderWidth:1,
              borderColor:'rgba(0,0,0,0.2)',
              alignItems:'center',
              justifyContent:'center',
              width:100,
              height:100,
              backgroundColor:'#fff',
              borderRadius:50,
            }}
            onPress={()=> this.snap()}
          >
          </TouchableOpacity>
      </Camera>
    </View>
  );
}