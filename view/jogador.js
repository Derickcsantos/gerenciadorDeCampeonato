import { View, Text } from "react-native";
import { styles } from "./styles";


export default function Jogador(props){
    return(
        <View style={styles.container}>
            <Text>Time: {props.Time}</Text>
            <Text>Nome: {props.nome}</Text>
            <Text>Posição: {props.posição}</Text>
        </View>
    )
}