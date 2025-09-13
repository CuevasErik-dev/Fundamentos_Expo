import { SafeAreaView,Text, StyleSheet, Platform, StatusBar, View } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons'

export default function App() {
    return (
        <SafeAreaView style={style.mainS}>
            {/* Inicio de AppbBar */}
            <View style={style.appBar}>
                <Ionicons name="arrow-back-circle-outline" size={35} color='#0a0a0aff' />
                <Text style={style.appBarTitle}>Lista de Usuarios</Text>
                <View style={style.Barra}>

                </View>
            </View>
            {/* Cierre de Appbar */}
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    mainS: {
        flex: 1,
        backgroundColor: "#ffffffff",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 44,
    },
    appBar:{
        height:50,
        width:'100%',
        backgroundColor:'#e9c0c0ff',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:16,
        borderWidth: 0.2,
        borderColor:'#fd8282ff' 
    },
    appBarTitle:{
        fontWeight:'bold',
        fontSize:16
    },
    barra:{
        width:20,
    }
});