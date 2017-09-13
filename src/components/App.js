import React, { Component } from 'react';
import '../styles/App.css';
import Navigation from './Navigation';
import MainDisplay from './MainDisplay';
import * as data from '../data/schema';

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount () {
    console.log('did mount: ', data)
    this.props.getData(data);
  }

  render() {
  const { displayGroup, displayProp, groups, setDisplayGroup, setDisplayProp, getData } = this.props;

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
