import React from 'react';



import PrivateHeader from './PrivateHeader';

export default () => {
  return (
    <div>
      <PrivateHeader title="Default_header"/>
      <div className="page-content">
        Default Dashboard
      </div>
    </div>
  ) ;
};
