import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './components/Home';
import Steps from './components/Steps';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import ContactUs from './components/ContactUs';
import Appointment from './components/Appointment'
import Exit from './components/Exit'
import BottomNav from './components/BottomNav';

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path='/'>
            <Home/>
            <Services/>
            <Steps/>
            <WhyUs/>
            <ContactUs/>
          </Route>
          <Route exact path='/book-an-appointment'>
            <Appointment/>
          </Route>
          <Route exact path='/exit'>
            <Exit/>
          </Route>
        </Switch>
        <BottomNav/>
      </Router>
    </div>
  );
}

export default App;