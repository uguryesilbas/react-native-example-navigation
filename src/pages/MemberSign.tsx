import { SafeAreaView, View, Text, Alert } from "react-native";
import { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Router";

import Input from "../components/Input";
import Button from "../components/Button";

type ScreenProps = NativeStackScreenProps<RootStackParamList, "MemberSignScreen">;

export type UserInfo = {
    firstName: string;
    lastName: string;
    age: number;
    mail: string;
}

function MemberSign({ navigation }: ScreenProps) {

    const [userFirstName, setUserFirtName] = useState<string | null>(null);
    const [userLastName, setUserLastName] = useState<string | null>(null);
    const [userAge, setUserAge] = useState<string | null>(null);
    const [userMail, setUserMail] = useState<string | null>(null);

    function handleSubmit() {

        if (!userFirstName || !userLastName || !userAge || !userMail) {
            Alert.alert("Fitness", "Lütfen tüm bigileri doldurunuz!");
            return;
        }

        const user: UserInfo = {
            firstName: userFirstName,
            lastName: userLastName,
            age: Number(userAge),
            mail: userMail
        };

        navigation.navigate("MemberResultScreen", user);
    }


    return (
        <SafeAreaView>
            <Input label="Üye Adı" placeHolder="Üyenin adını giriniz..." onChangeText={setUserFirtName} />
            <Input label="Üye Soyadı" placeHolder="Üyenin soyadını giriniz..." onChangeText={setUserLastName} />
            <Input label="Üye Yaş" placeHolder="Üyenin yaşını giriniz..." onChangeText={setUserAge} isNumeric={true} />
            <Input label="Üye E-posta" placeHolder="Üyenin e-posta adresini giriniz..." onChangeText={setUserMail} />
            <Button text="Kaydı Tamamla" onPress={handleSubmit} />
        </SafeAreaView >
    );
}

export default MemberSign;