import React from 'react';
import PropertyCard from './PropertyCard';
import { formatName } from '../ops/helper';

const MainDisplay = ({ groups, displayGroup, displayProperty }) => {
  return(
    <section className='main-display'>
      { groups.map(group => {
        if (group.name !== displayGroup) {
          return "";
        } else {
          return(
            <section className='main-display'>
              <h2 className='group-title'>{ formatName(group.name) }</h2>
              <PropertyCard info={ group.containing_object.properties } displayProperty={ displayProperty } />
            </section>
          );
        }
      }) }
    </section>
  );
};

export default MainDisplay