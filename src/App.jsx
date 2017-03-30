import React from 'react';
import './App.css';
import ProfileListContainer from './profile/ProfileListContainer';

export default function App() {
  return (
    <div className="App">
      <header>
        Make It So - Admin
        </header>
      <ProfileListContainer />
    </div>
  );
}
