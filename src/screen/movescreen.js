import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'


const customData = require('../data/movies.json');
const Movies = ({navigation}) => {
    
    const [data, setData] = useState(customData);
    return (
        <ScrollView>
            <View style={styles.body}>
                <View>
                    <Text style={styles.bodytext}> Find Movies </Text>
                </View>
                <View style={styles.container}>
                    {data.map(item => (
                        <TouchableOpacity onPress={() => navigation.push('MovieDetails', { data: item })}>
                            <View style={styles.moviesCont}>
                                <Image style={styles.imga} source={{ uri: item.image }} />
                                <Text style={styles.imgatext} >{item.title}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    imgatext: {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 10
    },
    imga: {
        width: 120,
        height: 110,
    },
    moviesCont: {
        width: 180,
        height: 190,
        borderRadius: 20,
        backgroundColor: "#FFDEB8",
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'

    },
    bodytext: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    body: {
        paddingTop: 15,
        alignItems: 'center',
    }
})

export default Movies;