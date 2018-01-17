import React from 'react';
import {Accounts} from 'meteor/accounts-base';

const PrivateHeader = (props) => {
  return (
    <div className="app-header">
      <div className="app-header__wrapper">
        <h1 className="app-header__title">{props.title}</h1>
        <button className="button button--link-text" onClick={() => Accounts.logout()}>Logout</button>
      </div>
    </div>
  );
}

PrivateHeader.propTypes = {
  title: React.PropTypes.string.isRequired
};

export default PrivateHeader;
