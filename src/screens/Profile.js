import { View, Text, StyleSheet } from 'react-native';

import Fonts from '../constants/Fonts';

const Profile = () => { 
    return (
        <View style={styles.screenContainer}>
            <Text style={Fonts.title2}>Profile</Text>
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

export default Profile;