
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar/navbar';
import News from './Pages/News/News';
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
function App() {
  return (
    <>
    <Navbar />
    <BrowserRouter>
    <Routes>
      <Route path="/" >
        <Route path="news" component={<News />} />
        <Route path="Dashboard" component={<Dashboard />} />
      </Route> 
      <Route path="users" >
        <Route path="sign-up" component={<Signup />} />
        <Route path="log-in" component={<Login />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
