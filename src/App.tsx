import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ROUTE_LIST } from 'routing';
import styles from './App.module.scss';

function App(): React.ReactElement {
  return (
    <div className={styles.app}>
      <main className={styles.main}>
        <Switch>
          {ROUTE_LIST.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                component={route.component}
                exact
              />
            );
          })}
        </Switch>
      </main>
    </div>
  );
}

export default App;
