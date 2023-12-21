import {
    StyleSheet,
    View,
    Image,
    FlatList,
    useWindowDimensions,
    Text,
    ScrollView,
    Pressable
} from 'react-native';


import Fonts from '../constants/Fonts'
import Colors from '../constants/Colors'

const DjItem = (props) => {
    return (
        <View style={styles.djItemContainer}>
            <View style={styles.fullRowCenter}>
                <View style={styles.djImageContainer}>
                    <Image source={props.djItem.image} style={styles.djImage} />
                </View>
                <View>
                    <Text style={Fonts.body2Semi}>{props.djItem.name}</Text>
                    <Text style={[Fonts.label1Reg, { color: Colors.black40 }]}>{props.djItem.time}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    djItemContainer: {
        width: '85%',
        alignSelf: 'center',
        padding: 12,
        borderBottomWidth: 1,
        borderColor: '#373737',
    },
    fullRowCenter: {
        width: '100%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    djImageContainer: {
        width: 32,
        height: 32,
        marginRight: 8
    },
    djImage: {
        width: '100%',
        height: '100%',
        borderRadius: 32 / 2
    }
})

export default DjItem;