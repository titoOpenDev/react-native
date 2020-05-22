import React from 'react';
import { Text} from 'react-native';
import { Container, Content, Grid, Item, Form, Button } from 'native-base';


import genericStyles from '../../styles';
import styles from './style';

export default function CalculatorResults({navigation}){

    return(
        <Container>
            {/* <Content contentContainerStyle={styles.wrapperImg}>
                <Image source={require('../../../assets/ase_nacional_imagen_app.png')} 
                    style={styles.img}/>
            </Content> */}
            <Content contentContainerStyle={styles.content}>
                <Grid style={genericStyles.centeredGrid}>
                    <Form style={genericStyles.form}>
                        <Text style={styles.subtitle}>Resultados del Calculo</Text>
                        <Item style={styles.item}>
                            <Text style={styles.textColor}>    SUELDO BRUTO: </Text>
                            <Text style={styles.subtitle}>    $120.392,00</Text>
                        </Item>
                        <Item style={styles.item} >
                        <Text style={styles.textColor}>    NETO ASE: </Text>
                            <Text style={styles.subtitle}>    $12.129,00</Text>
                        </Item>    
                        <Button  style={[ {backgroundColor: '#e75300'} , genericStyles.btnDefault]}>
                            <Text style={genericStyles.textWhite}>Ir a Inicio </Text>
                        </Button>
                        <Button  style={ genericStyles.btnDefault} bordered light>
                            <Text style={genericStyles.textWhite}>Volver a la Calculadora </Text>
                        </Button>
                    </Form>
                </Grid>    
            </Content>   
        </Container>
    );
};

