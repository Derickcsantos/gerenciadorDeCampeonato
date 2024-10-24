import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import {styles} from './styles';
import { useState } from 'react';

export default function Login({navigation}){
    const [Usuario, setUsuario] = useState("");
    const [Senha, setSenha] = useState("");

    return(
    <View style={styles.container}>
        <Image style={styles.img} source={require('./LogoDC.jpeg')}>
        </Image>

        <TextInput style={styles.TextInput}
            placeholder="Digite seu nome:"
            value={Usuario}
            onChangeText={(Text) => setUsuario(Text)}>

        </TextInput>

        <TextInput style={styles.TextInput}
            placeholder="Digite sua senha"
            value={Senha}
            secureTextEntry={true}
            onChangeText={(Text) => setSenha(Text)}>
        </TextInput>

        <TouchableOpacity style = {styles.botao} onPress={()=> navigation.navigate("Home")}>
        <Text style={styles.texto}>Entrar</Text>
        </TouchableOpacity>

    </View>
    );
};