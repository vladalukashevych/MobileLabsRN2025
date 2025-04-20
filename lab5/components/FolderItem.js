import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function FolderItem({ item, onPress, onDelete }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.folder}>📁 {item.name}</Text>
            <TouchableOpacity onPress={onDelete}>
                <Text style={styles.delete}>🗑</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 8,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    folder: {
        fontSize: 16,
        color: '#333',
    },
    delete: {
        fontSize: 18,
        color: 'red',
    },
});
