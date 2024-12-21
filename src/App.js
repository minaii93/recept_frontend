
import './App.css';
import Tabla from './components/Tabla';
import ReceptUrlap from './components/Urlap';

function App() {
  return (
    <div className="App">
       <nav><a href="">Receptek</a></nav>
      <header className="App-header">
       <h2>Ízletes receptek mindenkinek</h2>
      </header>
     
      
    
      <ReceptUrlap>

      </ReceptUrlap>
      <Tabla></Tabla>
   

    </div>
  );
}

export default App;
