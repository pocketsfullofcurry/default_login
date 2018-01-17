import React from 'react';
import {Link} from 'react-router';
export default () => {
  return (
    <div className="boxed-view">
      <div className="boxed-view__box">
        <h1>4-0h-4</h1>
        <p>sorry. no go.</p>
        <Link className="button button--link" to="/">go back</Link>
      </div>
    </div>
  )
};
