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

import { FlashList } from "@shopify/flash-list";
import { useNavigation } from '@react-navigation/native';

import DjItem from '../components/DjItem';

import Fonts from '../constants/Fonts'
import Colors from '../constants/Colors'


const SelectDateButton = (props) => {
    const navigation = useNavigation();

    return (
        <Pressable
            onPress={() => navigation.navigate('SelectTicket')}
            style={styles.button}>
            <Text style={Fonts.body1Med}>Select {props.value.toString()}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '90%',
        height: 47,
        alignSelf: 'center',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.purple,
        marginTop: 12
    }
})

export default SelectDateButton;