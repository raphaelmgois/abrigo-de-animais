import * as React from 'react'
// import React, { useState } from 'react'
import { Image, Platform, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import * as WebBrowser from 'expo-web-browser'

import { MonoText } from '../components/StyledText'
import Cards from './Cards'
import Caixa from './Caixa'

export default function Despesas() {


    return (
        <View style={styles.container}>

            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.welcomeContainer}>
                    <Image
                        source={
                            __DEV__
                                // ? require('../assets/images/logo.png')
                                // : require('../assets/images/logo.png')
                                ? require('../assets/images/gif.gif')
                                : require('../assets/images/gif.gif')
                        }
                        style={styles.welcomeImage}
                    />

                </View>

                <View style={styles.containerCardview} >
                    <Cards />
                </View>


                {/* <View style={{ zIndex: 999999, position: "relative", width: "100%", bottom: 1 }}>
                    <Caixa />
                </View> */}

            </ScrollView>




            <View style={styles.tabBarInfoContainer}>
                <ScrollView style={{ zIndex: 999999 }}>
                    <Caixa />
                </ScrollView>

            </View>


            {/* <View style={styles.tabBarInfoContainer}>
                <Text style={styles.tabBarInfoText}>Cálculo baseado no mês: Março</Text>


                <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
                    <MonoText style={styles.codeHighlightText}>Fluxo de caixa está em: R$ 100,00</MonoText>
                </View>

            </View> */}

        </View >
    )
}



Despesas.navigationOptions = {
    header: null,
}



function RacaoGato() {
    if (__DEV__) {
        const saibaMais = (
            <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
                Gastamos:
            </Text>
        )

        return (
            <Text style={styles.RacaoGatoText}>
                {/* {saibaMais} */}
                Gastamos:R$ 500,00<Caixa />
                {/* R$ 500,00 */}
            </Text>

        )
    } else {
        return (
            <Text style={styles.RacaoGatoText}>
                Algo errado! Recarregando
            </Text>
        )
    }
}


function handleLearnMorePress() {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/')
}

function handleHelpPress() {
    WebBrowser.openBrowserAsync(
        'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#F5FCFF',
        backgroundColor: '#b0e3fe',

    },

    containerCardview: {

        backgroundColor: '#F5FCFF',
        borderRadius: 20

    },

    RacaoGatoText: {
        marginBottom: 20,
        color: 'white',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'justify',

    },
    RacaoCachorroText: {
        marginBottom: 20,
        color: 'white',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'justify',
    },
    // contentContainer: {
    //     paddingTop: 30,
    //     overflow: 'hidden'
    // },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 320,
        height: 300,
        resizeMode: 'contain',
        marginTop: -23,
        marginLeft: -10,
    },
    Gato: {
        alignItems: 'flex-start',
        marginHorizontal: 20,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginBottom: 20,
        backgroundColor: "green",

        borderColor: "#ff0000",
        borderStyle: 'solid',
        borderWidth: 1
    },
    Cachorro: {
        alignItems: 'flex-start',
        marginHorizontal: 20,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginBottom: 20,
        backgroundColor: "red",
        borderColor: "#ff0000",
        borderStyle: 'solid',
        borderWidth: 1
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: '#fff',
    },
    codeHighlightContainer: {
        backgroundColor: '#4a9fee',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        color: 'white',
        lineHeight: 24,
        textAlign: 'center',
    },
    tabBarInfoContainer: {
        position: 'relative',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: -3 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: -20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#6fbde2',
        paddingVertical: 20,

    },

    tabBarInfoText: {
        fontSize: 17,
        color: '#fff',
        textAlign: 'center',
    },
    navigationFilename: {
        marginTop: 5,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
})
