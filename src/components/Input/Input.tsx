import { View, Text, TextInput } from "react-native";
import styles from "./Input.styles";

type InputProps = {
    label: string;
    placeHolder: string;
    isNumeric?: boolean;
    onChangeText: (text: string | null) => void;
}

function Input(props: InputProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}> {props.label} </Text>
            <View style={styles.inputContainer}>
                <TextInput placeholder={props.placeHolder} onChangeText={props.onChangeText} keyboardType={
                    props.isNumeric ? "numeric" : "default"
                } />
            </View>
        </View>
    );
}

export default Input;