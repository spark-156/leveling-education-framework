import React from 'react';

import { useHistory } from 'react-router-dom';

export default function PageNotFound() {
  const history = useHistory();

  const clickHandler = () => {
    history.goBack();
  }

  return <div >
    <div >Could not find the page you were looking for</div>
    <button onClick={clickHandler}>Click me to go back!</button>
  </div>
}