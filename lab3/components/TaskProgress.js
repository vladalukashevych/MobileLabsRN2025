import { View, Text, StyleSheet } from 'react-native';
import { ProgressBar } from 'react-native-paper';

const TaskProgress = ({ tasks }) => {
    const total = tasks.length;
    const completed = tasks.filter(task => task.progress >= task.goal).length;
    const progress = completed / total;

    return (
        <View style={styles.container}>
            <ProgressBar progress={progress} color="#2196F3" style={styles.bar} />
            {tasks.map(task => (
                <Text key={task.id} style={styles.task}>
                    {task.label} {task.progress >= task.goal ? '💚' : `(${task.progress}/${task.goal})`}
                </Text>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 180,
        paddingHorizontal: 30,
        width: '100%',
    },
    bar: {
        height: 10,
        borderRadius: 5,
        marginBottom: 12,
    },
    task: {
        fontSize: 14,
        marginBottom: 4,
    },
});

export default TaskProgress;
