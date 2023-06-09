// import * as React from 'react'
import React, { useState } from 'react'
import { Image, Platform, StyleSheet, Text, FlatList, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import * as WebBrowser from 'expo-web-browser'

import { MonoText } from '../components/StyledText'


export default function Despesas() {

    // this.state = {import * as React from 'react'
    //     items: []
    // }

    // const [items, setItems] = useState([])
    // const [id, setId] = useState(1)



    // useEffect(() => {
    //     fetch('https://private-6e427-despesas.apiary-mock.com/questions')
    //         .then(res => res.json())
    //         .then(items => setItems(items)
    //             .catch(console.log(err))
    //         )
    // })


    // setItems(items)
    //------------------------------------tentativa----
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         data: []
    //     }
    // }

    // loadDespesas = () => {
    //     fetch("https://private-6e427-despesas.apiary-mock.com/questions")
    //         .then(res => res.json())
    //     then(res => {
    //         this.setState({
    //             data: res.results || []
    //         })
    //     })
    // }

    // componentDidMount(){
    //     this.loadDespesas()
    // }
    //------------------------------------tentativa

    return (
        <View style={styles.container}>
            <ScrollView
            // style={styles.container}
            // Style={styles.contentContainer}
            >
                <View style={styles.welcomeContainer}>
                    <Image
                        source={
                            __DEV__
                                ? require('../assets/images/logo.png')
                                : require('../assets/images/robot-prod.png')
                        }
                        style={styles.welcomeImage}
                    />
                </View>

                {/* <View style={styles.Gato}>
                    <Text style={styles.getStartedText}>Ração para Gatos</Text>
                    <RacaoGato />
                </View>

                <View style={styles.Cachorro}>
                    <Text style={styles.getStartedText}>Ração para Cachorros</Text>
                    <RacaoCachorro />
                </View>
                <View style={styles.Gato}>
                    <Text style={styles.getStartedText}>Ração para Gatos</Text>
                    <RacaoGato />
                </View>
                <View style={styles.Cachorro}>
                    <Text style={styles.getStartedText}>Medicamento para Cães</Text>
                    <RacaoCachorro />
                </View> */}

                <View style={styles.welcomeContainer}>
                    <Cards />
                </View>





            </ScrollView>

            <View style={styles.tabBarInfoContainer}>
                <Text style={styles.tabBarInfoText}>Calculo baseado no mês: Abril</Text>

                <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
                    <MonoText style={styles.codeHighlightText}>Fluxo de caixa está em: R$ 100,00</MonoText>
                </View>
            </View>
        </View >
    )
}



Despesas.navigationOptions = {
    header: null,
}

// function RacaoGato() {
//     if (__DEV__) {
//         const saibaMais = (
//             <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
//                 Gastamos:
//             </Text>
//         )

//         return (
//             <Text style={styles.RacaoGatoText}>
//                 {/* {saibaMais} */}
//                 Gastamos:{item.valor}
//                 {/* R$ 500,00 */}
//             </Text>

//         )
//     } else {
//         return (
//             <Text style={styles.RacaoGatoText}>
//                 Algo errado! Recarregando
//             </Text>
//         )
//     }
// }

// function RacaoCachorro() {
//     if (__DEV__) {
//         const saibaMais = (
//             <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
//                 Learn more
//             </Text>
//         )

//         return (
//             <Text style={styles.RacaoCachorroText}>
//                 valor da dívida: R$ 300
//                 {/* {saibaMais} */}
//             </Text>

//         )
//     } else {
//         return (
//             <Text style={styles.RacaoCachorroText}>
//                 Algo errado! Recarregando
//             </Text>
//         )
//     }
// }

// function handleLearnMorePress() {
//     WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/')
// }

// function handleHelpPress() {
//     WebBrowser.openBrowserAsync(
//         'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
//     )
// }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ededed',
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
    contentContainer: {
        paddingTop: 30,
        overflow: 'hidden'
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 220,
        height: 200,
        resizeMode: 'contain',
        marginTop: 3,
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
    DespesasFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
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
                elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
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
