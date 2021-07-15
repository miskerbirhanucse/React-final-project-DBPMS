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
    <BrowserRouter>
      <div className="App">
        {/* class="wrapper" */}
       
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
