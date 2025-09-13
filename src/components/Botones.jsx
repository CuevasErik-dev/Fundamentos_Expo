import {
    Text,
    View,
    StyleSheet,
    Platform,
    StatusBar,
    TouchableOpacity,
} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons'

export default function Botones() {
    return (
        <View style={style.mainS}>
            <Text style={style.h1}>Botones</Text>

            {/*Boton 1*/}
            <TouchableOpacity style={style.botonBasico}>
                <Text style={style.text}> Boton 1</Text>
            </TouchableOpacity>

            {/*boton 2 */}
            <TouchableOpacity style={style.botonIcono}>
                <Ionicons name="person" size={20} style={style.iconoB}> </Ionicons>
                <Text style={style.text}> Boton Icono</Text>
            </TouchableOpacity>

        </View>
    );

}

const style = StyleSheet.create({
    mainS: {
        flex: 1,
        backgroundColor: "#e9c0c0ff",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 44,
        padding: 16,
    },
    h1: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    botonBasico: {
        backgroundColor: '#ffffff',
        padding: 12,
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 10,
    },
    text: {
        color: '#0a0a0aff',
        textAlign: 'center',
        fontWeight: 'bold',

    },
    botonIcono: {
        backgroundColor: '#ffffff',
        padding: 12,
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconoB: {
        color: '#f10e0eff'
    },
});
