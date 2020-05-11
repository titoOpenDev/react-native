import styles from "./style";
import React, { useState, useEffect } from "react";
import { Container, Form, Item, Input, Label, Body, Text, ListItem, CheckBox, Button, Image } from "native-base";


export default function UploadProcedure ({...args}) {

  const [state, setState] = useState({
    multipleCreate: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
        <Container>
            <Form>
              <Item floatingLabel>
                <Label>Completá el CUIT o nombre de empresa</Label>
                <Input />
              </Item>

              <ListItem>
                <CheckBox checked={true} />
                <Body>
                  <Text>Alta múltiple de la misma empresa</Text>
                </Body>
              </ListItem>

              <Item floatingLabel>
                <Label>Completá el CUIL</Label>
                <Input />
              </Item>

              <Button bordered danger>
                <Text>TUTORIAL: FOTO AL FORMULARIO</Text>
              </Button>

              <Button primary>
                <Text> COMENZAR TRAMITE </Text>
              </Button>
              
              <Button primary>
                <Text> ENVIAR FORMULARIO POR EMAIL </Text>
              </Button>
            </Form>
        </Container>  
        
  );

}