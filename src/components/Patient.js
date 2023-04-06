import React , { useState } from "react";

export default function Patient() {
    
    const [ firstName , setTextFirst ] = useState('Enter text here');
    var [lastName ,setTextLast ] = useState('Enter text here');

    // const firstName = "Enter first name" ;
    //let lastName  ;

    const handleOnChange=(event ) =>{
        //console.log(text);
        setTextFirst(event.target.value);
    }
    
    const handleOnChangeLast=(event) =>{
        //console.log(text);
        setTextLast(event.target.value);
    }
    const signinOnChange=(event) =>{
        console.log(firstName);
        console.log((lastName));
        //console.log(lastName);
        //setText(event.target.value);
    }
    
    return (
       <form>

        <div className="form-row">
            <div className="form-group col-md-6">
            <label for="inputFirstName">First Name</label>
            <input type="text" className="form-control" value={firstName} onChange ={handleOnChange} id="inputFirstName" placeholder="Enter First Name"/>
            </div>
            <div className="form-group col-md-6">
            <label for="inputLastName">Last Name</label>
            <input type="text" className="form-control" value={lastName} onChange ={handleOnChangeLast}id="inputLaseName" placeholder="Enter Last Name"/>
            </div>
        </div>

        <div className="form-row">
            <div className="form-group col-md-6">
            <label for="inputFirstName">Date of birth</label><br/>
             

                 <input type="date" id="start" name="trip-start" value="2022-07-22" min="1975-01-01" max="2022-04-09"/>
            </div>
            <div className="form-group col-md-6">
            <label for="inputState">Gender</label>
            <select id="inputState" className="form-control">
                <option selected>Choose</option>
                <option value="1">Male</option>
            <option value="2">Female</option>
            </select>

            

            {/* <input type="text" className="form-control" id="inputLaseName" placeholder="Enter Last Name"/> */}
            </div>
        </div>

        <div className="form-row">
            <div className="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input type="email" className="form-control" id="inputEmail4" placeholder="Email" /* value ={ name }*/ onChange={(e) => e.target.value} />
            </div>
            <div className="form-group col-md-6">
            <label for="inputPassword4">Password</label>
            <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
            </div>
        </div>
        <div className="form-group">
            <label for="inputAddress">Address</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
        </div>
        <div className="form-group">
            <label for="inputAddress2">Address 2</label>
            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
        </div>
        <div className="form-row">
            <div className="form-group col-md-6">
            <label for="inputCity">City</label>
            <input type="text" className="form-control" id="inputCity"/>
            </div>
            <div className="form-group col-md-4">
            <label for="inputState">State</label>
            <select id="inputState" className="form-control">
                <option selected>Choose...</option>
                <option>...</option>
            </select>
            </div>
            <div className="form-group col-md-2">
            <label for="inputZip">Zip</label>
            <input type="text" className="form-control" id="inputZip"/>
            </div>
        </div>
        <div className="form-group">
            <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck"/>
            <label className="form-check-label" for="gridCheck">
                Check me out
            </label>
            </div>
        </div>

        <div>
        
        </div>
        <button type="submit" className="btn btn-primary" onClick={signinOnChange}>Sign in</button>
        </form>
  )
}
