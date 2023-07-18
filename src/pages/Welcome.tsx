import { View, SafeAreaView, Text, StyleSheet } from "react-native";
import Button from "../components/Button";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Router";

type Props = NativeStackScreenProps<RootStackParamList, "WelcomeScreen">;

function Welcome({ route, navigation }: Props) {

    function gotoMemberSign() {
        navigation.navigate('MemberSignScreen');
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header} >Fitness Salonu</Text>
            <Button text="Üye Kaydı Oluştur" onPress={gotoMemberSign} />
        </SafeAreaView>
    );
}

export default Welcome;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
    }
});