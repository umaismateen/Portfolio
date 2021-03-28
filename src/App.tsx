import React from 'react';
import { Route,Switch,Redirect } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import About from './containers/About/About';
import Contact from './containers/Contact/Contact';
import Skills from './containers/Skills/Skills';


const App: React.FC = () => {
  return (
    <div className="App">
      <Layout/>
      <Switch>
        <Route path="/contact" exact component={Contact} />
        <Route path="/skills" exact component={Skills} />
        <Route path="/" exact component={About} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
