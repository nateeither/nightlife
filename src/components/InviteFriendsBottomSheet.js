import {
    StyleSheet,
    View,
    Image,
    useWindowDimensions,
    Text,
    ScrollView,
    Pressable,
    TextInput
} from 'react-native';

import React, {  useState } from 'react';

import { LinearGradient } from 'expo-linear-gradient';
import { TabView,TabBar, SceneMap } from 'react-native-tab-view';

import FriendItem from './FriendItem';

import Fonts from '../constants/Fonts'
import Colors from '../constants/Colors'

import Search from '../../assets/svg/search.svg'
import { FlashList } from '@shopify/flash-list';

import friends from '../data/friends';

const renderTabBar = (props) => (
    <TabBar
      {...props}
      pressOpacity={0}
      indicatorStyle={styles.tabBarIndicator}
      inactiveColor='#D3DEEE'
      activeColor='#AA5AFA'
      labelStyle={[Fonts.body2Med, { textTransform: 'none' }]}
      pressColor={Colors.black80}
      style={styles.tabBar}
    />
);

const InviteFriendsBottomSheet = (props) => { 
    const layout = useWindowDimensions();

    const [index, setIndex] = useState(0);
    const [invitedFriends, setInvitedFriends] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    const [routes] = React.useState([
      { key: 'first', title: 'Friends' },
      { key: 'second', title: 'Squad' },
      { key: 'third', title: 'Invitation' },
    ]);

    const handleSearch = (text) => {
        const filteredResults = friends.filter(
          (friend) =>
            friend.name.toLowerCase().includes(text.toLowerCase()) ||
            friend.username.toLowerCase().includes(text.toLowerCase())
        );
        setSearchResults(filteredResults);
    }

    const inviteFriend = (username) => {
        if (!invitedFriends.includes(username)) {
            setInvitedFriends(invitedFriends => [...invitedFriends, username])
        } else {
            setInvitedFriends(invitedFriends.filter(item => item !== username))
        }
    }

    const Friends = () => {

        return (
            <View style={styles.tabViewItemContainer}>
               <FlashList
                    data={searchResults.length > 0 ? searchResults : friends}
                    renderItem={({ item }) => (
                        <FriendItem invitedList={invitedFriends} friendItem={item} onInvite={(user) => inviteFriend(user)} />
                    )}
                    showsVerticalScrollIndicator={false}
                    estimatedItemSize={4}
                    ListFooterComponentStyle={{ marginBottom: 10 }}
                    ListHeaderComponentStyle={{ marginTop:10}}
                />
            </View>
        )
    }
      
    const Squad = () => {
        return (
            <View style={styles.tabViewItemContainer}>
                <FlashList
                    data={searchResults.length > 0 ? searchResults : friends}
                    renderItem={({ item }) => (
                        <FriendItem invitedList={invitedFriends} friendItem={item} onInvite={(user) => inviteFriend(user)} />
                    )}
                    showsVerticalScrollIndicator={false}
                    estimatedItemSize={4}
                    ListFooterComponentStyle={{ marginBottom: 10 }}
                    ListHeaderComponentStyle={{ marginTop:10}}
                />
            </View>
        )
    }
    
    const Invitation = () => {
        return (
            <View style={styles.tabViewItemContainer}>
                <FlashList
                    data={searchResults.length > 0 ? searchResults : friends}
                    renderItem={({ item }) => (
                        <FriendItem invitedList={invitedFriends} friendItem={item} onInvite={(user) => inviteFriend(user)} />
                    )}
                    showsVerticalScrollIndicator={false}
                    estimatedItemSize={4}
                    ListFooterComponentStyle={{ marginBottom: 10 }}
                    ListHeaderComponentStyle={{ marginTop:10}}
                />
            </View>
        )
    }
   
    return (
        <View
            style={styles.bottomSheetContainer}
        >
            {/* <View
                style={{
                    width: 50,
                    height: 3,
                    backgroundColor: Colors.black70,
                    borderRadius: 5, alignSelf: 'center',
                    marginTop: 10, marginBottom: 15
                }}
            /> */}
            <Text style={[Fonts.title2, styles.bottomSheetTitle]}>Invite friends</Text>
            <Text style={Fonts.label2Med}>{invitedFriends.length}/4 Invited</Text>
            <View style={styles.searchContainer}>
                <TextInput
                    style={[Fonts.body2Reg, {flex:3}]}
                    placeholder='Search friend’s name or email'
                    placeholderTextColor='#5D5C5C'
                    onChangeText={handleSearch}
                />
               <Search width={20} height={20} />
            </View>

            <View style={styles.tabViewContainer}>
               <TabView
                    navigationState={{ index, routes }}
                    renderScene={SceneMap({
                        first: Friends,
                        second: Squad,
                        third: Invitation
                      })}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width }}
                    renderTabBar={renderTabBar}
                />
            </View>

            <LinearGradient
                colors={[ '#C800CC', '#A060FA']}
                start={{ x: 1, y: 1 }}
                end={{ x: 0, y: 0.33 }}
                style={styles.gradientButton}     
            >
                <Pressable onPress={props.onBook} style={styles.gradientButtonAligner}>
                    <Text style={Fonts.body2Semi}>Book now</Text>
                </Pressable>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: Colors.black80,
        borderBottomColor: '#D3DEEE',
        borderBottomWidth: 1 
    },
    tabBarIndicator: {
        backgroundColor: '#AA5AFA',
        height: 4 
    },
    tabViewContainer: {
        width: '90%',
        height: 320,
        alignSelf: 'center',
    },
    tabViewItemContainer: {
        flex: 1,
        width: '100%',
        marginTop: 20,
    },
    bottomSheetContainer: {
        width: '100%',
        paddingVertical: 20,
        alignItems: 'center',
    },
    bottomSheetTitle: {
        textAlign: 'center',
        color: Colors.orange,
        marginBottom: 12
    },
    searchContainer: {
        width: '90%',
        alignSelf:'center',
        marginVertical: 20,
        height: 40,
        borderRadius: 4,
        borderWidth: 1,
        paddingHorizontal:12,
        borderColor: '#323232',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between'
    },
    gradientButton: {
        width: '90%',
        height: 47,
        alignSelf: 'center',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:'10%',
        bottom: 16
    },
    gradientButtonAligner: {
        width: '100%',
        alignItems: 'center'
    }
})

export default InviteFriendsBottomSheet;