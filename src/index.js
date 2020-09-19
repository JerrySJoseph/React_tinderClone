import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './components/navBar';
import TinderCards from './components/Cards';
import SwipeButtons from './components/SwipeButtons'

let element = <div>
  <NavBar />
  <TinderCards />
  <SwipeButtons />
</div>;

ReactDOM.render(
  element,
  document.getElementById('root')
);

