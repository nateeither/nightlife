import React, {  useState } from 'react';
import { View, Text, useWindowDimensions, Image, StyleSheet } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import Fonts from '../constants/Fonts';
import Colors from '../constants/Colors';

import BookedTicketItem from '../components/BooketTicketItem';

const Paid = () => {
    return (
        <View style={styles.tabViewItemContainer}>
          <BookedTicketItem />
        </View>
    )
}
  
const Unpaid = () => {
    return (
        <View style={styles.tabViewItemContainer}>
            
        </View>
    )
}

const Requested = () => {
    return (
        <View style={styles.tabViewItemContainer}>
          
        </View>
    )
}

const Canceled = () => {
    return (
        <View style={styles.tabViewItemContainer}>
          
        </View>
    )
}


const Finished = () => {
    return (
        <View style={styles.tabViewItemContainer}>
          
        </View>
    )
}

const renderScene = SceneMap({
    paid: Paid,
    unpaid: Unpaid,
    requested: Requested,
    canceled: Canceled,
    finished: Finished
});

const renderTabBar = (props) => {
    return (
        <TabBar
            {...props}
            scrollEnabled
            pressOpacity={0}
            tabStyle={{width: 110}}
            indicatorStyle={styles.tabBarIndicator}
            inactiveColor='#D3DEEE'
            activeColor='#AA5AFA'
            labelStyle={[Fonts.body2Med, { textTransform: 'none' }]}
            pressColor={Colors.bgDefault}
            style={styles.tabBar}
        />
    )
}
    

const MyBooking = () => { 
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'paid', title: 'Paid' },
        { key: 'unpaid', title: 'Unpaid' },
        { key: 'requested', title: 'Requested' },
        { key: 'canceled', title: 'Canceled' },
        { key: 'finished', title: 'Finished' },
    ]);

    return (
        <View style={{
            flex: 1,
        }}>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={renderTabBar}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    tabViewItemContainer: {
        flex: 1,
        width: '100%',
        marginTop: 20,
    },
    tabBar: {
        backgroundColor: Colors.bgDefault,
        borderBottomColor: '#D3DEEE',
        borderBottomWidth: 1 
    },
    tabBarIndicator: {
        backgroundColor: '#AA5AFA',
        height: 4
    }
})

export default MyBooking;