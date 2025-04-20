import { useEffect, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Button,
    ActivityIndicator,
    Alert,
} from 'react-native';
import * as FileSystem from 'expo-file-system';

export default function EditFileScreen({ route, navigation }) {
    const { uri } = route.params;
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const data = await FileSystem.readAsStringAsync(uri);
                setContent(data);
            } catch (e) {
                Alert.alert('Error', 'Failed to load file content.');
                console.error(e);
            }
            setLoading(false);
        })();
    }, []);

    const saveChanges = async () => {
        try {
            await FileSystem.writeAsStringAsync(uri, content);
            Alert.alert('Success', 'File saved successfully!');
            navigation.goBack();
        } catch (e) {
            Alert.alert('Error', 'Failed to save changes.');
            console.error(e);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{route.params.name}</Text>
            {loading ? (
                <ActivityIndicator size="large" />
            ) : (
                <>
                    <TextInput
                        value={content}
                        onChangeText={setContent}
                        multiline
                        style={styles.input}
                        textAlignVertical="top"
                    />
                    <Button title="Save" onPress={saveChanges} />
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        paddingHorizontal: 9,
    },
    input: {
        backgroundColor: '#fdfdfd',
        borderRadius: 6,
        flex: 1,
        marginBottom: 10,
        paddingHorizontal: 9,
    },
});
