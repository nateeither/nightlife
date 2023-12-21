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

import React, { useCallback, useRef, useState, useMemo } from 'react';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';

import TicketItem from '../components/TicketItem';

import OrderBottomSheet from '../components/OrderBottomSheet';
import WhatIsGroupTicketBottomSheet from '../components/WhatIsGroupTicketBottomSheet';
import InviteFriendsBottomSheet from '../components/InviteFriendsBottomSheet';
import DiveDeeperBottomSheet from '../components/DiveDeeperBottomSheet';

import Fonts from '../constants/Fonts'
import Colors from '../constants/Colors';

import tickets from '../data/tickets';


import { FlashList } from '@shopify/flash-list';


const SelectTicket = ({ navigation }) => {
    const [isOrderBSOpen, setIsOrderBSOpen] = useState(false);
    const [isDiveBSOpen, setDiveBSIsOpen] = useState(false);
    const [isWhatIsBSOpen, setWhatIsBSIsOpen] = useState(false);
    const [isInviteBSOpen, setInviteBSIsOpen] = useState(false);

    const bottomSheetRef = useRef(null);

    const orderSnapPoints = useMemo(() => ['50%', '80%'], []);
    const whatIsSnapPoints = useMemo(() => ['50%', '70%'], []);
    const diveSnapPoints = useMemo(() => ['25%', '50%'], []);
    const inivteSnapPoints = useMemo(() => ['50%', '85%'], []);

    const renderBackdrop = useCallback(
        props => (
        <BottomSheetBackdrop
            {...props}
            disappearsOnIndex={-1}
            appearsOnIndex={0}
        />
        ),[]);
    

    return (
        <View style={{flex:1}}>
            {/* Title */}
            <View style={styles.titleContainer}>
                <Text style={Fonts.title2}>Select Ticket</Text>
            </View>

            {/* Ticket List Card */}
            <FlashList
                data={tickets}
                renderItem={({ item }) => (
                    <Pressable onPress={() => {
                        item.type == 'group' ? setWhatIsBSIsOpen(true) : setIsOrderBSOpen(true)
                    }}>
                        <TicketItem ticketItem={item} />
                    </Pressable>
                )}
                estimatedItemSize={10}
            />
            
            {
                isOrderBSOpen &&
                <BottomSheet
                    ref={bottomSheetRef}
                    index={1}
                    snapPoints={orderSnapPoints}
                    backdropComponent={renderBackdrop}
                    enablePanDownToClose
                    onClose={() => setIsOrderBSOpen(false)}
                    backgroundStyle={styles.bottomSheetBg}
                    handleIndicatorStyle={styles.bottomSheetIndicator}
                >
                    <OrderBottomSheet onPay={() => 
                        navigation.navigate("Dashboard", {
                            screen: "MyBooking",
                            initial: true
                        })
                     } />
                </BottomSheet>
            }
            {
                isInviteBSOpen &&
                <BottomSheet
                    ref={bottomSheetRef}
                    index={1}
                    snapPoints={inivteSnapPoints}
                    backdropComponent={renderBackdrop}
                    enablePanDownToClose
                    onClose={() => setInviteBSIsOpen(false)}
                    backgroundStyle={styles.bottomSheetBg}
                    handleIndicatorStyle={styles.bottomSheetIndicator}
                >
                        <InviteFriendsBottomSheet onBook={() =>
                            navigation.navigate("Dashboard", {
                                screen: "MyBooking",
                                initial: true
                            })
                        } />
                </BottomSheet>
            }
            {
                isDiveBSOpen &&
                <BottomSheet
                    ref={bottomSheetRef}
                    index={1}
                    snapPoints={diveSnapPoints}
                    backdropComponent={renderBackdrop}
                    enablePanDownToClose
                    onClose={() => setDiveBSIsOpen(false)}
                    backgroundStyle={styles.bottomSheetBg}
                    handleIndicatorStyle={styles.bottomSheetIndicator}
                >
                   <DiveDeeperBottomSheet onClose={() => setDiveBSIsOpen(false)} />
                </BottomSheet>
            }
            {
                isWhatIsBSOpen &&
                <BottomSheet
                    ref={bottomSheetRef}
                    index={1}
                    snapPoints={whatIsSnapPoints}
                    backdropComponent={renderBackdrop}
                    enablePanDownToClose
                    onClose={() => setWhatIsBSIsOpen(false)}
                    backgroundStyle={styles.bottomSheetBg}
                    handleIndicatorStyle={styles.bottomSheetIndicator}
                >
                   <WhatIsGroupTicketBottomSheet
                        onContinue={() => { setWhatIsBSIsOpen(false), setInviteBSIsOpen(true)  }}
                        onPressDive={() => { setWhatIsBSIsOpen(false), setDiveBSIsOpen(true) }} />
                </BottomSheet>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        width: '90%',
        alignSelf: 'center',
        marginVertical: 24
    },
    bottomSheetBg: {
        backgroundColor: Colors.black80 
    },
    bottomSheetIndicator: {
        backgroundColor: Colors.black70,
        width: 50,
        height: 3,
        marginTop: 20
    }
})

export default SelectTicket;