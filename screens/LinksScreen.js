

import * as React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import * as WebBrowser from 'expo-web-browser'
import { RectButton, ScrollView } from 'react-native-gesture-handler'

export default function LinksScreen() {
  return (

    <View style={styles.fullicontainer} >

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Image
            source={
              // ? require('../assets/images/logo.png')
              // : require('../assets/images/logo.png')
              require('../assets/images/pessoas2.png')}
            style={styles.welcomeImage}

          />

        </View>
        <View>
          <OptionButton
            icon="logo-facebook"
            // icon="md-woman"
            label="Yasmim Pussente"
            cargo="Tesoureira"
            tel="21 98528-2748"
            conta="CEF: Ag. 0185 op:013 42615-58888888"
            outro="Bradesco: Ag. 2731-6  cc.0051340-7"

            onPress={() => WebBrowser.openBrowserAsync('https://www.facebook.com/yasmim.pussente')}
          />

        </View>

        <View>
          <OptionButton
            icon="logo-facebook"
            // icon="md-woman"
            label="Andreia Bastos de Araújo"
            cargo="Relações Públicas"
            tel="21 99360-3601"
            conta="Itaú: Ag 6948 Cc 14568-2"
            onPress={() => WebBrowser.openBrowserAsync('https://www.facebook.com/decab1')}
          />

        </View>

        <View>
          <SimpleOptionButton
            icon="logo-facebook"
            // icon="md-woman"
            label="Dario Moreira"
            cargo="Moto Táxi e Frete"
            tel="21 97033-7138"

            // onPress={() => WebBrowser.openBrowserAsync('https://www.facebook.com/dario.moreira.7777019')}
            onPress={() => WebBrowser.openBrowserAsync('tel:+5521970337138')}
          />

        </View>
        <View>
          <SimpleOptionButton
            icon="ios-cafe"
            // icon="md-woman"
            label="Raphael Gois"
            cargo="Desenvolvedor Web / Designer Gráfico"
            tel="21 96786-3101"

            // onPress={() => WebBrowser.openBrowserAsync('https://www.facebook.com/dario.moreira.7777019')}
            onPress={() => WebBrowser.openBrowserAsync('https://raphagois.000webhostapp.com')}
          />

        </View>

      </ScrollView>


    </View>

  )
}

function OptionButton({ icon, label, cargo, tel, conta, outro, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={95} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
          <Text style={styles.cargo}>{cargo}</Text>
          <Text style={styles.tel}>{tel}</Text>
          <Text style={styles.dados}>{conta}</Text>
          <Text style={styles.outro}>{outro}</Text>

        </View>
      </View>
    </RectButton>
  )
}

function SimpleOptionButton({ icon, label, cargo, tel, conta, outro, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={95} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
          <Text style={styles.cargo}>{cargo}</Text>
          <Text style={styles.tel}>{tel}</Text>
        </View>
      </View>
    </RectButton>
  )
}

const styles = StyleSheet.create({
  fullicontainer: {
    flex: 1,
    backgroundColor: '#ff0000',
  },
  welcomeImage: {
    width: "100%",
    height: 300,
    resizeMode: 'contain',
    marginTop: -23,
    marginLeft: -10,
  },
  contentContainer: {
    paddingTop: 15,
    // backgroundColor: '#b0e3fe',
    backgroundColor: '#b0e3fe',
  },
  optionIconContainer: {
    marginRight: 12,
    marginTop: -9
  },
  option: {
    backgroundColor: '#ededed',
    paddingHorizontal: 30,
    paddingVertical: 15,
    marginBottom: 5,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',

  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: 'flex-start',
    marginTop: -4,
  },
  cargo: {
    fontSize: 14,
    alignSelf: 'flex-start',
    marginTop: -6,
    marginBottom: 7
  },
  dados: {
    fontSize: 14,
    alignSelf: 'flex-start',
    marginTop: -4,
  },
  outro: {
    fontSize: 14,
    alignSelf: 'flex-start',
    marginTop: -4,
  },
  tel: {
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: 'flex-start',
    marginTop: -4,
    color: "#898989"
  },
})
