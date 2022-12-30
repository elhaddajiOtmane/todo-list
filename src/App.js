
import './style/App.css';
import NavBar from './components/Navbar'
import Lop from './components/Body'
import Home from './Home'

function App() {
  return (
 
    <div className="App">
         <NavBar/>
         <Home></Home>
         <Lop></Lop>

    </div>
  );
}

export default App;
