import './App.css';

import { Login } from './Components/Login/login';

// import Home from './Components/HomeComponent/Home';
import UserNavigation from './Routes/UserNavigation';
import { AuthContext } from './Context/AuthContextProvider';
import NavBarTwo from './Components/Navbar/NavbarTwo';
import Navbar from './Components/Navbar/Navbar';




function App() {
  const {auth}=AuthContext
  return (
    <div className="App">
 
      {auth?<NavBarTwo/>:<Navbar/>}
      <UserNavigation/>

    </div>
  );
}

export default App;