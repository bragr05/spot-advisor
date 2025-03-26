import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AccountScreen } from "../screens/AccountScreen";
import { FavoritesScreen } from "../screens/FavoritesScreen";
import { RankingScreen } from "../screens/RankingScreen";
import { SearchScreen } from "../screens/SearchScreen";
import { SpotsScreen } from "../screens/SpotsScreen";

const Tab = createBottomTabNavigator();

export function AppNavigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Spot" component={SpotsScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Fav" component={FavoritesScreen} />
            <Tab.Screen name="Rank" component={RankingScreen} />
            <Tab.Screen name="Account" component={AccountScreen} />
        </Tab.Navigator>
    );
}
