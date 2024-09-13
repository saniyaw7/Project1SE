import { Button, StyleSheet, Text, View } from 'react-native'

const TestHomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Welcome</Text>
            <Button 
                title='Search By Equipment'
                onPress={() => navigation.navigate("Equipment")}
            />
        </View>
    )
}

export default TestHomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});