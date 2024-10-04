import React, { useState } from 'react';
import { Link } from 'expo-router';
import { Text, View, StyleSheet, TextInput, Button, FlatList } from 'react-native';

export default function Buddy() {
    const [searchQuery, setSearchQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = () => {
        // Implement search logic here
        // Update results state with search results
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Buddy</Text>
            <Link href="/buddy" style={styles.button}>
                Go to buddy screen
            </Link>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Search by name, school, graduation year, or location"
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />
                <Button title="Search" onPress={handleSearch} />
                <FlatList
                    data={results}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.resultItem}>
                            <Text style={styles.resultText}>{item.name}</Text>
                        </View>
                    )}
                />
            </View>
            <View style={styles.yearbooksContainer}>
                <Text style={styles.text}>Yearbooks and Reunions</Text>
                {/* Add components for viewing yearbooks, creating and managing reunion events, and RSVPing */}
            </View>
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
    },
    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
    },
    searchContainer: {
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        color: '#fff',
    },
    resultItem: {
        padding: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    resultText: {
        color: '#fff',
    },
    yearbooksContainer: {
        padding: 20,
    },
});
