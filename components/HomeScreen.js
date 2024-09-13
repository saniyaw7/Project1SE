import { Button, StyleSheet, Text, View } from 'react-native'

const HomeScreen = ({navigation}) => {
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

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});