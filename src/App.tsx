import React, {FC, JSX} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStackNavigator} from './navigators';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './store';
import {Provider} from 'react-redux';

const App: FC = (): JSX.Element => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <MainStackNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
