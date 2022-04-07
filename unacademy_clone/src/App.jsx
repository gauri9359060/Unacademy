import './App.css';

import { Login } from './Components/Login/login';

// import Home from './Components/HomeComponent/Home';
import UserNavigation from './Routes/UserNavigation';
import Explore from './Components/explorepage/Explore';
import Footer from './Components/explorepage/Footer';




function App() {
  return (
    <div className="App">


      <Login />
      <UserNavigation />
      {/* <Explore/>
        <Footer/> */}

    </div>
  );
}

export default App;