import React from 'react';
import Link from './Link';
import { getProperties } from '../ops/helper';
import '../styles/Navigation.css';

const Navigation = ({ displayGroup, groups, setDisplayGroup, setDisplayProp }) => {
  return (
    <nav id='navigation'>
      { groups.map(group => (
          <Link linkText={ group.name } handleClick={ setDisplayGroup } />
          { if (displayGroup !== group.name) {
            return '';
          } else {
            return getProperties(groups, displayGroup).map(name => (
                <Link linkText={ name } handleClick={ setDisplayProp } />
              ))
            }
          }
      ))}
    </nav>
  );
};

export default Navigation;