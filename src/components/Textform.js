import React , { useState } from "react";

export default function Textform(props) {

    const handleUpClick = () =>{
        console.log("morya was fucked");
        let newText = text.toUpperCase();
        setText(newText);
        console.log(leng);
    }
    const handleOnChange=(event) =>{
        console.log(text);
        setText(event.target.value);

    }
    const leng=() =>{
      console.log(text.length);
    }

    const [text, setText] = useState('Enter text here');
    //setText("daal na ");

  return (
    <div>
            <h1> {props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange ={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick} >Convert to upper case</button>
    </div>
  )
}
