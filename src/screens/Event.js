import React, {  useState } from 'react';
import { View, Text, useWindowDimensions, Image, Pressable, StyleSheet } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { LinearGradient } from 'expo-linear-gradient';

import Fonts from '../constants/Fonts';
import Colors from '../constants/Colors';
import Images from '../constants/Images';

import Star from '../../assets/svg/star.svg'

const EventItem = () => {
    return (
        <View style={styles.eventItemContainer}>
            <View style={styles.row}>
                <View style={styles.clubLogoContainer}>
                    <Image
                        source={Images.omniClubLogo}
                        style={styles.clubLogo}
                    />
                </View>
                <View style={{ flex: 3 }}>
                    <View style={styles.rowBetween}>
                        <Text style={[Fonts.body1Semi, { color: Colors.white70 }]}>Omni Night Club</Text>
                        <TagItem tag={"HOT"} />
                    </View>
                   
                    <View style={{ marginBottom: 4 }} />
                    <View style={[styles.row, { marginBottom: 8 }]}>
                        <Text style={[Fonts.label2Bold, { color: Colors.green }]}>Open Now <Text style={[Fonts.label2Med,{ color: '#E0E0E1'}]}>| 10 pm - 4 am</Text></Text>
                    </View>
                    
                    <View style={[styles.row, { marginBottom: 13 }]}>
                        <Text style={Fonts.label2Med}>Songhou, Taipei City</Text>
                        <View style={{marginRight:20}} />
                        <Text style={Fonts.label2Med}>5km</Text>
                    </View>
                    
                    <View style={styles.rowBetween}>
                        <View style={styles.row}>
                            <Star width={14} height={14} />
                            <View style={{marginRight:6}} />
                            <Text style={[Fonts.label2Med, {color: Colors.white70}]}>4.1</Text>
                        </View>
                       
                        <Text style={[Fonts.label2Med, { color: Colors.purple }]}>Book Now!</Text>

                    </View>
                </View>
            </View>
        </View>
    )
}

const TagItem = (props) => {
    const { tag } = props;

    return (
        <LinearGradient
            colors={['#FC3F31', '#ED984E', '#F6D056']}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0.33 }}
            style={styles.tagItemGradientContainer}
        >
            <View style={styles.tagItem}>
                <Text style={[Fonts.label2Reg]}>{tag}</Text>
            </View>
        </LinearGradient>
    )
}

const Event = ({ navigation }) => { 
    return (
        <View style={{
            flex: 1
        }}>
            <View style={{marginBottom:30}} />
            <Pressable onPress={() => navigation.navigate('ClubDetail')}>
                <EventItem />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    eventItemContainer: {
        width: '90%',
        alignSelf:'center',
        borderRadius:12,
        backgroundColor: Colors.black80,
        padding: 8
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
    tagItemGradientContainer: {
        borderRadius: 4,
        marginRight:4
    },
    tagItem: {
        borderRadius: 4,
        flex: 1,
        margin: 1,
        paddingHorizontal: 8,
        justifyContent: 'center',
        backgroundColor: Colors.black70
    }
})

export default Event;