import {useEffect, useState} from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Alert,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import * as Device from 'expo-device';

import Header from '../components/Header';
import FileItem from '../components/FileItem';
import FolderItem from '../components/FolderItem';
import FileModal from '../components/FileModal';
import ConfirmDialog from '../components/ConfirmDialog';
import {getFileInfo} from '../utils/fileUtils';

export default function HomeScreen({navigation, rootDir}) {
    const [currentPath, setCurrentPath] = useState(rootDir);
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState('folder');
    const [confirmVisible, setConfirmVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const [storageInfo, setStorageInfo] = useState({free: 0, total: 0});

    useEffect(() => {
        loadDirectory(currentPath);
        loadStorageInfo();
    }, [currentPath]);

    const loadStorageInfo = async () => {
        const permission = await MediaLibrary.requestPermissionsAsync();
        if (permission.granted) {
            const info = await MediaLibrary.getFreeDiskStorageAsync();
            const total = await MediaLibrary.getTotalDiskCapacityAsync();
            setStorageInfo({free: info, total});
        }
    };
    const loadDirectory = async (path) => {
        setLoading(true);
        try {
            const files = await FileSystem.readDirectoryAsync(path);
            const detailed = await Promise.all(
                files.map(async name => {
                    const fullPath = path + name + (name.endsWith('/') ? '' : '/');
                    const info = await FileSystem.getInfoAsync(path + name);
                    return {
                        name,
                        isDirectory: info.isDirectory,
                        uri: path + name,
                        modTime: info.modificationTime,
                        size: info.size || 0,
                    };
                })
            );
            setItems(detailed);
        } catch (err) {
            console.error(err);
        }
        setLoading(false);
    };

    const goToFolder = (item) => {
        setCurrentPath(item.uri + '/');
    };

    const goUp = () => {
        if (currentPath !== rootDir) {
            const newPath = currentPath.slice(0, currentPath.lastIndexOf('/', currentPath.length - 2) + 1);
            setCurrentPath(newPath);
        }
    };

    const createItem = async (name, type, content) => {
        const fullPath = currentPath + name;
        try {
            if (type === 'folder') {
                await FileSystem.makeDirectoryAsync(fullPath);
            } else {
                await FileSystem.writeAsStringAsync(fullPath + '.txt', content || '');
            }
            loadDirectory(currentPath);
        } catch (e) {
            console.error(e);
        }
    };
    const deleteItem = async () => {
        try {
            await FileSystem.deleteAsync(selectedItem.uri, {idempotent: true});
            setConfirmVisible(false);
            setSelectedItem(null);
            loadDirectory(currentPath);
        } catch (e) {
            console.error(e);
        }
    };

    const renderItem = ({item}) =>
        item.isDirectory ? (
            <FolderItem item={item} onPress={() => goToFolder(item)} onDelete={() => showConfirm(item)}/>
        ) : (
            <FileItem
                item={item}
                onOpen={() =>
                    navigation.navigate('ViewFile', {
                        uri: item.uri,
                        name: item.name
                    })
                }
                onDelete={() => showConfirm(item)}
                onEdit={() =>
                    navigation.navigate('EditFile', {
                        uri: item.uri,
                        name: item.name
                    })
                }
            />
        );

    const showConfirm = (item) => {
        setSelectedItem(item);
        setConfirmVisible(true);
    };

    const relativePath = currentPath.replace(rootDir, '') || '/';


    return (
        <View style={styles.container}>
            <Header
                path={relativePath}
                onGoUp={goUp}
                onCreateFolder={() => {
                    setModalType('folder');
                    setShowModal(true);
                }}
                onCreateFile={() => {
                    setModalType('file');
                    setShowModal(true);
                }}
                storageInfo={storageInfo}
            />

            {loading ? (
                <ActivityIndicator size="large"/>
            ) : (
                <FlatList
                    data={items}
                    keyExtractor={(item) => item.uri}
                    renderItem={renderItem}
                />
            )}

            <FileModal
                visible={showModal}
                type={modalType}
                onClose={() => setShowModal(false)}
                onCreate={createItem}
            />

            <ConfirmDialog
                visible={confirmVisible}
                item={selectedItem}
                onCancel={() => setConfirmVisible(false)}
                onConfirm={deleteItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
});
