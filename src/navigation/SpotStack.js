import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SpotScreen } from "../screens/SpotRoutes/SpotScreen";
import { SCREEN_NAMES } from "../utils/SreenName";

const Stack = createNativeStackNavigator();

export function SpotStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={SCREEN_NAMES.SPOT_STACK.SpotScreen}
                component={SpotScreen}
            />
        </Stack.Navigator>
    );
}
