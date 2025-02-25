import {Text, View, StyleSheet, TextInput, TouchableOpacity} from "react-native";


const ProfileScreen = () => (
    <View style={styles.content}>
        <Text style={styles.title}>Register</Text>

        <View style={styles.inputContainer}>
            <Text style={styles.label}>First Name</Text>
            <TextInput style={styles.input} />
        </View>

        <View style={styles.inputContainer}>
            <Text style={styles.label}>Surname</Text>
            <TextInput style={styles.input} />
        </View>

        <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} keyboardType="email-address" />
        </View>

        <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.input} secureTextEntry />
        </View>

        <View style={styles.inputContainer}>
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput style={styles.input} secureTextEntry />
        </View>

        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    content: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 24,
        color: "black",
        textAlign: "center",
        marginBottom: 8,
    },
    inputContainer: {
        marginBottom: 10,
    },
    label: {
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 5,
        color: "#333",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        borderRadius: 5,
        fontSize: 16,
        backgroundColor: "#f3f3f3",
    },
    button: {
        backgroundColor: "#007AFF",
        padding: 15,
        borderRadius: 5,
        alignItems: "center",
        marginTop: 30,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});


export default ProfileScreen;