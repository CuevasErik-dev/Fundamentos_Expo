import {
    Text,
    View,
    StyleSheet,
    Platform,
    StatusBar,
    TouchableOpacity,
} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons'

export default function BotonesV2() {
    return (
        <View style={style.mainS}>
            <Text style={style.title}> Botones Personalizados</Text>
            {/* Boton grande */}
            <TouchableOpacity style={style.botonGrnade}>
                <Text style={style.textBoton}>Boton Grande</Text>
            </TouchableOpacity>

            {/* Boton grande con Icono */}
            <TouchableOpacity style={style.botonIcono}>
                <Ionicons name="send" size={20} style={style.iconoIzq}></Ionicons>
                <Text style={style.textBoton}>Boton Grande</Text>
            </TouchableOpacity>

            {/* Boton Sombreado*/}
            <TouchableOpacity style={[style.botonShadow, style.shadow]}>
               {/*  <Ionicons name="send" size={20} style={style.iconoIzq}></Ionicons> */}
                <Text style={style.textBoton}>Boton Grande</Text>
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
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center',

    },
    botonGrnade: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 20,
        marginTop: 10,
        alignSelf: 'center',
    },
    textBoton: {
        color: '#110101ff',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',

    },
    botonIcono: {
        backgroundColor: '#5d5ff1ff',
        marginTop: 10,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 20,
    },
    iconoIzq: {
        color: '#fff',
        marginRight: 10,

    },
    botonShadow: {
        backgroundColor: '#ddfa9bff',
        marginTop: 10,
        paddingVertical: 12,
        borderRadius: 20,
        marginBottom:30
    },
    shadow: {
        shadowColor: "#0a0a0aff",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 7,
    }
});
