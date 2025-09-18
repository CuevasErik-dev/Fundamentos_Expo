import { SafeAreaView, Text, StyleSheet, Platform, StatusBar, View, ScrollView, Image, TouchableOpacity } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { useState } from "react";

export default function App() {
    const [color, setColor] = useState("#ebe8e8ff");

    //Funcion para cambiar de color 
    const cambiarColor = () => {
        if (color === "#ebe8e8ff") {
            setColor("skyblue");
        } else {
            setColor("#ebe8e8ff");
        }
    };
    //fin de la funcion cambiar color
    
    return (
        <SafeAreaView style={[style.mainS, { backgroundColor: color }]}>
            {/* Inicio de AppbBar */}
            <View style={style.appBar}>
                {/*  inicio de Boton para regresar */}
                <TouchableOpacity>
                    <Ionicons name="arrow-back-circle-outline" size={35} color='#fdfcfcff' />
                </TouchableOpacity>
                {/*  fin  de Boton para regresar */}
                <Text style={style.appBarTitle}>Lista de Usuarios</Text>
                <View style={style.Barra}></View>
                <TouchableOpacity onPress={cambiarColor}>
                    <Ionicons name="color-palette" size={35} color='#fff' />
                </TouchableOpacity>

            </View>
            {/* Cierre de Appbar */}
            {/* Iniicio de contenido (Lista de Alumno)*/}
            <ScrollView>
                <Text style={style.sectionTitle}> Alumnos de Aplicaciones Moviles </Text>

                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                    <View key={index} style={style.card}>
                        <Image
                            source={{
                                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgpnmY-O9iz09Jka-vGvK2Lv-U-pL3H18CfA&s",
                            }}
                            style={style.avatar}
                        />

                        <View style={style.cardInfo}>
                            <Text style={style.key}>{index + 1}</Text>
                            <Text style={style.userName}>Israel  Cuevas</Text>
                            <Text style={style.userDetails}>Ingenieria en Sistemas Computacionlaes</Text>
                            {/* Boton para obtener mas informacion */}
                            <TouchableOpacity style={style.saveButon}>
                                <Text style={style.textButon}>Ver mas ...</Text>
                            </TouchableOpacity>
                            {/* Boton para obtener mas informacion */}
                        </View>
                    </View>
                ))}
            </ScrollView>
            {/* cierre de contenido (Lista de Alumno) */}
            {/* Inicio de Navbar */}
            <View style={style.navbar}>
                <View style={style.navItem}>
                    <Ionicons name="home" size={30} color='#fff' />
                    <Text style={style.navText}>Inicio</Text>
                </View><View style={style.navItem}>
                    <Ionicons name="save" size={30} color='#fff' />
                    <Text style={style.navText}>Guardar</Text>
                </View><View style={style.navItem}>
                    <FontAwesome name="user" size={30} color='#fff' />
                    {/* Comentario como no encontre a user dentro de los iconos de Ionicons utilice el de FontAwesome
                    la importacion fue la misma que con la de Ionicons, solo fue para probar el como funciona por que
                    solo cambia el nombre del icono siendo user pra FontAwesome y Person para Ionicons*/}
                    <Text style={style.navText}>Usuario</Text>
                </View>

            </View>
            {/* Cierre de Navbar */}
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    mainS: {
        flex: 1,
        backgroundColor: "#ebe8e8ff",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 44,
    },
    appBar: {
        height: 50,
        width: '100%',
        backgroundColor: '#686666ff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        borderWidth: 0.3,
        borderColor: '#070707ff'
    },
    appBarTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#fff'
    },
    Barra: {
        width: 20,
    },
    sectionTitle: {
        fontWeight: 'bold',
        fontSize: 15,
        padding: 15
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 40,
        borderColor: '#000',
        borderWidth: 1,
        marginRight: 12,
        marginLeft: 10,
        marginTop: 15
    },
    card: {
        padding: 1,
        flexDirection: 'row',
        borderRadius: 12,
        backgroundColor: '#f5f5f5ff',
        elevation: 2,
        marginBottom: 5,
        marginHorizontal: 15,
    },
    cardInfo: {
        flex: 1,
        justifyContent: 'center'
    },
    userName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    userDetails: {
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: 5,
    },
    saveButon: {
        backgroundColor: '#0f7ce2ff',
        marginTop: 5,
        alignSelf: 'flex-end',
        padding: 10,
        paddingVertical: 7,
        borderRadius: 15,
    },
    textButon: {
        color: '#fff',
        fontWeight: 'bold'
    },
    key: {
        marginTop: 0.1,
        alignSelf: 'flex-end',
        marginEnd: 10
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#686666ff',
        height: 67,
        paddingBottom: 12,
        borderWidth: 0.3,
        borderColor: '#070707ff'
    },
    navItem: {
        alignItems: 'center',
    },
    navText: {
        color: '#fff',
        fontSize: 13,
        //marginTop:0.1
    }
});