import React, { useState } from 'react'
import { StyleSheet, Switch, View, Text, TouchableOpacity } from 'react-native'

const DarkMode = () => {
    const [count, setCount] = useState(0);

    // if (count === 10) {
    //     setCount(0)
    // };

    return (
        <View style={styles.body}>
            <Text>You have pressed me {count} time(s)</Text>
            <TouchableOpacity onPress={() => setCount(count + 1)} style={styles.button}    >
                <Text style={styles.text} > Press ME  </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    button: {
        width: '100%',
        marginVertical: 15,
        alignItems: "center",
        backgroundColor: "#53B175",
        padding: 15,
        borderRadius: 29,
        justifyContent: "center",
    },
    text: {
        fontWeight: "bold",
        color: 'white',
        fontSize: 24,
        alignItems: "center",
    },

})

export default DarkMode;