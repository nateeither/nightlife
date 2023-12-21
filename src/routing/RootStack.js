import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Pressable, Text } from 'react-native';

import Colors from '../constants/Colors';
import ClubDetail from '../screens/ClubDetail';
import SelectDate from '../screens/SelectDate';
import SelectTicket from '../screens/SelectTicket';
import MyBooking from '../screens/MyBooking'
import Event from '../screens/Event';
import Friends from '../screens/Friends';
import Profile from '../screens/Profile';

import Fonts from '../constants/Fonts';

import Moonlight from '../../assets/svg/navbar/moonlight.svg';
import MoonlightActive from '../../assets/svg/navbar/moonlight-active.svg';
import Flare from '../../assets/svg/navbar/flare.svg';
import FlareActive from '../../assets/svg/navbar/flare-active.svg';
import Community from '../../assets/svg/navbar/community.svg';
import CommunityActive from '../../assets/svg/navbar/community-active.svg';
import User from '../../assets/svg/navbar/user.svg';
import UserActive from '../../assets/svg/navbar/user-active.svg';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const DashboardStackScreen = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: Colors.bgDefault,
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                
                    switch (route.name) {
                        case 'MyBooking':
                            return focused ? <MoonlightActive width={20} height={20} /> :  <Moonlight width={20} height={20} />;
                        case 'Event':
                            return focused ? <FlareActive width={20} height={20} /> : <Flare width={20} height={20} />;
                        case 'Friends':
                            return focused ?  <CommunityActive width={20} height={20} /> : <Community width={20} height={20} />;
                        case 'Profile':
                            return focused ?  <UserActive width={20} height={20} /> : <User width={20} height={20} />;
                    }

                },
                tabBarActiveTintColor: Colors.orange,
                tabBarInactiveTintColor: Colors.black40,
                tabBarHideOnKeyboard: true,
                headerShown: false,
                headerTitleAlign: 'center',
                tabBarLabelStyle: {
                    fontFamily: 'Inter-Medium',
                    fontSize: 14,
                    lineHeight: 18,
                },
                tabBarStyle: { height: 64, paddingBottom: 12, paddingTop:15, backgroundColor: '#1A1A1A', borderColor: 'transparent' },
            })}
            
        >
            <Tab.Screen
                name="MyBooking"
                component={MyBooking}
                options={{
                    headerShown: true,
                    title: "My Booking",
                    tabBarLabel: "Nightlife",
                    headerStyle: {
                        backgroundColor: Colors.bgDefault,
                    },
                    headerShadowVisible:false,
                    headerTitleStyle: {
                        color: 'white',
                    },
                }}
            />
            <Tab.Screen
                name="Event"
                component={Event}
                options={{
                    headerShown: true,
                    title: "Event",
                    headerStyle: {
                        backgroundColor: Colors.bgDefault,
                    },
                    headerShadowVisible:false,
                    headerTitleStyle: {
                        color: 'white',
                    },
                }}
            />
            <Tab.Screen name="Friends" component={Friends} />
            <Tab.Screen name="Profile" component={Profile} />
       </Tab.Navigator>
     );
}

const RootStack = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShadowVisible:false,
                    headerShown: false,
                    contentStyle: { backgroundColor: Colors.bgDefault, },
                    headerStyle: {
                        backgroundColor: Colors.bgDefault,
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        color: 'white',
                        alignSelf: 'center'
                    },
                }}
                initialRouteName='Dashboard'
            >
                <Stack.Screen
                    name="Dashboard"
                    component={DashboardStackScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="ClubDetail"
                    component={ClubDetail}
                    options={{
                        headerShown: true,
                        title: "",
                        headerTransparent: true,
                        headerShadowVisible: false,
                        headerStyle: {
                            backgroundColor: 'transparent',
                        },
                        headerTitleStyle: {
                            color: 'white',
                        },
                    }}
                />
                <Stack.Screen
                    name="SelectDate"
                    component={SelectDate}
                    options={{
                        headerShown: true,
                        title: "Walk In",
                        headerTitleStyle: {
                            color: Colors.orange,
                        },
                    }}
                />
                <Stack.Screen
                    name="SelectTicket"
                    component={SelectTicket}
                    options={{
                        headerShown: true,
                        title: "Walk In",
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootStack;