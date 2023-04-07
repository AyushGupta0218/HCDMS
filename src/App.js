import './App.css';
import Navbar1 from './components/Navbar1';
//import Patient from './components/Patient';
import PatientSignUpform from './components/PatientSignUpform';



function App() {
  return (
    <>
     <Navbar1 /> 

     <br/>
    <br/>
    <div className='box'>

      <PatientSignUpform />
      
      </div>
    </>


    // <Router>
    //   <div>
    //     <Routes>
          
    //       <Route path=".">
    //         <PatientSignUpform />
    //       </Route>
    //     </Routes>
    //   </div>
    // </Router>
  );
}

export default App;
