import logo from './logo.svg';
import './App.css';
import Navbar from './Componants/Navbar';
import Textarea from './Componants/Textarea';

function App() {
  return (
      <>
      <Navbar title="Mynavbar" />
      <div className="container my-3">
    <Textarea heading="Enter the text in below box"/> 
    </div>
        </>

      );
}

export default App;
