import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import AppNavigator from './navigation/AppNavigator';
import {ThemeProviderWrapper} from "./theme/theme";


export default function App() {
    return (
        <ThemeProviderWrapper>
            <SafeAreaProvider>
                <SafeAreaView style={{flex: 1}}>
                    <AppNavigator/>
                </SafeAreaView>
            </SafeAreaProvider>
        </ThemeProviderWrapper>
    );
}
