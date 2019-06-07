import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timelines from './components/timelines'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
          <Introduction></Introduction>
					<About></About>
          <Timelines></Timelines>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
