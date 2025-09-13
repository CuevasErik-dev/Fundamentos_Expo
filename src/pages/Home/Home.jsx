import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Home() {
    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgpnmY-O9iz09Jka-vGvK2Lv-U-pL3H18CfA&s",
                }}
                style={styles.image}
            />
            <Text style={styles.text}>Bienvenidos!</Text>
            <Text style={styles.content}>La imagen es de Ado</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#7e7d77ff",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "#ffffff",
        fontSize: 30,
        fontWeight: "bold",
        backgroundColor: "#000000",
        padding: 10,
        borderRadius: 20,
        marginTop: 20,
    },
    content: {
        paddingTop: 20,
        color: "#880788ff",
        fontSize: 40,
        fontWeight: "normal",
        fontStyle: "italic",
        justifyContent: "center",
        textAlign: "center",
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 75,
    },
});
