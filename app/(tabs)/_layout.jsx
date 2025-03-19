import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import COLORS from "../../constants/COLORS"

const _layout = () => {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: COLORS.LIGHT_GREEN
                ,
                paddingBottom: 10,
                paddingTop: 10,
                height: 60,
                width: "100%",
                alignSelf: "center",
                borderRadius: 10,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
                elevation: 5,


            },
            tabBarActiveTintColor: COLORS.PRIMARY,
            tabBarInactiveTintColor: COLORS.GRAY,
            tabBarShowLabel: false,

        }}>
            <Tabs.Screen name="home" options={{
                tabBarIcon: ({ color, size }) => (
                    <Entypo name="home" size={24} color={COLORS.BLACK} />
                )
            }} />
            <Tabs.Screen name="favourite" options={{
                tabBarIcon: ({ color, size }) => (
                    <AntDesign name="heart" size={24} color={COLORS.BLACK}/>
                )
            }} />
            <Tabs.Screen name="profile" options={{
                tabBarIcon: ({ color, size }) => (
                <FontAwesome name="user" size={24} color={COLORS.BLACK} />
                )
            }} />
        </Tabs>
    )
}

export default _layout