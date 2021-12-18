
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Pages/HomePage/Home/Home';
import Appointment from './Pages/AppointmentPage/Appointment/Appointment';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard'
import DoctorDetails from './Pages/DoctorDetails/DoctorDetails';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
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

             <Route  path="/doctor_details/:id">
              <DoctorDetails></DoctorDetails>
            </Route>

            <Route  path="/service_details/:id">
              <ServiceDetails></ServiceDetails>
            </Route>


           


            <PrivateRoute path="/appointment">
            <Appointment></Appointment>
            </PrivateRoute>

            
            <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
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
