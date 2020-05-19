import styles from "./style";
import React, { useState, useEffect } from "react";
import { View, Form, Item, Input, Label, Body, Text, ListItem, CheckBox, Button, Image } from "native-base";


export default function UploadProcedure ({...args}) {

  const [state, setState] = useState({
    multipleCreate: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
        <View style={styles.container}>
              <Item floatingLabel>
                <Label>Completá el CUIT o nombre de empresa</Label>
                <Input />
              </Item>

              <ListItem>
                <CheckBox checked={true} style={styles.icon} />
                <Text>Alta múltiple de la misma empresa</Text>
              </ListItem>

              <Item floatingLabel>
                <Label>Completá el CUIL</Label>
                <Input />
              </Item>

              <Button bordered danger style={styles.buttons}>
                <Text>TUTORIAL: FOTO AL FORMULARIO</Text>
              </Button>

              <Button primary style={styles.buttons}>
                <Text> COMENZAR TRAMITE </Text>
              </Button>
              
              <Button primary style={styles.buttons}>
                <Text> ENVIAR FORMULARIO POR EMAIL </Text>
              </Button>
        </View>  
  );

}