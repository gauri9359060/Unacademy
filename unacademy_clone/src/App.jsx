import './App.css';

// import Home from './Components/HomeComponent/Home';
import UserNavigation from './Routes/UserNavigation';
import { AuthContext } from './Context/AuthContextProvider';




function App() {
  const {auth}=AuthContext
  return (
    <div className="App">

      <UserNavigation/>


    </div>
  );
}

export default App;