import * as React from 'react'
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import * as WebBrowser from 'expo-web-browser'

import { MonoText } from '../components/StyledText'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Image
            source={
              __DEV__
                ? require('../assets/images/logo.png')
                : require('../assets/images/logo.png')
            }
            style={styles.welcomeImage}
          />
        </View>

        <View style={styles.getStartedContainer}>
          {/* <Sobre /> */}
          <Text style={styles.SobreText}>
            O abrigo fica em Figueira, Nova Iguaçu e nasceu graças ao amor de Dona Vera pelos peludos. Muitas vezes Dona Vera deixava de comer para alimentar os pequenos, chegou a cair muito doente por conta disso, mas com a ajuda de anjos já esta recuperada.
            Todos os peludos foram resgatados das ruas ou de situação de mal trato.
            Não temos ajuda de nenhum órgão ou instituição particular ou pública.
            Sobrevivemos com ajuda de doações e estes peludos estão precisando de sua ajuda.
        {/* {saibaMais} */}
          </Text>
          <Text style={styles.getStartedText}>Objetivo</Text>
          {/* <Objetivo /> */}

          <Text style={styles.ObjetivoText}>
            Iniciamos essa aplicação, para maior comodidade, acesso e controle de despesas do nosso amado abrigo.
        {/* {saibaMais} */}
          </Text>
          <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
            <Text style={styles.versionBy}>Desenvolvido por: <Developer /> </Text>
          </View>

          <View style={styles.versionContainer}>
            <Text style={styles.versionBy}>Versão:  <Version /> </Text>
          </View>

          {/* <Text style={styles.getStartedText}>
            Mudando texto aqui
          </Text> */}
        </View>

        {/* <View style={styles.helpContainer}>
          <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
            <Text style={styles.helpLinkText}>Help, it didn’t automatically reload!</Text>
          </TouchableOpacity>
        </View> */}
      </ScrollView>

      {/* <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>

        <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
          <MonoText style={styles.codeHighlightText}>navigation/BottomTabNavigator.js</MonoText>
        </View>
      </View> */}
    </View>
  )
}

HomeScreen.navigationOptions = {
  header: null,
}

function Developer() {
  const eudeveloper = (
    <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
      Raphael Gois
    </Text>

  )
  return (
    <Text style={styles.helpLinkText}>
      {eudeveloper}
    </Text>
  )
}

function Version() {
  const versionApp = (
    <Text style={styles.versionLinkText}>
      1.0.0 -beta
    </Text>

  )
  return (
    <Text style={styles.versionLinkText}>
      {versionApp}
    </Text>
  )
}


function Sobre() {
  if (__DEV__) {
    // const saibaMais = (
    // <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
    //   Learn more
    // </Text>
    // )

    return (
      <Text style={styles.SobreText}>
        O abrigo fica em Figueira, Nova Iguaçu e nasceu graças ao amor de Dona Vera pelos peludos. Muitas vezes Dona Vera deixava de comer para alimentar os pequenos, chegou a cair muito doente por conta disso, mas com a ajuda de anjos já esta recuperada.
        Todos os peludos foram resgatados das ruas ou de situação de mal trato.
        Não temos ajuda de nenhum órgão ou instituição particular ou pública.
        Sobrevivemos com ajuda de doações e estes peludos estão precisando de sua ajuda.
        {/* {saibaMais} */}
      </Text>

    )
  } else {
    return (
      <Text style={styles.SobreText}>
        Algo errado! Recarregando
      </Text>
    )
  }
}

function Objetivo() {
  if (__DEV__) {
    const saibaMais = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Raphael Gois
      </Text>
    )

    return (
      <Text style={styles.ObjetivoText}>
        {/* Iniciamos essa aplicação, para maior comodidade, acesso e controle de despesas do nosso amado abrigo. */}
        {/* {saibaMais} */}
      </Text>

    )
  } else {
    return (
      <Text style={styles.ObjetivoText}>
        Algo errado! Recarregando
      </Text>
    )
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync('https://raphagois.000webhostapp.com')
}

// function handleHelpPress() {
//   WebBrowser.openBrowserAsync(
//     'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
//   )
// }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F5FCFF',
    backgroundColor: '#b0e3fe',
  },
  SobreText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'justify',
  },
  ObjetivoText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'justify',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 300,
    height: 280,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  homeScreenFilename: {
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
  designBy: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
    color: "#888",
    fontSize: 10,
  },
  versionContainer: {
    paddingHorizontal: 4,
    marginBottom: 10
  },
  versionBy: {
    fontSize: 10,
    paddingHorizontal: 4,

    color: "#888"
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
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
    fontSize: 10,
    color: '#2e78b7',
  },
  versionLinkText: {
    fontSize: 12,
    color: '#2e78b7',
  },
})
