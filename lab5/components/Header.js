import { View, Text, StyleSheet, Button } from 'react-native';

const formatBytes = (bytes) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

export default function Header({ path, onGoUp, onCreateFolder, onCreateFile, storageInfo }) {
    return (
        <View style={styles.container}>
            <Text style={styles.path}>Path: /{path}</Text>

            <View style={styles.storageRow}>
                <Text>Storage: {formatBytes(storageInfo.total)} total</Text>
                <Text>Free: {formatBytes(storageInfo.free)}</Text>
                <Text>Used: {formatBytes(storageInfo.total - storageInfo.free)}</Text>
            </View>

            <View style={styles.buttonRow}>
                <Button title="Up" onPress={onGoUp} />
                <Button title="New Folder" onPress={onCreateFolder} />
                <Button title="New File" onPress={onCreateFile} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    path: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 5,
    },
    storageRow: {
        marginBottom: 10,
    },
});
