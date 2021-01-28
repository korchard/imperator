import React from 'react';
import { TemplateTs } from './TemplateTs'; //notice the brackets
//files must be tsx or it will not be happy with you!

//this one is a dummy function so no need for props
export const TemplateField = () => {
  return (
    <div>
      {/* we now get intellisense for all needed variables, if we forget one we can hover over it */}
      <TemplateTs
        text='hello'
        person={{ firstName: 'James', lastName: 'Posey' }}
      />
    </div>
  );
};
