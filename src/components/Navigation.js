import React from 'react';
import Link from './Link';
import { getProperties } from '../ops/helper';
import '../styles/Navigation.css';

const Navigation = ({ displayGroup, groups, setDisplayGroup, setDisplayProp }) => {
  return (
    <nav id='navigation'>
      { groups.map(group => {
        return (
          <div className='nav-links'>
            <Link linkText={ group.name } handleClick={ setDisplayGroup } />
            { displayGroup !== group.name ? '' : 
               getProperties(groups, displayGroup).map(name => {
                return(
                  <Link linkText={ name } handleClick={ setDisplayProp } />
                );
              })
            }}
          </div>
      )})}
    </nav>
  );
};

export default Navigation;