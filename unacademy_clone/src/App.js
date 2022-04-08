import './App.css';
// import Explore from './Components/explorepage/Explore';
import Footer from './Components/explorepage/Footer';
import Home from './Components/HomeComponent/Home';
import Navbar from './Components/Navbar/Navbar';




function App() {
  return (
    <div className="App">
        <Navbar/>
          <Home/>
        <Footer/>
    </div>
  );
}

export default App;
