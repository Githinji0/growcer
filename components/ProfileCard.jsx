import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../styles/home.styles'
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Foundation from '@expo/vector-icons/Foundation';
const ProfileCard = ({ username, email }) => {
    const handelLogout = () => {
        console.log("loging out...")
    }

    return (
        <View style={styles.profilePageContainer}>
            <View style={styles.profilePicContainer}>
                <Image source={require("./../assets/images/user.png")} style={styles.userImage} />
                <Entypo name="edit" size={24} color="green" style={styles.editProfileBtn} />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.username}>{username}</Text>
                <View style={{
                    flexDirection: "row",
                    marginBottom: 5,
                    justifyContent: "center",
                    alignItems: "center"
                }}>

                        <Foundation name="mail" size={30} color="black" style={{
                            padding: 15,
                            marginBottom: 5,
                            color: "black"
                        }} />
                            <Text style={styles.userEmail}>
                        elchapo@example.com
                    </Text>
                </View>
                <View style={{
                    flexDirection: "row",
                    marginBottom: 5,
                    justifyContent: "center",
                    alignItems: "center"
                }} >
                    <FontAwesome name="phone" size={30} color="black" style={{
                        padding: 15,
                        marginBottom: 5,
                        color: "black"
                    }} />
                    <Text style={styles.userPhone}>
                        +254 123456789
                    </Text>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.editButton}>
                        <Text style={styles.editText}>Edit Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.logoutBtn} onPress={handelLogout}>
                        <Text style={styles.logoutText}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ProfileCard