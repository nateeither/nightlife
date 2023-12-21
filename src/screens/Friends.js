import { View, Text, StyleSheet } from 'react-native';
import Fonts from '../constants/Fonts';

const Friends = () => { 
    return (
        <View style={styles.screenContainer}>
            <Text style={Fonts.title2}>Friends</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Friends;