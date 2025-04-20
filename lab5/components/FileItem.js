import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import moment from 'moment';

export default function FileItem({ item, onOpen, onEdit, onDelete }) {
    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <Text style={styles.file}>📄 {item.name}</Text>
                <Text style={styles.meta}>
                    {item.size} bytes | {moment(item.modTime * 1000).format('HH:mm DD-MM-YYYY')}
                </Text>
            </View>
            <View style={styles.actions}>
                <TouchableOpacity onPress={onOpen}>
                    <Text style={styles.action}>📖</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onEdit}>
                    <Text style={styles.action}>✏️</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onDelete}>
                    <Text style={styles.action}>🗑</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 8,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    info: {
        flex: 1,
    },
    file: {
        fontSize: 16,
        color: '#333',
    },
    meta: {
        fontSize: 12,
        color: '#888',
    },
    actions: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    action: {
        fontSize: 18,
        marginHorizontal: 6,
    },
});
