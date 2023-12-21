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
import React, {  useRef, useState } from 'react';

import { FlashList } from "@shopify/flash-list";
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';

import Images from '../constants/Images'
import Fonts from '../constants/Fonts'
import Colors from '../constants/Colors'

import Star from '../../assets/svg/star.svg'
import Info from '../../assets/svg/info.svg'
import Dropdown from '../../assets/svg/dropdown.svg'
import Facilities from '../../assets/svg/facilities.svg'

const ClubDetail = ({ navigation }) => { 

    const { width } = useWindowDimensions();
    const onViewCallBack = React.useCallback(({ viewableItems, changed })=> {
        setCurrBannerIdx(changed[0].index + 1)
        console.log("Changed in this iteration", changed[0].index);
    }, [])
    const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 })

    const [currBannerIdx, setCurrBannerIdx] = useState(1);

    return (
        <View>
            <ScrollView>
                {/* Image Carousel */}
                <View style={{
                    width: width, 
                    height: 266
                }}>
                    <FlashList
                        data={[
                            Images.omniClubBanner1, Images.omniClubBanner2, Images.omniClubBanner3
                        ]}
                        renderItem={({ item }) => (
                            <Image
                                source={item}
                                style={{width: width, height: '100%'}}
                            />
                        )}
                        on
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        estimatedItemSize={3}
                        viewabilityConfig={viewConfigRef.current}
                        onViewableItemsChanged={onViewCallBack}
                    />
                    <View style={styles.clubTagsContainer}>
                        <View style={styles.row}>
                            <View style={styles.tag}>
                                <Text style={Fonts.label2Reg}>LGBT</Text>
                            </View>
                            <View style={styles.tag}>
                                <Text style={Fonts.label2Reg}>EDM</Text>
                            </View>
                            <View style={styles.tag}>
                                <Text style={Fonts.label2Reg}>Rooftop</Text>
                            </View>
                        </View>
                        <Text style={Fonts.label2Med}>{currBannerIdx}/3</Text>
                    </View>
                </View>
                
                {/* Club Info Card */}
                <View style={styles.clubInfoCardContainer}>
                    {/* Club Info */}
                    <View style={styles.clubInfoContainer}>
                        <View style={styles.row}>
                            <View style={styles.clubLogoContainer}>
                                <Image
                                    source={Images.omniClubLogo}
                                    style={styles.clubLogo}
                                />
                            </View>
                            <View>
                                <View style={styles.row}>
                                    <MaskedView
                                        style={{ flex: 1 , height: 27}}
                                        maskElement={<Text style={Fonts.title}>OMNI NIGHT CLUB</Text>}
                                    >
                                        <LinearGradient
                                            colors={[ '#C800CC', '#A060FA']}
                                            start={{ x: 1, y: 1 }}
                                            end={{ x: 0, y: 0.33 }}
                                            style={{ flex: 1 }}     
                                        />
                                    </MaskedView>
                                    
                                    <View style={{marginRight:4}} />
                                    <Info width={15} height={15} />
                                </View>
                                <View style={styles.row}>
                                    <Text style={[Fonts.label1Med, { color: Colors.green }]}>Open Now <Text style={{ color: 'white' }}>| 10 pm - 4 am</Text></Text>
                                    <View style={{marginRight:6}} />
                                    <Dropdown width={10} height={10} />
                                </View>
                                <View style={[styles.row, { marginTop:10 }]}>
                                    <Text style={Fonts.label2Med}>Songhou, Taipei City</Text>
                                    <View style={{marginRight:'auto'}} />
                                    <Text style={Fonts.body2Reg}>5km</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <Star width={16} height={16} />
                            <View style={{marginRight:6}} />
                            <Text style={[Fonts.label2Med, {color: Colors.white70}]}>4.1</Text>
                        </View>
                    </View>

                    <View style={styles.divider} />

                    {/* Club Facilities */}
                    <View style={styles.clubFacilitiesContainer}>
                        <Text style={Fonts.body2Med}>Our Facilities</Text>
                        <View style={{ marginBottom: 12 }} />
                        <View style={styles.facilityContainer}>
                            <Facilities width={16} height={28} />
                            <View style={{marginLeft:16}}>
                                <Text style={Fonts.body2Med}>House Made Clothing Brand: Ruff Design</Text>
                                <Text style={Fonts.label2Reg}>Rated #1 Hiphop Nightclub in Taiwan</Text>
                            </View>
                        </View>
                        <View style={styles.facilityContainer}>
                            <Facilities width={16} height={28} />
                            <View style={{marginLeft:16}}>
                                <Text style={Fonts.body2Med}>Live performance for signers and rappers</Text>
                                <Text style={Fonts.label2Reg}>Rated #1 Hiphop Nightclub in Taiwan</Text>
                            </View>
                        </View>
                        <View style={styles.facilityContainer}>
                            <Facilities width={16} height={28} />
                            <View style={{marginLeft:16}}>
                                <Text style={Fonts.body2Med}>Rated #1 Hiphop Nightclub in Taiwan</Text>
                                <Text style={Fonts.label2Reg}>RUFF Taipei was founded in September 2020</Text>
                            </View>
                        </View>
                    </View>
                </View>


                {/* Club Offers */}
                <View style={styles.clubOffersContainer}>
                    <Text style={Fonts.title2}>Available offers</Text>
                    <Text style={Fonts.body2Med}>See all offers</Text>
                </View>
                <FlashList
                    data={[Images.offers1, Images.offers2]}
                    renderItem={({ item }) => (
                        <Image
                            source={item}
                            style={{width: 217, marginRight: 8}}
                        />
                    )}
                    estimatedItemSize={2}
                    horizontal
                    ListFooterComponentStyle={{ marginRight: 20 }}
                    ListHeaderComponentStyle={{marginRight:20}}
                />
                <View style={{marginTop:'20%'}} />
            </ScrollView>

            {/* Walk in button */}
            <View style={styles.walkInButtonContainer}>
                <Pressable
                    onPress={() => navigation.navigate('SelectDate')}
                    style={styles.walkInButton}>
                    <Text style={Fonts.body2Med}>Walk in Ticket</Text>
                </Pressable>
                <LinearGradient
                    colors={[ '#C800CC', '#A060FA']}
                    start={{ x: 1, y: 1 }}
                    end={{ x: 0, y: 0.33 }}
                    style={styles.bookingButton}     
                >
                    <Text style={Fonts.body2Med}>Booking Table</Text>
                </LinearGradient>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    clubTagsContainer: {
        width: '90%',
        alignSelf:'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 12
    },
    tag: {
        padding: 4,
        marginRight: 4,
        borderRadius: 4,
        backgroundColor: Colors.black60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row',
        alignItems:'center'
    },
    clubInfoCardContainer: {
        paddingVertical: 12,
        backgroundColor: Colors.black80,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
    },
    clubInfoContainer: {
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:12
    },
    clubLogoContainer: {
        width: 80, height: 80,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#525252',
        backgroundColor: '#303030',
        marginRight: 12,
        justifyContent: 'center',
        alignItems:'center'
    },
    clubLogo: {
        width: '100%',
        resizeMode: 'center',
        aspectRatio: 1
    },
    divider: {
        width: '90%',
        alignSelf: 'center',
        borderBottomWidth: 1,
        marginVertical: 12,
        borderColor: '#373737'
    },
    clubFacilitiesContainer: {
        width: '90%',
        alignSelf: 'center'
    },
    facilityContainer: {
        flexDirection: 'row',
        paddingVertical: 12,
        marginBottom: 12 
    },
    clubOffersContainer: {
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 32,
        marginBottom: 12
    },
    walkInButtonContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
    },
    walkInButton: {
        width: '50%',
        height: 59,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.black90
    },
    bookingButton: {
        width: '50%',
        height: 59,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default ClubDetail;