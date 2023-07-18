import { SafeAreaView, View, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Router";

type ScreenProps = NativeStackScreenProps<RootStackParamList, "MemberResultScreen">;

function MemberResult({ route }: ScreenProps) {

    const userInfo = route.params;

    return (
        <SafeAreaView>
            <Text>Üye Adı: {userInfo.firstName} </Text>
            <Text>Üye Soyadı: {userInfo.lastName}</Text>
            <Text>Üye Yaşı: {userInfo.age}</Text>
            <Text>Üye E-posta: {userInfo.mail}</Text>
        </SafeAreaView>
    );
}

export default MemberResult;