import React from 'react';
import Link from './Link';
import { getProperties } from '../ops/helper';
import '../styles/Navigation.css';

const Navigation = ({ displayGroup, groups, setDisplayGroup, setDisplayProp }) => {
  return (
    <nav id='navigation'>
      <h2>Navigation</h2>
      { groups.map(group => {
        return (
          <div className='nav-links'>
            <Link cssClass='group-name' linkText={ group.name } handleClick={ setDisplayGroup } />
            { displayGroup !== group.name ? '' : 
               getProperties(groups, displayGroup).map(name => {
                return(
                  <Link cssClass='prop-name' linkText={ name } handleClick={ setDisplayProp } />
                );
              })
            }
          </div>
      )})}
    </nav>
  );
};

export default Navigation;