import {Text, View, FlatList, StyleSheet, Image } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import Footer from '../components/Footer';

const newsData = [
    { id: '1', title: 'News Title', date: 'date', shortText: 'Short description.' },
    { id: '2', title: 'News Title', date: 'date', shortText: 'Short description.' },
    { id: '3', title: 'News Title', date: 'date', shortText: 'Short description.' },
    { id: '4', title: 'News Title', date: 'date', shortText: 'Short description.' },
    { id: '5', title: 'News Title', date: 'date', shortText: 'Short description.' },
    { id: '6', title: 'News Title', date: 'date', shortText: 'Short description.' },
    { id: '7', title: 'News Title', date: 'date', shortText: 'Short description.' },
    { id: '8', title: 'News Title', date: 'date', shortText: 'Short description.' },
    { id: '9', title: 'News Title', date: 'date', shortText: 'Short description.' },
    { id: '10', title: 'News Title', date: 'date', shortText: 'Short description.' },
    { id: '11', title: 'News Title', date: 'date', shortText: 'Short description.' },
    { id: '12', title: 'News Title', date: 'date', shortText: 'Short description.' },
];

const NewsItem = ({ title, date, shortText }) => (
    <View style={styles.newsItem}>
        <Image source={require("../assets/image.png")} style={styles.newsImage} />
        <View style={styles.newsTextContainer}>
            <Text style={styles.newsTitle}>{title}</Text>
            <Text style={styles.newsDate}>{date}</Text>
            <Text style={styles.newsShortText}>{shortText}</Text>
        </View>
    </View>
);

const NewsList = () => {
    return (
        <View>
            <FlatList
                data={newsData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <NewsItem {...item} />}
            />
        </View>
    );
};

const HomeScreen = () => (
        <View style={styles.content}>
            <Text style={styles.title}>Home</Text>
            <NewsList />
        </View>
);

const styles = StyleSheet.create({
    content: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: "#fff",
        paddingBottom: 45,
    },
    title: {
        fontSize: 24,
        color: "black",
        textAlign: 'center',
        marginVertical: 8,
    },
    newsItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    newsImage: {
        width: 50,
        height: 50,
        borderRadius: 5,
        marginRight: 10,
    },
    newsTextContainer: {
        flex: 1,
    },
    newsTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    newsDate: {
        fontSize: 12,
        color: 'gray',
    },
    newsShortText: {
        fontSize: 14,
        color: '#333',
    },
});


export default HomeScreen;