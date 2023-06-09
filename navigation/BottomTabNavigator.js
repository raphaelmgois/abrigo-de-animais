import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import Despesas from '../screens/Despesas'
import LinksScreen from '../screens/LinksScreen'

const BottomTab = createBottomTabNavigator()
const INITIAL_ROUTE_NAME = 'Home'

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) })

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />,
        }}
      />
      <BottomTab.Screen
        name="Relatório de Despesas Mensais"
        component={Despesas}
        options={{
          title: 'Despesas',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-barcode" />,
        }}
      />

      <BottomTab.Screen
        name="Ajude nosso Abrigo"
        component={LinksScreen}
        options={{
          title: 'Contato',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-people" />,
        }}
      />
    </BottomTab.Navigator>
  )
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME

  switch (routeName) {
    case 'Home':
      return 'Abrigo da Dona Vera'
    case 'Relatório de Despesas Mensais':
      return 'Relatório de Despesas Mensais'
    case 'Ajude nosso Abrigo':
      return 'Ajude nosso Abrigo'
  }
}
