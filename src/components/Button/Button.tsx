import { TouchableOpacity, Text, GestureResponderEvent } from "react-native";
import styles from "./Button.styles";

const Button = ({ text, onPress }: { text: string, onPress: (event: GestureResponderEvent) => void }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} >
            <Text style={styles.text} >{text}</Text>
        </TouchableOpacity>
    );
}

export default Button;