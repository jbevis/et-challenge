import React, { Component } from 'react';
import '../styles/App.css';
import Navigation from './Navigation';
import MainDisplay from './MainDisplay';

class App extends Component {
  render() {
    const { displayGroup, displayProp, groups, setDisplayGroup, setDisplayProp } = this.props;

    return (
      <main className='app'>
        <Navigation groups={ groups }
                    displayGroup={ displayGroup }
                    setDisplayGroup={ setDisplayGroup }
                    setDisplayProp={ setDisplayProp } />
        <MainDisplay groups={ groups }
                     displayGroup={ displayGroup }
                     displayProp={ displayProp } />
      </main>
    );
  }
}

export default App;
