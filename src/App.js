import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';

// Iniciando projeto
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSystem />
        <Title headline="test" />
      </div>
    );
  }
}

export default App;
