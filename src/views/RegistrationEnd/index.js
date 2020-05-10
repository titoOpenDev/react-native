import React, { useEffect } from "react";
import { Spinner, Container, Content, Grid } from "native-base";
import genericStyles from "../../styles";

export default function RegistrationEnd({navigation}) {
  useEffect(() => {
   
  });

  return (
    <Container>
      <Content contentContainerStyle={[genericStyles.centeredContent]}>
            <Grid style={[genericStyles.centeredGrid]}>
          <Spinner color="green" />
        </Grid>
      </Content>
    </Container>
  );
};
