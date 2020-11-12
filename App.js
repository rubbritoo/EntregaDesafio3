import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import PeoplePage from './src/pages/PeoplePage'
import PeopleDetailsPage from './src/pages/PeopleDetailsPage'
import { createDrawerNavigator } from '@react-navigation/drawer';



const Drawer = createDrawerNavigator();
function App() {
  return (  
    <View style={styles.container}>
        <NavigationContainer >
          <Drawer.Navigator initialRouteName="PeoplePage">
            <Drawer.Screen name="Lista de Artistas" component={PeoplePage} />
            <Drawer.Screen name="Detalhe do Artista" component={PeopleDetailsPage} />
          </Drawer.Navigator>
        </NavigationContainer>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    
  },
});


export default App;