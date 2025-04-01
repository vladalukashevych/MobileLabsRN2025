import {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import ClickableObject from '../components/ClickableObject';

const HomeScreen = ({navigation}) => {
    const [score, setScore] = useState(0);

    const handleScore = (points) => setScore(prev => prev + points);

    return (
        <View style={styles.container}>
            <Text style={styles.score}>Score: {score}</Text>
            <ClickableObject onScore={handleScore}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    score: {
        fontSize: 32,
        position: "relative",
        top: -150
    }
});

export default HomeScreen;
