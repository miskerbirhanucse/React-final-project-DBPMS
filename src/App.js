import './App.css';
// import LoginComponet from './components/pages/LoginComponent';
//import Header from './Header';
//import Menu from './Menu';
//import Dashboard from './Dashboard';
// import Register from './components/pages/RegisterComponent'
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes'
function App() {
  return (
<<<<<<< HEAD
    <div >
      {/* class="wrapper" */}
      {/* <Header />
      <Menu />
      <Dashboard /> */}
      <LoginComponent />
      
    </div>
=======
    <BrowserRouter>
      <div className="App">
        {/* class="wrapper" */}
       
        <Routes />
      </div>
    </BrowserRouter>
>>>>>>> f5b334d719ad391260d7dd0509e4303da5e9d8d1
  );
}

export default App;
