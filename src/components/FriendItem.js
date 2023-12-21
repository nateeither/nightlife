import {
    StyleSheet,
    View,
    Image,
    useWindowDimensions,
    Text,
    Pressable,
} from 'react-native';

import React, {  useState, memo } from 'react';


import Fonts from '../constants/Fonts'
import Colors from '../constants/Colors'


const FriendItem = (props) => {
    const [invited, setInvited] = useState(false)

    return (
        <View style={styles.friendItemContainer}>
            <View style={styles.row}>
                <View style={styles.friendImageContainer}>
                    <Image source={props.friendItem.image} style={styles.friendImage} />
                </View>
                <View>
                    <Text style={Fonts.body2Med}>{props.friendItem.name}</Text>
                    <Text style={[Fonts.label1Med,{color: Colors.black40}]}>{props.friendItem.username}</Text>
                </View>
            </View>
            <Pressable onPress={() => {
                setInvited(!invited)
                props.onInvite(props.friendItem.username)
            }} style={[styles.inviteButton, {backgroundColor: (invited || props.invitedList.includes(props.friendItem.username)) ? Colors.purple : Colors.black60}]}>
                <Text style={Fonts.label2Med}>{(invited || props.invitedList.includes(props.friendItem.username)) ? 'Invited' : 'Invite'}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    friendItemContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom:20
    },
    row: {
        flexDirection: 'row',
        alignItems:'center'
    },
    friendImageContainer: {
        width: 44,
        height: 44,
        marginRight: 8
    },
    friendImage: {
        width: '100%',
        height: '100%',
        borderRadius: 44 / 2
    },
    inviteButton: {
        paddingHorizontal: 12,
        paddingVertical:8,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default memo(FriendItem);