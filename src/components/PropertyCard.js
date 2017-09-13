import React from 'react';
import Property from './Property';

const PropertyCard = ({ info, displayProperty }) => {
  const properties = displayProperty === '' ? info : info.filter(item => item.name === displayProperty);
  return (
    <article className='prop-card'>
      { properties.map(obj => {
        return (
          <Property key={ obj.id } object={ obj } />
        )
      })}
    </article>
  );
};

export default PropertyCard;