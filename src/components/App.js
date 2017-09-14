import React, { Component } from 'react';
import Navigation from './Navigation';
import MainDisplay from './MainDisplay';
import * as data from '../data/schema';

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount () {
    this.props.getData(data);
  }

  render() {
  const { displayGroup, displayProperty, groups, setDisplayGroup, setDisplayProp, getData } = this.props;
    return (
      <main className='app'>
        <h1>EverTrue Challenge: Property Navigation</h1>
        <div className='main-app'>
          <Navigation groups={ groups }
                      displayGroup={ displayGroup }
                      setDisplayGroup={ setDisplayGroup }
                      setDisplayProp={ setDisplayProp } />
          <MainDisplay groups={ groups }
                       displayGroup={ displayGroup }
                       displayProperty={ displayProperty } />
        </div>
      </main>
    );
  };
};

export default App;
