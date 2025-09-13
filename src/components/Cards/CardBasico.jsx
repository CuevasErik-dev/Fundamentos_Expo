import { StyleSheet, Text, View} from "react-native";

export default function CardBasico() {
    return (

        <View style={style.card}>
            <Text style={style.title}>Titulo del card</Text>
            <Text style={style.contenido}>Contenido del Card</Text>
        </View>

    );
}

const style = StyleSheet.create({
    card:{
        backgroundColor:'#fff',
        padding:16,
        margin:10,
        borderRadius:10,
        shadowColor:'#313030ff',
        elevation:4,
        shadowOpacity:5,
        shadowRadius:4
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center',
    },
    contenido:{
        marginTop:10
    }
})