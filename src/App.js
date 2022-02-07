import logo from './logo.svg';
import './App.css';
import Navbar from './Componants/Navbar';
import Textarea from './Componants/Textarea';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './Componants/About';

function App() {
  return (
      <>
      <Router>
       <Navbar title="Mynavbar" />
       <div className="container my-3">       
       <Switch>
            <Route path="/tex">
            <Textarea heading="Enter the text in below box"/> 
            </Route>
            <Route path="/about">
              <About heading="About page Enter the text in below box"/>
            </Route>
      </Switch>
            </div>   
          </Router>
         </>

      );
}

export default App;
