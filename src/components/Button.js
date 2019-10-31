import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native'

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width /4,
        padding: 30,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',
        //customization
        borderRadius: 50,
        justifyContent: 'space-around',
    },
    operationButton: {
        color: '#fff',
        backgroundColor: '#fa8231'
    },
    doubleButton: {
        width: Dimensions.get('window').width / 4 * 2,
    },
    tripleButton: {
        width: Dimensions.get('window').width / 4 * 3,
    },
    circle:{
        borderRadius: 50
    }

})

export default props => {
    const styleButton = [styles.button]
    if (props.double) styleButton.push(styles.doubleButton)
    if (props.triple) styleButton.push(styles.tripleButton)
    if (props.operation) styleButton.push(styles.operationButton)
    return (
         <TouchableHighlight style={styles.circle} onPress={() => props.onClick(props.label)}>
            <Text style={styleButton}>{props.label}</Text>
        </TouchableHighlight>
    );
}