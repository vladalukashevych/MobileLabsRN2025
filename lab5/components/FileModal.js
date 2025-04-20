// components/FileModal.js
import React, { useState } from 'react';
import {
    Modal,
    View,
    Text,
    TextInput,
    StyleSheet,
    Button,
} from 'react-native';

export default function FileModal({ visible, type, onClose, onCreate }) {
    const [name, setName] = useState('');
    const [content, setContent] = useState('');

    const handleCreate = () => {
        if (!name.trim()) return;
        onCreate(name.trim(), type, content);
        setName('');
        setContent('');
        onClose();
    };

    return (
        <Modal visible={visible} animationType="slide" transparent>
            <View style={styles.overlay}>
                <View style={styles.modal}>
                    <Text style={styles.title}>
                        {type === 'folder' ? 'Create Folder' : 'Create Text File'}
                    </Text>

                    <TextInput
                        placeholder="Enter name"
                        value={name}
                        onChangeText={setName}
                        style={styles.input}
                    />

                    {type === 'file' && (
                        <TextInput
                            placeholder="File content"
                            value={content}
                            onChangeText={setContent}
                            style={[styles.input, styles.textarea]}
                            multiline
                        />
                    )}

                    <View style={styles.buttons}>
                        <Button title="Cancel" onPress={onClose} />
                        <Button title="Create" onPress={handleCreate} />
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
    modal: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        backgroundColor: '#eee',
        padding: 10,
        marginBottom: 10,
        borderRadius: 6,
    },
    textarea: {
        height: 80,
        textAlignVertical: 'top',
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
