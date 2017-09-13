import React from 'react';
import { capitalize, formatName, formatAppKeys } from '../ops/helper';

const Property = ({ obj } => {
  const name = obj.name;
  const type = capitalize(obj.data_type);
  const appKeys = obj.app_keys.map(formatName);

  return (
    <section className='card-info'>
      <h3>{ formatName(name) }</h3>
      <div className='card-info-row'>
        <p>Data Type:</p>
        <p>{ type }</p>
      </div>
      <div className='card-info-row'>
        <p>Usage:</p>
        <p>{ formatAppKeys(appKeys) }</p>
      </div>
      <div className='card-info-row'>
        <p>EverTrue Field Name:</p>
        <p>{ name }</p>
      </div>
    </section>
  );
});

export default Property;