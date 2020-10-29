import React, { useContext, useEffect, useState } from 'react';
import {
    View,
    Text,
    Alert
} from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import MyAppContext from './provider/myAppContext'

export default function Home() {
    let { netStatus, setNetStatus } = useContext(MyAppContext)

    useEffect(() => {
        if (netStatus) {
            alert('call api')
        } else {
            checkNetStatus()
        }
    }, [netStatus])

    let askForNetOn = () => {
        if (!netStatus)
            Alert.alert(
                "No network",
                "Plz turn on Net to continue...",
                [
                    {

                    },
                    {
                        text: "Retry", onPress: () => {
                            checkNetStatus()
                        }
                    }
                ],
                { cancelable: false }
            );
    }


    let checkNetStatus = () => {
        NetInfo.addEventListener(state => {
            if (state.isConnected) {
                setNetStatus(true)
            } else {
                setNetStatus(false)
                askForNetOn()
            }
        });
    }

    return (
        <View style={{ flex: 1, backgroundColor: "#34c3eb", alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: 'white', fontSize: 55, fontWeight: 'bold' }}>D5</Text>
        </View>
    );
}