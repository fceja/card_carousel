// import logo from './logo.svg';
import Nav from './components/nav.js';
import Main from './components/main.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header"><h>This is header</h></header>
      <Nav/>
      <Main/> 
    </div>
  );
}

export default App;