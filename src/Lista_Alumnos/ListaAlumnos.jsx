import { SafeAreaView,Text, StyleSheet, Platform, StatusBar } from "react-native"

export default function App() {
    return (
        <SafeAreaView style={style.mainS}>
            <Text>Hola</Text>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    mainS: {
        flex: 1,
        backgroundColor: "#e9c0c0ff",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 44,
        padding: 16,
    },
});