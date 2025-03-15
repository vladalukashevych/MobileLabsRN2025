import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Image } from "react-native";
import StoreScreen from "../screens/StoreScreen";
import CommunityScreen from "../screens/CommunityScreen";
import ChatScreen from "../screens/ChatScreen";
import SafetyScreen from "../screens/SafetyScreen";
import ProfileScreen from "../screens/ProfileScreen";
import {useContext} from "react";
import {ThemeContext} from "../theme/theme";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({color, size}) => {
                    if (route.name === "Profile")
                        return <Image source={require("../assets/images/avatar-main.png")} style={{ width: 24, height: 24, borderRadius: 50 }} />;

                    let iconName;
                    if (route.name === "Store") iconName = "shopping-bag";
                    else if (route.name === "Community") iconName = "user";
                    else if (route.name === "Chat") iconName = "comment";
                    else if (route.name === "Safety") iconName = "shield-alt";

                    return <FontAwesome5 name={iconName} size={22} color={color} />;
                },
                tabBarActiveTintColor: theme.mainNavIconActive,
                tabBarInactiveTintColor: theme.mainNavIconInactive,
                tabBarStyle: {
                    backgroundColor: theme.mainNavBackground,
                    paddingTop: 10,
                    paddingBottom: 50,
                    paddingHorizontal: 10,
                    borderTopWidth: 0,
                },
            })}
        >
            <Tab.Screen name="Store" component={StoreScreen} />
            <Tab.Screen name="Community" component={CommunityScreen} />
            <Tab.Screen name="Chat" component={ChatScreen} />
            <Tab.Screen name="Safety" component={SafetyScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
};


export default function AppNavigator() {
    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    );
}
