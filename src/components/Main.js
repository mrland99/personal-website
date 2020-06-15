import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/home';
import Gallery from '../components/gallery';
import Projects from '../components/projects';
import Research from '../components/research';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/personal-website' component={Home}></Route>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/gallery' component={Gallery}></Route>
      <Route exact path='/projects' component={Projects}></Route>
      <Route exact path='/research' component={Research}></Route>
    </Switch>
  );
}


export default Main;