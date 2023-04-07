import React , { useState } from "react";

export default function Patient() {
    
    const [ firstName , setTextFirst ] = useState();
    const [lastName ,setTextLast ] = useState();
    const [age , setTextAge] = useState();
    const [contactNo, setTextConstactNo] = useState();


    // const firstName = "Enter first name" ;
    //let lastName  ;

    // const handleOnChange=(event ) =>{
    //     //console.log(text);
    //     setTextFirst(event.target.value);
    // }
    
    // const handleOnChangeLast=(event) =>{
    //     //console.log(text);
    //     setTextLast(event.target.value);
    // }
    
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
            <input type="text" className="form-control" value={firstName} onChange ={(e) => {setTextFirst(e.target.value)}} id="inputFirstName" placeholder="Enter First Name"/>
            </div>
            <div className="form-group col-md-6">
            <label htmlFor="inputLastName">Last Name</label>
            <input type="text" className="form-control" value={lastName} onChange ={(e) => {setTextLast(e.target.value)}} id="inputLaseName" placeholder="Enter Last Name"/>
            </div>
        </div>


        <div className="form-row">
            <div className="form-group col-md-6">
            <label htmlFor="inputFirstName">Age</label>
            <input type="text" className="form-control" value={age} onChange ={(e) => {setTextAge(e.target.value)}} id="inputFirstName" placeholder="Enter First Name"/>
            </div>
            <div className="form-group col-md-6">
            <label htmlFor="inputLastName">Contact No.</label>
            <input type="text" className="form-control" value={contactNo} onChange ={(e) => {setTextConstactNo(e.target.value)}} id="inputLaseName" placeholder="Enter Last Name"/>
            </div>
        </div>




        <div className="form-group">
            <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck"/>
            <label className="form-check-label" htmlFor="gridCheck">
                Check me out
            </label>
            </div>
        </div>
        
        <button type="submit" className="btn btn-primary" onClick={signinOnChange}>Sign in</button>
        </form>
  )
}
