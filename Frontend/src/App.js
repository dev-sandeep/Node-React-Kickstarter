import React from 'react';
import './App.css';
import Header from './Pages/Header'
import Home from './Pages/Home'

import { BaseContextProvider } from './ContextApi/BaseContext'

function App() {
  return (
    <div className="App">
      <BaseContextProvider>
        <Header />
        <Home />
        {/* <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router> */}
      </BaseContextProvider>
    </div>
  );
}

export default App;
