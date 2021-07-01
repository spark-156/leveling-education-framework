import React from 'react';

import { useHistory } from 'react-router-dom';

import styles from '../styles/App.module.css';

export default function PageNotFound() {
  const history = useHistory();

  const clickHandler = () => {
    history.goBack();
  }

  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  }
  return <div className={styles.container}>
    <div style={style}>Could not find the page you were looking for</div>
    <button onClick={clickHandler}>Click me to go back!</button>
    </div>
}