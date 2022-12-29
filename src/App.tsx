import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import AirportDetailsComponent from './components/AirportDetailsComponent/AirportDetailsComponent';
import { appStore } from './store/AppStore';

function App() {
  return (
    <Provider store={appStore}>
    <div className="App">
      <AirportDetailsComponent />
    </div>
  </Provider>
  );
}

export default App;
