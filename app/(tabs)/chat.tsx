import { useState } from 'react';
import { Link } from 'expo-router';
import { Text, View, StyleSheet, Button, FlatList } from 'react-native';

export default function Index() {
    const [messages, setMessages] = useState([
        { id: '1', text: 'Hello from user 1', user: 'User 1' },
        { id: '2', text: 'Hello from user 2', user: 'User 2' },
    ]);

    const [groups, setGroups] = useState([
        { id: '1', name: 'Group 1' },
        { id: '2', name: 'Group 2' },
    ]);

    const createGroupChat = () => {
        const newGroup = { id: (groups.length + 1).toString(), name: `Group ${groups.length + 1}` };
        setGroups([...groups, newGroup]);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Chat</Text>
            <Link href="/chat" style={styles.button}>
                Go to chat screen
            </Link>
            <Text style={styles.text}>One-to-One Messages:</Text>
            <FlatList
                data={messages}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Text style={styles.message}>{item.user}: {item.text}</Text>
                )}
            />
            <Text style={styles.text}>Group Chats:</Text>
            <FlatList
                data={groups}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Text style={styles.message}>{item.name}</Text>
                )}
            />
            <Button title="Create Group Chat" onPress={createGroupChat} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
        marginBottom: 10,
    },
    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
        marginBottom: 20,
    },
    message: {
        color: '#fff',
        marginBottom: 5,
    },
});
