import { StyleSheet, Text, View } from 'react-native';
import {TextInput } from 'react-native';



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1C1C1C',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container2: {
        flex: 1,

    },
    TextInput:{
        width: "95%",
        borderWidth: 1,
        padding: 10,
        margin: 10,
        borderRadius: 10,
        backgroundColor: "#CCC"
    },
    botao:{
        width:"95%",
        backgroundColor: "#4F4F4F",
        padding: 10,
        alignItems:"center",
        borderRadius: 10,
        border: '#ccc'
    },
    texto:{
        color:"#FFFFFF",
    },
    img:{
        width: "30%",
        height:"20%",
        margin: 40,
    },
  });
  
export{styles}