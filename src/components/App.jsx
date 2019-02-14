import React from 'react';
import Header from './Header';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (  
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />

        <h1>Generic Template Works!</h1>
      </Switch>
      <hr/>
    </div>
  );
}

export default App;
