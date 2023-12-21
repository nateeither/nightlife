import {
    StyleSheet,
    View,
    Image,
    useWindowDimensions,
    Text,
    ScrollView,
    Pressable
} from 'react-native';

import React, {  useState } from 'react';

import { LinearGradient } from 'expo-linear-gradient';

import Fonts from '../constants/Fonts'
import Colors from '../constants/Colors'


const WhatIsGroupTicketBottomSheet = (props) => { 
    const WhatIsGroupTicket =
    `Attending an event solo can sometimes feel dull and cost more. However, when you come with friends, the experience becomes more enjoyable and budget-friendly.

    With our group ticket option, you not only secure a reduced price but also have the chance to invite your pals along. As the organizer, you'll initially cover the group ticket cost, and we'll help you generate invoices for your friends.
    
    Get ready for an amazing party experience and let loose on the dance floor!`

    return (
        <View
            style={styles.bottomSheetContainer}
        >
            <Text style={[Fonts.title2, styles.bottomSheetTitle]}>Invite friends</Text>
            <Text style={[Fonts.body1Med, { color: '#D3DEEE'}]}>WHAT IS GROUP TICKET ?</Text>
            <View style={styles.descContainer}>
                <Text style={[Fonts.body2Med, {color: '#D3DEEE', textAlign: 'center'}]}>{WhatIsGroupTicket}</Text>
            </View>

            <LinearGradient
                colors={[ '#C800CC', '#A060FA']}
                start={{ x: 1, y: 1 }}
                end={{ x: 0, y: 0.33 }}
                style={styles.gradientButton}     
            >
                <Pressable onPress={props.onContinue} style={styles.gradientButtonAligner}>
                    <Text style={Fonts.body2Semi}>Continue</Text>
                </Pressable>
            </LinearGradient>
            
            <Pressable onPress={props.onPressDive}>
                <Text style={Fonts.body2Med}>Dive deeper with group ticket</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    bottomSheetContainer: {
        width: '100%',
        paddingVertical: 20,
        paddingBottom: 42,
        alignItems: 'center',
    },
    bottomSheetTitle: {
        textAlign: 'center',
        color: Colors.orange,
        marginBottom: 30
    },
    descContainer: {
        width: '90%',
        alignSelf:'center',
        marginVertical: 20
    },
    gradientButton: {
        width: '90%',
        height: 47,
        alignSelf: 'center',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:16
    },
    gradientButtonAligner: {
        width: '100%',
        alignItems: 'center'
    }
})

export default WhatIsGroupTicketBottomSheet;