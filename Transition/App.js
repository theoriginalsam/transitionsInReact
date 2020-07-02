import Home from './src/Home';
import Detail from './src/Detail';

import React from 'react';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

const Stack = createSharedElementStackNavigator();

const App = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={(navigation) => ({
            headerBacktitleVisible: false,
            cardStyleInterpolator: ({current: {progress}}) => {
              return {
                cardStyle: {
                  opacity: progress,
                },
              };
            },
          })}
          sharedElementsConfig={(route) => {
            const {data} = route.params;
            return [
              {
                id: `item.${data.id}.photo`,
                animation: 'move',
                resize: 'clip',
                align: 'center-top',
              },
              {
                id: `item.${data.id}.text`,
                animation: 'move',
                resize: 'clip',
                align: 'center-top',
              },
              {
                id: `item.${data.id}.profilePic`,
                animation: 'move',
                resize: 'clip',
                align: 'center-top',
              },
              {
                id: `item.${data.id}.username`,
                animation: 'move',
                resize: 'clip',
                align: 'center-top',
              },
            ];
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
