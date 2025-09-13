import { Image, StyleSheet, Text, View} from "react-native";

export default function Cardimg() {
    return (

        <View style={style.card}>
            <Image style={style.imagen} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYaNAmcHAKJ1Sj0bNPhceqR0Nd1roPsbrhrg&s'}}></Image>
            <Text style={style.title}>Card con Imagen</Text>
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
    },
    imagen:{
        width:'100%',
        height:150, 
        borderRadius:10
    },
})
