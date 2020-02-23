import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'firebase'; //node_modules içerisinden bir kütüphane eklioyrsak firebase bunlardan önce import edilmeli
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class Main extends Component {

  componentWillMount() {
      firebase.initializeApp({
      apiKey: 'AIzaSyCnrKraZF-K1yFN5FvaosnqXzxMH7vVuTg',
      authDomain: 'ogrencikayit-189ba.firebaseapp.com',
      databaseURL: 'https://ogrencikayit-189ba.firebaseio.com',
      projectId: 'ogrencikayit-189ba',
      storageBucket: 'ogrencikayit-189ba.appspot.com',
      messagingSenderId: '820238394590',
      appId: '1:820238394590:web:49fce8f9625545c5758e4f'
    });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default Main;
