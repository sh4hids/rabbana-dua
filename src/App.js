import React, {Component} from 'react';
import MainNav from './components/navigation/MainNav';
import MainContainer from './components/body/MainContainer';
import data from './data/rabbana-dua.json';

class App extends Component {

  render() {
    return (
      <div className="App mdl-layout mdl-js-layout mdl-layout--fixed-drawer">
        <MainNav data={data}/>
        <MainContainer data={data}/>
      </div>
  );
  }
}

export default App;
