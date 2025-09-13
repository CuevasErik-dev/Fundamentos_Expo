import { Image, StyleSheet, SafeAreaView, Platform, StatusBar, Text, TextInput, TouchableOpacity, ScrollView, View } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons'

export default function FormularioV2() {
    return (
        <SafeAreaView style={style.mainS}>
            <ScrollView>
                <Text style={style.title}>Formulario</Text>
                <View
                    style={style.container}>
                    <Image
                        source={{
                            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgpnmY-O9iz09Jka-vGvK2Lv-U-pL3H18CfA&s",
                        }}
                        style={style.avatar}
                    />
                    <Text style={style.Name}>Israel Cuevas</Text>
                    <View style={style.infoContainer}>
                        <Text style={style.info}>Correo</Text>
                        <Text style={style.label}>israel@gmail.com</Text>
                        <Text style={style.info}>Telefono</Text>
                        <Text style={style.label}>xxx-xxx-xx-xx</Text>
                    </View>

                    <TouchableOpacity style={style.botonIcono}>
                            <Ionicons name="send" size={20} style={style.iconoIzq}></Ionicons>
                            <Text style={style.textBoton}>Registrarse</Text>
                        </TouchableOpacity>

                </View>
            </ScrollView>
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
    container: {
        width: '100%',
        backgroundColor: '#fafafaff',
        borderRadius: 15,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#fff',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 10,
        elevation: 5,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 75,
        marginBottom: 20,
        borderWidth: 2,
        borderColor: '#020202ff'
    },
    Name: {
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 10,
    },
    infoContainer: {
        width: '100%',
        marginBottom: 15,
    },
    info: {
        fontWeight: 'bold',
        fontSize: 13,
        marginBottom: 10,
    },
    label: {
        fontSize: 15,
        marginBottom: 10,
        borderRadius: 15,
        backgroundColor: '#cf8a8aff',
        padding:10
    },
    botonIcono: {
        backgroundColor: '#0f7ce2ff',
        marginTop: 15,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        width:'80%',
        borderRadius: 15,
    },
    iconoIzq: {
        color: '#fff',
        marginRight: 10,
    },
    textBoton: {
        color: '#f5f2f2ff',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
    },
})