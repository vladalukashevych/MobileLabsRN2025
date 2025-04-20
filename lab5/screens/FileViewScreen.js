import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { useLayoutEffect } from 'react';


export default function FileViewScreen({ route }) {
    const { uri } = route.params;
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const data = await FileSystem.readAsStringAsync(uri);
                setContent(data);
            } catch (e) {
                setContent('Error reading file.');
                console.error(e);
            }
            setLoading(false);
        })();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{route.params.name}</Text>
            {loading ? (
                <ActivityIndicator size="large" />
            ) : (
                <ScrollView style={styles.box}>
                    <Text>{content}</Text>
                </ScrollView>
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
        marginBottom: 15,
        paddingHorizontal: 9,
    },
    box: {
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
        paddingHorizontal: 9,
    },
});
