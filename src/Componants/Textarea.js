import React,{useState} from 'react';


export default function Textarea(props) {
    
  const handleClickUp= ()=>{
let uptext=text.toUpperCase();
setText(uptext);
  }

  const handleChange= (event)=>{
    //console.log("Handle change");
      setText(event.target.value);
}
    
      
  const [text, setText]=useState("add text here");
    return (
      <div>
  <div class="mb-3">
    <label for="textarea1" className="form-label">{props.heading}</label>
    <textarea className="form-control" onChange={handleChange} value={text} id="textarea1" rows="8"></textarea>
  </div>
<button className="textbutoon"  onClick={handleClickUp}>Convert to uppercase</button>
  </div>
    );
}
