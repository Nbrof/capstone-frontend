import {Route, Switch} from 'react-router-dom'
import './App.css';
import Footer from './components/footer';
import Subheader from './components/Subheader';
import Header from './components/header'
import Main from './pages/Main'
import Info from './pages/Info'
import About from './pages/About'



function App() {
  return (
    <div className="App">
      <Header/>
      <Subheader/>
      
      <Switch>

      <Route exact path="/">
      <Main />
      </Route>
      <Route exact path="/Info">
      <Info />
      </Route>
      <Route exact path="/About">
      <About />
      </Route>
      
      </Switch>

      <Footer/>
      
    </div>
  );
}

export default App;
