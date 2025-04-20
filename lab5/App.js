import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as FileSystem from 'expo-file-system';
import { ActivityIndicator, View } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import FileViewScreen from './screens/FileViewScreen';
import EditFileScreen from './screens/EditFileScreen';

const Stack = createNativeStackNavigator();
const ROOT_DIR = FileSystem.documentDirectory + 'AppData/';

export default function App() {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        (async () => {
            const dirInfo = await FileSystem.getInfoAsync(ROOT_DIR);
            if (!dirInfo.exists) {
                await FileSystem.makeDirectoryAsync(ROOT_DIR, { intermediates: true });
            }
            setReady(true);
        })();
    }, []);

    if (!ready) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" options={{ title: 'File Manager' }}>
                    {props => <HomeScreen {...props} rootDir={ROOT_DIR} />}
                </Stack.Screen>
                <Stack.Screen name="ViewFile" component={FileViewScreen} />
                <Stack.Screen name="EditFile" component={EditFileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}