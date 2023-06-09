import React from 'react'
import {
    FlatList, ActivityIndicator, Text, View, Platform,
} from 'react-native'

export default class Caixa extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,


        }
    }

    componentDidMount() {
        return fetch('http://raphagois.000webhostapp.com/Api/caixa.json')
            .then(response => response.json())
            .then(responseJson => {
                this.setState(
                    {
                        isLoading: false,
                        dataSource: responseJson.caixa,
                    },
                    function () { }
                )
            })
            .catch(error => {
                console.error(error)
            })
    }

    render() {
        const styles = {

            tituloCard: {
                fontSize: 20,
                fontWeight: "bold",
                color: 'white',
                textAlign: 'center',
            },

            valorText: {
                marginTop: 2,
                marginBottom: 4,
                color: 'white',
                fontSize: 31,
                fontWeight: "bold"
            },
            estadodivida: {
                color: 'white',
                fontSize: 14,


            },

            contentContainer: {
                paddingTop: 30,
                overflow: 'hidden'
            },


            containerCard: {
                alignItems: 'flex-start',
                marginHorizontal: 20,
                paddingVertical: 15,
                paddingHorizontal: 20,
                marginBottom: 5,
                backgroundColor: "transparent",

                boxShadow: "15px 10px 20px #888888",
                borderColor: "#ededed",
                borderStyle: 'solid',

                borderWidth: 1
            },

            statusCaixaRuim: {
                borderRadius: 10,
                paddingHorizontal: 10,
                paddingVertical: 10,
                color: "white",
                backgroundColor: "#e11a55"



            },
            statusCaixaOk: {
                borderRadius: 10,
                paddingHorizontal: 10,
                paddingVertical: 10,
                color: "white",
                backgroundColor: "#15b460",

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
                paddingVertical: -3,

            },
            tabBarInfoText: {
                fontSize: 17,
                color: '#fff',
                textAlign: 'center',
            },
            codeHighlightContainer: {
                backgroundColor: '#transparent',
                borderRadius: 3,
                paddingHorizontal: 4,
            },
            navigationFilename: {
                marginTop: 5,
            },


        }


        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator size="large" color="#000000" />
                </View>
            )
        }

        return (


            <View style={{ flex: 1, paddingTop: -1 }}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) => (

                        <View style={styles.tabBarInfoContainer}>
                            <Text style={styles.tabBarInfoText}>Cálculo baseado no mês: {item.mes}</Text>
                            <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
                                {/* <Text style={styles.codeHighlightText}>Fluxo de caixa está em: {item.valor}</Text> */}
                                <Text style={[styles.codeHighlightText, item.ruim === true ? styles.statusCaixaRuim : styles.statusCaixaOk]}>Fluxo de caixa está em: {item.valor}</Text>

                            </View>

                        </View>


                    )}
                    keyExtractor={({ id }, index) => id}
                />
            </View>

        )
    }
}