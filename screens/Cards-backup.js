import React from 'react'
import { FlatList, ActivityIndicator, Text, View } from 'react-native'

export default class Cards extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,


        }
    }

    componentDidMount() {
        return fetch('http://raphagois.000webhostapp.com/Api/despesas.json')
            .then(response => response.json())
            .then(responseJson => {
                this.setState(
                    {
                        isLoading: false,
                        dataSource: responseJson.despesas,
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
                textAlign: 'center'
            },

            valorText: {
                marginTop: -4,
                marginBottom: -3,
                color: 'white',
                fontSize: 35,
                fontWeight: "bold"

            },
            estadodivida: {
                color: 'white',
                fontSize: 14,
                marginBottom: 4
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

            containerCardDebt: {

                backgroundColor: "#e11a55",
                borderRadius: 20

            },

            containerCardOk: {
                borderRadius: 20,
                backgroundColor: "#15b460"
            },


        }


        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }

        return (
            // <View style={{ flex: 1, paddingTop: 20 }}>
            //     <FlatList
            //         data={this.state.dataSource}
            //         renderItem={({ item }) => (
            //             <Text>
            //                 {item.title}, {item.releaseYear}
            //             </Text>
            //         )}
            //         keyExtractor={({ id }, index) => id}
            //     />
            // </View>


            // <View style={{ flex: 1, paddingTop: 20 }}>
            //     <FlatList
            //         data={this.state.dataSource}
            //         renderItem={({ item }) => (
            //             <View style={styles.containerCard}>
            //                 <Text style={styles.tituloCard}> {item.title}, {item.releaseYear}</Text>
            //                 <Text style={styles.tituloCard}> {item.title}, {item.releaseYear}</Text>
            //             </View>
            //         )}
            //         keyExtractor={({ id }, index) => id}
            //     />
            // </View>


            // <View style={{ flex: 1, paddingTop: 20 }}>
            //     <FlatList
            //         data={this.state.dataSource}
            //         renderItem={({ item }) => (
            //             item.ativa === "true" ?
            //                 <View style={styles.containerCardDebt}>
            //                     <Text style={styles.tituloCard}>{item.tipo}</Text>
            //                     <Text style={styles.valorText}>{item.valor}</Text>
            //                     <Text style={styles.estadodivida}>Status da dívida: {item.status}</Text>
            //                     {/* <Text style={styles.estadodivida}>Status da dívida: {item.ativa}</Text> */}
            //                 </View>
            //                 :

            //                 <View style={styles.containerCard}>
            //                     <Text style={styles.tituloCard}>{item.tipo}</Text>
            //                     <Text style={styles.valorText}>{item.valor}</Text>
            //                     <Text style={styles.estadodivida}>Status da dívida: {item.status}</Text>
            //                     {/* <Text style={styles.estadodivida}>Status da dívida: {item.ativa}</Text> */}
            //                 </View>

            //         )}
            //         keyExtractor={({ id }, index) => id}
            //     />
            // </View>

            <View style={{ flex: 1, paddingTop: 20 }}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) => (



                        <View style={[styles.containerCard, item.ativa === true ? styles.containerCardDebt : styles.containerCardOk]}>
                            <Text style={styles.tituloCard}>{item.tipo}</Text>
                            <Text style={styles.valorText}>{item.valor}</Text>
                            <Text style={styles.estadodivida}>Status da dívida: {item.status}</Text>
                            {/* <Text style={styles.estadodivida}>Status da dívida: {item.ativa}</Text> */}
                        </View>


                    )}
                    keyExtractor={({ id }, index) => id}
                />
            </View>

        )
    }
}