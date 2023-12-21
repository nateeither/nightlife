import React, {  useState } from 'react';
import { View, Text, useWindowDimensions, Image, StyleSheet } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import Fonts from '../constants/Fonts';
import Colors from '../constants/Colors';
import Images from '../constants/Images';

import Group from '../../assets/svg/group.svg'

const BookedTicketItem = () => {
    return (
        <View style={styles.ticketItemContainer}>
                <View style={styles.titleContainer}>
                    <Text style={[Fonts.label2Med, { color: '#919CAC' }]}>ID: 2221421</Text>
                    <View style={styles.row}>
                        <Text style={[Fonts.label2Semi, { color: Colors.orange }]}>NT$ 3,000</Text>
                        <View style={styles.ticketNameContainer}>
                            <Text style={Fonts.label2Reg}>Group ticket</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.clubLogoContainer}>
                        <Image
                            source={Images.omniClubLogo}
                            style={styles.clubLogo}
                        />
                    </View>
                    <View style={{flex:3}}>
                        <Text style={[Fonts.body1Semi, {color: Colors.white70}]}>Omni Night Club</Text>
                        <View style={{ marginBottom: 4 }} />
                        <View style={[styles.row,{ marginBottom: 8 }]}>
                            <Text style={[Fonts.label2Semi, { color: '#E0E0E1', marginRight:8 }]}>Table X33</Text>
                            <Text style={[Fonts.label2Med, { color: '#C9CACB' }]}>Sat, 14 June</Text>
                        </View>
                        
                        <View style={[styles.row,{ marginBottom: 13 }]}>
                            <Group width={16} height={16} />
                            <Text style={[Fonts.label2Med,{ color: Colors.black50, marginLeft: 4}]}>4 people invited</Text>
                        </View>
                        
                        <View style={styles.rowBetween}>
                            <Text style={[Fonts.label2Bold, { color: Colors.green }]}>Paid</Text>
                            <View style={styles.row}>
                                <Text style={[Fonts.label2Med, { color: '#E0E0E1' }]}>hosted by bobby</Text>
                                <View style={styles.hostCircle} />
                            </View>
                        </View>
                    </View>
                </View>
          </View>
    )
}

const styles = StyleSheet.create({
    ticketItemContainer: {
        width: '90%',
        alignSelf:'center',
        borderRadius:12,
        backgroundColor: Colors.black80,
        padding: 8
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 8
    },
    title: {
        fontSize: 34,
        fontWeight: '500',
        marginVertical: 10
    },
    row: {
        flexDirection: 'row',
        alignItems:'center'
    },
    rowBetween: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    ticketNameContainer: {
        marginLeft: 16,
        paddingVertical: 2,
        paddingHorizontal: 4,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'white'
    },
    clubLogoContainer: {
        width: 80, height: 80,
        borderRadius: 4,
        backgroundColor: '#2F2F2F',
        marginRight: 16,
        justifyContent: 'center',
        alignItems : 'center'
    },
    clubLogo: {
        width: '90%',
        resizeMode: "contain",
        aspectRatio: 1
    },
    hostCircle: {
        width: 22,
        height: 22,
        marginLeft: 4,
        borderRadius: 100,
        backgroundColor: '#D9D9D9'
    }
});

export default BookedTicketItem;