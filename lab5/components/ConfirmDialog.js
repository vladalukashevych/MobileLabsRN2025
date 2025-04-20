import {
    Modal,
    View,
    Text,
    StyleSheet,
    Button,
} from 'react-native';

export default function ConfirmDialog({ visible, item, onCancel, onConfirm }) {
    if (!item) return null;

    return (
        <Modal visible={visible} animationType="fade" transparent>
            <View style={styles.overlay}>
                <View style={styles.dialog}>
                    <Text style={styles.title}>Confirm Deletion</Text>
                    <Text style={styles.message}>
                        Are you sure you want to delete{' '}
                        <Text style={styles.bold}>{item.name}</Text>?
                    </Text>
                    <View style={styles.actions}>
                        <Button title="Cancel" onPress={onCancel} />
                        <Button title="Delete" onPress={onConfirm} color="red" />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: '#000000aa',
        justifyContent: 'center',
        padding: 20,
    },
    dialog: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    message: {
        fontSize: 16,
        marginBottom: 20,
    },
    bold: {
        fontWeight: 'bold',
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
