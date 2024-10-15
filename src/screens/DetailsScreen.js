import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function DetailsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Details Screen</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('HomeScreen')}
            />
            <Button 
                title = "Go to Pay"
                onPress = {() => navigation.navigate('PayScreen')}
            />
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default DetailsScreen;