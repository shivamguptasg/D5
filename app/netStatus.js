import React, { useContext, useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Modal,
    TouchableOpacity
} from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import MyAppContext from './provider/myAppContext'

export default function NetworkStatus() {
    let { netStatus, setNetStatus } = useContext(MyAppContext)

    useEffect(() => {
        checkNetStatus()
    }, [netStatus])

    let checkNetStatus = () => {
        NetInfo.addEventListener(state => {
            if (state.isConnected) {
                setNetStatus(true)
            } else {
                setNetStatus(false)
            }
        });
    }

    return (
        <Modal transparent={true} animationType='slide' visible={!netStatus}>
            <View style={[styles.global, { flex: 1, }]}>
                <View style={styles.container}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>No netwrok available</Text>
                    <TouchableOpacity style={[styles.button, { justifyContent: 'center', alignItems: 'center' }]}>
                        <Text style={{ fontSize: 17, color: 'red' }}>Retry</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    global: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        backgroundColor: 'white',
        borderRadius: 10,
        height: '25%',
        width: '80%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20
    },
    button: {
        height: 50,
        borderWidth: 1,
        borderColor: 'red',
        width: '90%',
    }
})