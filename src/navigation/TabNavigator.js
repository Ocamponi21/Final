import React from 'react';
import ContactsScreen from '../screens/Contacts';
import FamilyContactScreen from '../screens/FamilyContacts';
import FriendsContactScreen from '../screens/FriendContacts';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabNavigator = props => {
 
  return (
    <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: 'blue',
            tabBarLabelStyle: {
                flex: 1,
                fontSize: 15,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 12,
            },
            tabBarStyle: {display: 'flex'},
            tabBarIconStyle: {display: 'none'},
        }}
    >
        <Tab.Screen name={'All'} component={ContactsScreen}/>
        <Tab.Screen name={'Family'} component={FamilyContactScreen}/>
        <Tab.Screen name={'Friends'} component={FriendsContactScreen}/>
    </Tab.Navigator>
  );
};

export default TabNavigator;