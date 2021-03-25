import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'


const customData = require('../data/movies.json');
const Movkino = ({route}) => {
const data = route.params.data;
    return (
        <ScrollView>
            <View style={styles.body}>
                <View style={styles.container}>
                    <Image style={styles.imga} source={{ uri:data.image }} />
                </View>
                <View style={styles.title}>
                    <Text style={styles.titletext}> {data.title} </Text>
                    <Text> {data.year}, {data.genre} </Text>
                </View>
                <Text style={styles.description}> {data.description} </Text>

            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    description: {
        padding: 10,
    },
    titletext: {
        fontSize: 24,
        paddingBottom: 10,
    },
    title: {

        borderBottomColor: '#E2E2E2',
        borderBottomWidth: 2,
        padding: 10,
        paddingBottom: 29,
    },
    imga: {
        width: 310,
        height: 190
    },
    container: {
        width: '100%',
        height: 300,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center'
    },
    body: {

    }
})

export default Movkino;