
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Pages/HomePage/Home/Home';
import Appointment from './Pages/AppointmentPage/Appointment/Appointment';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route  path="/home">
              <Home></Home>
            </Route>

            <PrivateRoute path="/appointment">
            <Appointment></Appointment>
            </PrivateRoute>


            <Route  path="/login">
              <Login></Login>
            </Route>
            <Route  path="/register">
              <Register></Register>
            </Route>

            
          

            
          </Switch>
        </Router>

      </AuthProvider>

    </div>
  );
}

export default App;
