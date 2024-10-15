import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function PayScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>PayScreen</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('HomeScreen')}
            />
            <Button
                title="Go to details"
                onPress={() => navigation.navigate('DetailsScreen')}
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

export default PayScreen;