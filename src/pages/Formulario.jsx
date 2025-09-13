import { StyleSheet, SafeAreaView, Platform, StatusBar, Text, TextInput, TouchableOpacity, ScrollView } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons'

export default function Formulario() {
    return (
        <SafeAreaView style={style.mainS}>
            
            <Text style={style.title}> Registro de Alumnos</Text>
            <Text style={style.label}>Nombre:</Text>
            <TextInput style={style.input} placeholder="Escrribe tu Nombre"></TextInput>
            <Text style={style.label}>Apellido:</Text>
            <TextInput style={style.input} placeholder="Escrribe tu Apellido"></TextInput>
            <Text style={style.label}>Correo:</Text>
            <TextInput style={style.input} placeholder="Escrribe tu Correo" keyboardType="email-addres"></TextInput>
            <Text style={style.label}>Contraseña:</Text>
            <TextInput style={style.input} placeholder="Escrribe tu Contraseña" secureTextEntry></TextInput>
            <Text style={style.label}>Descripcion:</Text>
            <TextInput multiline={true} numberOfLines={4} style={[style.input, style.area]} placeholder="Escrribe tu Correo"></TextInput>
            <Text style={style.label}>Numero:</Text>
            <TextInput style={style.input} placeholder="Escrribe tu Numero" keyboardType="phone-pad"></TextInput>
            <Text style={style.label}>Carrera:</Text>
            <TextInput editable={false} style={style.input} placeholder="Escrribe tu Carrera" ></TextInput>

            <TouchableOpacity style={style.botonIcono}>
                <Ionicons name="send" size={20} style={style.iconoIzq}></Ionicons>
                <Text style={style.textBoton}>Registrarse</Text>
            </TouchableOpacity>

        </SafeAreaView >
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
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 22,
        marginTop: 20
    },
    label: {
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10
    },
    input: {
        borderWidth: 1,
        borderColor: '#500505ff',
        borderRadius: 15,
        backgroundColor: '#fce2e2ff'
    },
    area: {
        height: 100,
        textAlignVertical: 'top',
    },
    textBoton: {
        color: '#f5f2f2ff',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',

    },
    botonIcono: {
        backgroundColor: '#5573f8ff',
        marginTop: 15,
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
})