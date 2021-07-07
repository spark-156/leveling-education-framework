import React from 'react';
import { TheRouter } from './TheRouter';
import styles from './styles/App.module.css';

import 'rsuite/dist/styles/rsuite-default.css';

function App() {
  return (
    <div className={styles.container}>
      <TheRouter />
    </div>
  );
}

export default App;
