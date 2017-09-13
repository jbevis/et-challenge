import React from 'react';
import PropertyCard from './PropertyCard';
import { formatName } from '../ops/helper';

const MainDisplay = ({ groups, displayGroup, displayProp }) => {
  return(
    <section className='main-display'>
      { groups.map(group => {
        if (group.name !== displayGroup) {
          return "";
        } else {
          return(
            <section className='main-display'>
              <h3 className='group-title'>{ formatName(group.name) }</h3>
              <PropertyCard info={ group.containing_object.properties } displayProp={ displayProp } />
            </section>
          );
        }
      }) }
    </section>
  );
};

export default MainDisplay