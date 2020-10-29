import React, { useContext, useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import MyAppContext from './provider/myAppContext'

export default function Home() {
    let { netStatus } = useContext(MyAppContext)

    useEffect(() => {
        if (netStatus) {
            alert('call api')
        }
    }, [netStatus])

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Welcome to D5</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#34c3eb",
        alignItems: 'center',
        justifyContent: 'center'
    },
    heading: {
        color: 'white',
        fontSize: 55,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})