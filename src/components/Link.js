import React from 'react';
import { formatName } from '../ops/helper';


const Link = ({ linkText, handleClick }) => {
  return(
    <h5 className='link-category'
        key={linkText} 
        onClick={ ()=> handleClick(linkText) }>
      { formatName(linkText)}
    </h5>
  );
};

export default Link;