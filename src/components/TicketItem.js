import {
    StyleSheet,
    View,
    Image,
    useWindowDimensions,
    Text,
    Pressable
} from 'react-native';

import React, { useCallback, useRef, useState, useMemo } from 'react';

import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

import Fonts from '../constants/Fonts'
import Colors from '../constants/Colors'
import Crown from '../../assets/svg/crown.svg'
import { FlashList } from '@shopify/flash-list';


const TicketItem = (props) => {
    const orangeLineGrad = ['#FC3F31', '#ED984E', '#F6D056'];
    const orangeTextGrad = ['#FC3F31', '#F6D056'];

    const blueLineGrad = ['#77BAAD', '#4E6AFF'];
    const blueTextGrad = ['#77BAAD', '#4E6AFF'];

    const purpleLineGrad = ['#B778D4', '#4E6AFF'];
    const purpleTextGrad = ['#C800CC', '#A060FA'];

    const { ticketItem } = props;

    return (
        <LinearGradient
            colors={ticketItem.type == 'couple' ? orangeLineGrad : ticketItem.type == 'dance' ? purpleLineGrad : blueLineGrad}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0.33 }}
            style={styles.gradientLineContainer}
        >
            <View style={styles.ticketContainer}> 
                <View style={styles.rowBetween}>
                    <MaskedView
                        style={{ flex: 1 , height: 27}}
                        maskElement={<Text style={Fonts.title}>{ticketItem.name}</Text>}
                    >
                        <LinearGradient
                            colors={ticketItem.type == 'couple' ? orangeTextGrad : ticketItem.type == 'dance' ? purpleTextGrad : blueTextGrad}
                            start={{ x: 1, y: 1 }}
                            end={{ x: 0, y: 0.33 }}
                            style={{ flex: 1 }}     
                        />
                    </MaskedView>
                 
                    <View style={styles.priceContainer}>
                        <MaskedView
                            style={{ width: 80, height: 18}}
                            maskElement={<Text style={[Fonts.body2Bold, { textAlign: 'center' }]}>NT$ {ticketItem.price}</Text>}
                        >
                            <LinearGradient
                                colors={ticketItem.type == 'couple' ? orangeTextGrad : ticketItem.type == 'dance' ? purpleTextGrad : blueTextGrad}
                                start={{ x: 1, y: 1 }}
                                end={{ x: 0, y: 0.33 }}
                                style={{ flex: 1 }}     
                            />
                        </MaskedView>
                    </View>
                </View>
                <Text style={[Fonts.body2Med, { color: '#4D4D4D' }]}>qty {ticketItem.qty}</Text>
                <View style={{ marginBottom: 12 }} />
                <Text style={[Fonts.body2Med, { color: Colors.white80 }]}>{ticketItem.desc}</Text>
                <View style={{ marginBottom: 20 }} />
                <FlashList
                      data={ticketItem.benefits}
                      renderItem={({ item }) => (
                        <View style={[styles.row, { marginBottom: 12 }]}>
                            <Crown width={16} height={14} />
                            <View style={{marginRight:12}} />
                              <Text style={[Fonts.label2Med, { color: Colors.black40 }]}>{item}</Text>
                        </View>
                      )}
                      estimatedItemSize={10}
                />
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    gradientLineContainer: {
        width: '90%',
        alignSelf: 'center', 
        // height: 200,
        borderRadius: 8,
        marginBottom:32 
    },
    ticketContainer: {
        borderRadius: 8,
        flex: 1,
        margin: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: Colors.bgDefault
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rowBetween: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    priceContainer: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
        backgroundColor: '#292929'
    }
})

export default TicketItem;