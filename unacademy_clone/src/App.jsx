import './App.css';

import { Login } from './Components/Login/Login';

// import Home from './Components/HomeComponent/Home';
// import UserNavigation from './Routes/UserNavigation';
import Explore from './Components/explorepage/Explore';
import Footer from './Components/explorepage/Footer';




function App() {
  return (
    <div className="App">

      
      
<Login/>
    
        <Explore/>
        <Footer/>

    </div>
  );
}

export default App;
