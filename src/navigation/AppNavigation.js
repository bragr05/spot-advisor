import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";
import { SCREEN_NAMES } from "../utils/SreenName";
import { CreateSpotScreen } from "../screens/SpotRoutes/CreateSpotScreen";

import { AccountScreen } from "../screens/AccountScreen";
import { FavoriteScreen } from "../screens/FavoriteScreen";
import { RankingScreen } from "../screens/RankingScreen";
import { SearchScreen } from "../screens/SearchScreen";
import { SpotStack } from "../navigation/SpotStack";

const Tab = createBottomTabNavigator();

export function AppNavigation() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: "#055637",
                tabBarInactiveTintColor: "#909090",
                tabBarIcon: ({ color, size }) =>
                    SetScreenOption({ route, color, size }),
            })}
        >
            <Tab.Screen
                name={SCREEN_NAMES.SPOT_STACK.tab}
                component={SpotStack}
            />
            <Tab.Screen
                name={SCREEN_NAMES.SEARCH_STACK.tab}
                component={SearchScreen}
            />
            <Tab.Screen
                name={SCREEN_NAMES.FAV_STACK.tab}
                component={FavoriteScreen}
            />
            <Tab.Screen
                name={SCREEN_NAMES.RANK_STACK.tab}
                component={RankingScreen}
            />
            <Tab.Screen
                name={SCREEN_NAMES.ACCOUNT_STACK.tab}
                component={AccountScreen}
            />
        </Tab.Navigator>
    );
}

function SetScreenOption({ route, color, size }) {
    let iconName = "";

    if (route.name === SCREEN_NAMES.SPOT_STACK.tab) {
        iconName = "pine-tree-fire";
    }
    if (route.name === SCREEN_NAMES.SEARCH_STACK.tab) {
        iconName = "magnify";
    }
    if (route.name === SCREEN_NAMES.FAV_STACK.tab) {
        iconName = "star-outline";
    }
    if (route.name === SCREEN_NAMES.RANK_STACK.tab) {
        iconName = "trophy-outline";
    }
    if (route.name === SCREEN_NAMES.ACCOUNT_STACK.tab) {
        iconName = "account-outline";
    }

    return (
        <Icon
            type="material-community"
            name={iconName}
            color={color}
            size={size}
        />
    );
}
