import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function CardV3() {
    return (
        <View style={style.card}>
            <Image
                style={style.imagen}
                source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYaNAmcHAKJ1Sj0bNPhceqR0Nd1roPsbrhrg&s",
                }}
            ></Image>
            <View style={style.cardcontenido}>
                <Text style={style.title}>Card con Imagen</Text>
                <Text style={style.contenido}>Contenido del Card</Text>
                <TouchableOpacity style={style.botonIcono}>
                    <Ionicons name="send" size={20} style={style.iconoIzq}></Ionicons>
                    <Text style={style.textBoton}>Boton Grande</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        //padding:16,
        margin: 10,
        borderRadius: 10,
        shadowColor: "#313030ff",
        elevation: 4,
        shadowOpacity: 0.5,
        shadowRadius: 6,
        overflow: "hidden",
        shadowOffset: { width: 0, height: 3 },
    },
    title: {
        fontSize: 14,
        fontWeight: "bold",
        marginTop: 20,
    },
    contenido: {
        marginBottom: 12,
        fontSize: 12,
        color: "#571111ff",
    },
    imagen: {
        width: "100%",
        height: 150,
        borderRadius: 0,
    },
    cardcontenido: {
        padding: 16,
        //backgroundColor: '#f79292ff'
    },
    botonIcono: {
        backgroundColor: "#6bbbf1ff",
        marginTop: 10,
        flexDirection: "row",
        paddingVertical: 12,
        paddingHorizontal: 18,
        borderRadius: 15,
        alignSelf: "flex-start",
    },
    iconoIzq: {
        color: "#f17b7bff",
        marginRight: 10,
    },
    text: {
        fontWeight: "bold",
        fontSize: 12,
    },
});