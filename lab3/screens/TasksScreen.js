import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ClickableObject from '../components/ClickableObject';
import TaskProgress from '../components/TaskProgress';
import initialTasks from '../data/tasks';

export default function TasksScreen() {
    const [clicks, setClicks] = useState(0);
    const [tasks, setTasks] = useState(initialTasks);

    const updateTask = (id, increment = 1) => {
        setTasks(prev =>
            prev.map(task =>
                task.id === id
                    ? { ...task, progress: Math.min(task.progress + increment, task.goal) }
                    : task
            )
        );
    };

    const handleScore = (points, type) => {
        setClicks(prev => {
            const newTotal = prev + points;
            updateTask('score100', points);
            return newTotal;
        });

        if (type === 'tap') updateTask('tap10');
        if (type === 'doubleTap') updateTask('doubleTap5');
        if (type === 'longPress') updateTask('longPress');
        if (type === 'pan') updateTask('pan');
        if (type === 'pinch') updateTask('pinch');
        if (type === 'swipeRight') updateTask('swipeRight');
        if (type === 'swipeLeft') updateTask('swipeLeft');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.score}>Score: {clicks}</Text>
            <TaskProgress tasks={tasks} style={styles.task}/>
            <View style={styles.clickable}><ClickableObject onScore={handleScore} /></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40
    },
    score: {
        fontSize: 28,
        marginBottom: 200
    },
    clickable: {
        position: 'absolute',
        top: 230,
    },

});