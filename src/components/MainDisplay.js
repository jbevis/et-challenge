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
            <article className='prop-card'>
              <h3 className='prop-card-title'>{ formatName(group.name) }</h3>
              <PropertyCard info={ group.containing_object.properties } displayProp={ displayProp } />
            </article>
          );
        }
      }) }
    </section>
  );
};

export default MainDisplay