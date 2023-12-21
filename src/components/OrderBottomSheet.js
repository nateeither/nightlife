import {
    StyleSheet,
    View,
    Image,
    useWindowDimensions,
    Text,
    Pressable
} from 'react-native';

import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import ToggleSwitch from 'toggle-switch-react-native'

import Fonts from '../constants/Fonts'
import Colors from '../constants/Colors'
import Images from '../constants/Images';

import UserCrown from '../../assets/svg/user-crown.svg'
import Calendar from '../../assets/svg/calendar.svg'
import AddCircle from '../../assets/svg/add-circle.svg'
import Coupon from '../../assets/svg/coupon.svg'
import ChevronArrow from '../../assets/svg/chevron-arrow.svg'
import Subtract from '../../assets/svg/subtract.svg'
import Close from '../../assets/svg/close.svg'
import Percentage from '../../assets/svg/percentage.svg'

const OrderBottomSheet = (props) => {
    const [payFullToggle, setPayFullToggle] = useState(false);
    const [splitBillToggle, setSplitBillToggle] = useState(false);
    const [applyDiscount, setApplyDiscount] = useState(false);

    return (
        <>
      
            <MaskedView
                style={styles.titleMaskedViewContainer}
                maskElement={<Text style={[Fonts.title2, { textAlign: 'center' }]}>Order Detail</Text>}
            >
                <LinearGradient
                    colors={[ '#C800CC', '#A060FA']}
                    start={{ x: 1, y: 1 }}
                    end={{ x: 0, y: 0.33 }}
                    style={{ flex: 1 }}     
                />
            </MaskedView>

            <ScrollView>
                <View
                    style={styles.bottomSheetScrollContainer}
                >
                    <View
                        style={styles.row}
                    >
                        <View style={styles.clubImageContainer} >
                            <Image source={Images.omniClubBanner1} style={styles.clubImage} />
                        </View>
                        <View style={{flex:1}}>
                            <View style={styles.clubHeader}>
                                <Text style={Fonts.title}>Ruff Taipei</Text>
                                <View style={styles.row}>
                                    <TagItem tag={"Walk In"} />
                                    <TagItem tag={"VIP"} />
                                </View>
                            </View>
                            <Text style={[Fonts.label2Reg,{color: Colors.black50}]}>No. 18號, Songshou Rd, Xinyi District, Taipei City, Taiwan 110</Text>
                        </View>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.rowBetween}>
                        <View style={styles.row}>
                            <UserCrown width={16} height={16} />
                            <View style={{
                                marginRight:4
                            }} />
                            <Text style={[Fonts.label2Reg,{color: Colors.black30}]}>Jean Chen</Text>
                        </View>
                        <View style={styles.row}>
                            <Calendar width={16} height={16} />
                            <View style={{
                                marginRight:4
                            }} />
                            <Text style={[Fonts.label2Reg,{color: Colors.black30}]}>Sat, 14 Dec</Text>
                        </View>
                    </View>
                </View>

                <View
                    style={styles.bottomSheetScrollContainer}
                >
                    <View style={styles.rowBetweenStart}>
                        <View style={{flex: 3}}>
                            <Text style={Fonts.body2Bold}>Pay in full</Text>
                            <View style={{marginBottom:4}} />
                            <Text style={[Fonts.label2Med, {color: Colors.black40}]}>Pay the minimum spend (NT$ 30,000) now and receive <Text style={[Fonts.label2Bold, { color: Colors.black40 }]}>5% off</Text></Text>
                        </View>

                        <ToggleSwitch
                            isOn={payFullToggle}
                            onColor={Colors.purple}
                            offColor={Colors.black80}
                            size="small"
                            onToggle={setPayFullToggle}
                        />
                    </View>
                </View>
                <View
                    style={styles.bottomSheetScrollContainer}
                >
                    <Text style={Fonts.body1Semi}>Bill Detail</Text>
                    <View style={{ marginBottom: 10 }} />
                    <View style={[styles.rowBetween, { marginBottom:8}]}>
                        <Text style={Fonts.label1Med}>Couples Package</Text>
                        <Text style={Fonts.label1Med}>NT$ 45,000</Text>
                    </View>
                    <View style={[styles.rowBetween, { marginBottom:8 }]}>
                        <View>
                            <Text style={Fonts.label1Med}>Discount</Text>
                            <Text style={[Fonts.label2Med, {color: Colors.black40}]}>5%</Text>
                        </View>
                        <Text style={Fonts.label1Med}>NT$ 1,800</Text>
                    </View>
                    <View style={styles.rowBetween}>
                        <View>
                            <Text style={Fonts.label1Med}>Service Fee</Text>
                            <Text style={[Fonts.label2Med, {color: Colors.black40}]}>5%</Text>
                        </View>
                        <Text style={Fonts.label1Med}>NT$ 1,800</Text>
                    </View>
                    <View style={[styles.rowBetween, { marginTop:20 }]}>
                        <Text style={Fonts.title3}>TOTAL</Text>
                        <Text style={Fonts.title3}>NT$ 37,000</Text>
                    </View>
                </View>
                <View
                    style={styles.bottomSheetScrollContainer}
                >
                    <View style={{ flex: 3 }}>
                        <View style={styles.rowBetween}>
                            <Text style={Fonts.body2Bold}>Payment Method</Text>
                            <AddCircle width={21} height={21} />
                        </View>
                        <View style={{ marginBottom: 12 }} />
                        <View style={styles.row}>
                            <View style={styles.visaCircleIndicatorContainer}>
                                <View style={styles.visaCircleIndicator} />
                            </View>
                            <Text style={Fonts.body2Reg}>VISA +64</Text>
                        </View>
                        
                    </View>
                </View>
                <View
                    style={styles.bottomSheetScrollContainer}
                >
                    <View style={styles.rowBetween}>
                        <Text style={Fonts.body2Bold}>Split Bill</Text>
                        <ToggleSwitch
                            isOn={splitBillToggle}
                            onColor={Colors.purple}
                            offColor={Colors.black80}
                            size="small"
                            onToggle={setSplitBillToggle}
                        />
                    </View>
                </View>
                <View
                    style={styles.bottomSheetScrollContainer}
                >
                    {
                        applyDiscount && 
                        <View style={styles.discountItemContainer}>
                            <View>
                                <Subtract width={48} height={50} />
                                <View style={styles.percentIconContainer}>
                                    <Percentage width={24} height={24} />
                                </View>
                            </View>
                            <View style={styles.discountItemBarContainer}>
                                <View style={styles.discountItemBarAligner}>
                                    <Text style={Fonts.body2Semi}>Discount  50% for ladies</Text>
                                    <Pressable onPress={() => setApplyDiscount(false)}>
                                        <Close width={12} height={12} />
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    }

                    <Pressable onPress={() => setApplyDiscount(true)} style={styles.rowBetween}>
                        <Coupon width={32} height={32} />
                        <Text style={Fonts.title3}>Apply promo to get special discount</Text>
                        <ChevronArrow width={24} height={24} />
                    </Pressable>
                </View>

                <LinearGradient
                    colors={[ '#C800CC', '#A060FA']}
                    start={{ x: 1, y: 1 }}
                    end={{ x: 0, y: 0.33 }}
                    style={styles.gradientButton}     
                >
                    <Pressable onPress={props.onPay} style={styles.gradientButtonAligner}>
                        <Text style={Fonts.body2Semi}>Pay</Text>
                    </Pressable>
                </LinearGradient>
                
            </ScrollView>

        </>
    )
}


const TagItem = (props) => {
    const { tag } = props;

    return (
        <LinearGradient
            colors={['#77BAAD', '#4E6AFF']}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0.33 }}
            style={{
                borderRadius: 4,
                marginRight:4
            }}
        >
            <View style={{
                borderRadius: 4,
                flex: 1,
                margin: 1,
                paddingHorizontal: 8,
                justifyContent: 'center',
                backgroundColor: Colors.black70
            }}>
                <Text style={[Fonts.label2Reg]}>{tag}</Text>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    titleMaskedViewContainer: {
        height: 27,
        marginBottom: 22
    },
    bottomSheetScrollContainer: {
        width: '90%',
        alignSelf: 'center',
        backgroundColor: Colors.black70,
        padding: 12,
        borderRadius: 8,
        marginBottom:12
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rowBetween: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between'
    },
    rowBetweenStart: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'flex-start'
    },
    clubImageContainer: {
        width: 71,
        height: 57,
        marginRight: 10
    },
    clubImage: {
        width: '100%',
        height: '100%',
        borderRadius: 5
    },
    clubHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom:12
    },
    divider: {
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#414141',
        marginVertical:10
    },
    visaCircleIndicatorContainer: {
        width: 16, height: 16, 
        alignItems: 'center', justifyContent: 'center',
        borderRadius: 100,
        borderWidth: 2, 
        borderColor: '#3CA6EC',
        marginRight: 6
    },
    visaCircleIndicator: {
        width: 7, height: 7,
        borderRadius: 100,
        backgroundColor: '#3CA6EC'
    },
    discountItemContainer: {
        width: '95%',
        alignSelf: 'center',
        justifyContent:'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:10
    },
    discountItemBarContainer: {
        width: '90%',
        alignSelf:'center',
        height: 50,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        backgroundColor: '#121212',
        borderWidth: 1,
        borderColor: '#424242'
    },
    discountItemBarAligner: {
        width: '90%',
        height : '100%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    percentIconContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 0, top: 0, left: 0, right: 0
    },
    gradientButton: {
        width: '90%',
        height: 47,
        alignSelf: 'center',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '10%'
    },
    gradientButtonAligner: {
        width: '100%',
        alignItems: 'center'
    }
})

export default OrderBottomSheet;