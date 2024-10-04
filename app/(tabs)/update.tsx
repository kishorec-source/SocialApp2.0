import { Link } from 'expo-router';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const notifications = [
    { id: '1', message: 'User posts', details: ['New post from John', 'Alice liked your post', 'Comment on your post'] },
    { id: '2', message: 'Reunion planning', details: ['Meeting at 5 PM', 'Venue: Central Park', 'Bring your ID'] },
    { id: '3', message: 'Class update', details: ['New assignment posted', 'Exam schedule updated', 'Project submission deadline'] },
    { id: '4', message: 'Announcement update', details: ['Holiday on Friday', 'New course available', 'Workshop on Saturday'] },
];

export default function Index() {
    return (
        <View style={styles.container}>
            <FlatList
                data={notifications}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.notification}>{item.message}</Text>
                        {item.details.map((detail, index) => (
                            <View key={index} style={styles.bulletPoint}>
                                <MaterialIcons name="circle" size={6} color="#fff" style={styles.bulletIcon} />
                                <Text style={styles.detail}>{detail}</Text>
                            </View>
                        ))}
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        padding: 10,
    },
    card: {
        backgroundColor: '#3a3f47',
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
        width: '100%',
    },
    notification: {
        color: '#fff',
        fontSize: 18,
        marginBottom: 10,
    },
    bulletPoint: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    bulletIcon: {
        marginRight: 10,
    },
    detail: {
        color: '#fff',
        fontSize: 16,
    },
    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
        marginTop: 20,
    },
});
