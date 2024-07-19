import React, { Suspense } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { RecoilRoot } from 'recoil';
import { NavigationContainer } from '@react-navigation/native';

import EventList from './Screens/EventList'
import EventDetail from './Screens/EventDetail';
import Questionnaire from './Screens/Questionnaire';
import CustomHeader from './Components/CustomHeader';

const Stack = createStackNavigator();

const App = () => {

  return (
    <RecoilRoot>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Suspense fallback={<Text>Loading App...</Text>}>
            <Stack.Navigator initialRouteName="EventList">
              <Stack.Screen name="EventList" component={EventList} options={{ headerShown: false }} />
              <Stack.Screen
                name="EventDetail"
                component={EventDetail}
                options={{
                  header: () => <CustomHeader />,
                }}
              />
              <Stack.Screen
                name="Questionnaire"
                component={Questionnaire}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </Suspense>
        </NavigationContainer>
      </SafeAreaView>
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;