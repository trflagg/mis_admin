import React from 'react';
import { Provider } from 'react-redux';
import initializeStore from './store';
import './App.css';
import ProfileListContainer from './profile/ProfileListContainer';

const store = initializeStore();

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header>
          Make It So - Admin
        </header>
        <ProfileListContainer />
      </div>
    </Provider>
  );
}
