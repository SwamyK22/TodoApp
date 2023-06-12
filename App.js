import React from 'react';
import {TailwindProvider} from 'tailwindcss-react-native'
import ShoppingCart from './src/Components/Navigation/App';
import { Provider } from 'react-redux';
import { UserContextProvider } from './src/Context/userContext';
import store from './src/redux/store/Store';

export default function App() {
  return (
    <Provider store={store}>
      <UserContextProvider>
      <TailwindProvider>
        <ShoppingCart />
      </TailwindProvider>
      </UserContextProvider>
    </Provider>
  )
  }