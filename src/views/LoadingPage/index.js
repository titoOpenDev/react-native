import React, { useEffect } from "react";
import { Spinner, Container, Content, Grid } from "native-base";
import { LOGIN, HOME, ACCESS_TOKEN } from "../../consts";
import { AsyncStorage } from "react-native";
import styles from "./style";

export default ({ navigation }) => {
  useEffect(() => {
    redirect();
  });

  const redirect = async () => {
    try {
      const token = await AsyncStorage.getItem(ACCESS_TOKEN);
      /* let route = token ? HOME : LOGIN; */
      navigation.navigate(LOGIN);
    } catch (e) {
      console.error('error al iniciar : ', e);
      alert('Hubo un error al intentar iniciar, intente nuevamente')
    }

  };

  return (
    <Container>
      <Content contentContainerStyle={styles.content}>
        <Grid style={styles.grid}>
          <Spinner color="orange" />
        </Grid>
      </Content>
    </Container>
  );
};
