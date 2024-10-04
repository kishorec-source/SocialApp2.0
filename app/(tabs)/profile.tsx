import { Link } from 'expo-router';
import { Text, View, StyleSheet, TextInput, Image, ScrollView } from 'react-native';

export default function Index() {
    // Dummy data
    const uploadedImages = [
        'https://via.placeholder.com/100',
        'https://via.placeholder.com/100',
        'https://via.placeholder.com/100',
        'https://via.placeholder.com/100',
        'https://via.placeholder.com/100',
        'https://via.placeholder.com/100',
        'https://via.placeholder.com/100',
        'https://via.placeholder.com/100',
        'https://via.placeholder.com/100',
    ];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.card}>
                <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.profileImage} />
                <TextInput placeholder="Username" value="john_doe" style={styles.input} />
                <TextInput placeholder="Name" value="John Doe" style={styles.input} />
                <TextInput placeholder="Mobile Number" value="123-456-7890" style={styles.input} />
                <TextInput placeholder="Address" value="123 Main St" style={styles.input} />
                <TextInput placeholder="Year" value="2023" style={styles.input} />
                <TextInput placeholder="Batch" value="A1" style={styles.input} />
                <TextInput placeholder="Bio" value="Lorem ipsum dolor sit amet." style={styles.input} multiline />
                <TextInput placeholder="Interests" value="Coding, Music, Sports" style={styles.input} multiline />
            </View>
            <Text style={styles.subHeader}>Uploaded Images</Text>
            <View style={styles.imagesContainer}>
                {uploadedImages.map((uri, index) => (
                    <Image key={index} source={{ uri }} style={styles.uploadedImage} />
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    card: {
        backgroundColor: '#333',
        borderRadius: 10,
        padding: 20,
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    subHeader: {
        fontSize: 20,
        color: '#fff',
        marginTop: 30,
        marginBottom: 10,
    },
    imagesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    uploadedImage: {
        width: 100,
        height: 100,
        margin: 5,
    },
});
