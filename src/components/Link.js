import React from 'react';
import { formatName } from '../ops/helper';


const Link = ({ cssClass, linkText, handleClick }) => {
  return(
    <p className={ cssClass }
       key={linkText} 
       onClick={ ()=> handleClick(linkText) }>
      { formatName(linkText) }
    </p>
  );
};

export default Link;