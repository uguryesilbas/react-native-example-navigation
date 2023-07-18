import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "./pages/Welcome";
import MemberSign, { UserInfo } from "./pages/MemberSign";
import MemberResult from "./pages/MemberResult";

export type RootStackParamList = {
    WelcomeScreen: undefined;
    MemberSignScreen: undefined;
    MemberResultScreen: UserInfo
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

function Router() {
    return (
        <NavigationContainer>
            <RootStack.Navigator screenOptions={{ headerShown: false }}>
                <RootStack.Screen name="WelcomeScreen" component={Welcome} />
                <RootStack.Screen name="MemberSignScreen" component={MemberSign} />
                <RootStack.Screen name="MemberResultScreen" component={MemberResult} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}

export default Router;