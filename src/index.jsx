import React, {Component} from 'react';
import ReactDom from 'react-dom';
import './assets/style.css';

import Header from 'components/Header';
import Cards from 'components/Cards';
import Evaluated from 'components/Evaluated';
// import Sidebar from 'components/Sidebar';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <div className="content">
          <Cards/>
          <Evaluated/>
          {/*<Sidebar/>*/}
        </div>
      </div>
    );
  }
}

ReactDom.render(<App/>, document.getElementById('root'));
