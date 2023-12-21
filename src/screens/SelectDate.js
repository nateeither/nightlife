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
import DatePicker from 'react-native-modern-datepicker';

import DateTimePicker, { DateType } from 'react-native-ui-datepicker';
import dayjs from 'dayjs';

import DjItem from '../components/DjItem';
import SelectDateButton from '../components/SelectDateButton';

import Fonts from '../constants/Fonts'
import Colors from '../constants/Colors'
import Images from '../constants/Images';

const SelectDate = () => { 

    const { width } = useWindowDimensions();
    const [value, setValue] = useState(dayjs());

    return (
        <View>
            <View style={styles.titleContainer}>
                <Text style={Fonts.label1Semi}>Select Date</Text>
            </View>

            <View style={styles.datePickerContainer}>
                <DateTimePicker
                    displayFullDays
                    value={value}
                    onValueChange={(date) => setValue(date)}
                    headerButtonColor={'white'}
                    selectedItemColor={Colors.blue}
                    dayContainerStyle={styles.dayContainer}
                    weekDaysContainerStyle={styles.weekDaysContainer}
                    weekDaysTextStyle={{color: 'white'}}
                    calendarTextStyle={{ color: 'white', fontFamily: 'Inter-Regular' }}
                    headerTextStyle={Fonts.label1Reg}
                    selectedTextStyle={{
                        color: 'white',
                    }}
                    todayContainerStyle={styles.todayContainer}
                    todayTextStyle={{ color: 'white' }}
                    mode="calendar"
                />
            </View>
            
            {/* Book Status */}
            <View style={styles.bookStatusContainer}>
                <View style={styles.row}>
                    <View style={styles.legend}/>
                    <Text style={Fonts.label1Reg}>Today</Text>
                </View>

                <View style={{marginRight:8}} />

                {/* <View style={styles.row}>
                    <View style={styles.legendRed} />
                    <Text style={Fonts.label1Reg}>Fully booked</Text>
                </View> */}
            </View>
            
            {/* Dj List */}
            <View style={styles.djListTitleContainer}> 
                <Text style={[Fonts.label2Bold, { color: Colors.orange }]}>DJ List</Text>
            </View>

            <FlatList
                data={[
                    { image: Images.djKrush, 'name': 'DJ Krush', 'time': '10pm - 2am' },
                    { image: Images.djSoda, 'name': 'DJ Soda', 'time': '1am - 2am' },
                    { image: Images.djFlight, 'name' : 'DJ Krush', 'time' : '2am - 3am' },
                ]}
                renderItem={({ item }) => <DjItem djItem={item} />}
                // estimatedItemSize={3}
                ListFooterComponent={() => <SelectDateButton value={dayjs(value).format('MMM, DD YYYY')} />}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        width: '90%',
        alignSelf: 'center',
        borderRadius: 4,
        backgroundColor: Colors.black80,
        paddingVertical: 12,
        paddingHorizontal: 16
    },
    datePickerContainer: {
        width: '85%',
        alignSelf: 'center',
        marginVertical:20
    },
    dayContainer: {
        backgroundColor: '#3B414A',
        borderRadius: 8,
        color: 'white',
        margin:4
    },
    weekDaysContainer: {
        color: 'white',
        borderColor: 'transparent',
    },
    todayContainer: {
        borderWidth: 1,
        borderColor: Colors.blue,
        backgroundColor: Colors.blue60
    },
    bookStatusContainer: {
        width: '80%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:12
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    legend: {
        width: 12,
        height: 12,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: Colors.blue,
        backgroundColor: Colors.blue60,
        marginRight:8
    },
    legendRed: {
        width: 12,
        height: 12,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: Colors.red,
        backgroundColor: Colors.red,
        marginRight:8
    },
    djListTitleContainer: {
        width: '80%',
        alignSelf:'center'
    }
})

export default SelectDate;