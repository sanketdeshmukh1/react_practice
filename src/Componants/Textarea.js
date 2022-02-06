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
    

const toggleColor= ()=>{
    if(style1.color=='Black'){

        setStyle( {
            color:'White',
            backgroundColor:'black'
            }
           );
           setbtntog("Enable White Mode")
        
    }
    else{

        setStyle( {
            color:'Black',
            backgroundColor:'White'
            }
           );

           setbtntog("Enable Dark Mode")
     
        
    }
    
      }
    
      
  const [text, setText]=useState("add text here");
  
  const [btntog, setbtntog]=useState("Enable Dark Mode");
  
  const[style1,setStyle]=useState(
    {
    color:'black',
    backgroundColor:'White'
    }
    );


    return (
      <div>
  <div class="mb-3">
    <label for="textarea1" style={style1} className="form-label">{props.heading}</label>
    <textarea className="form-control" style={style1} onChange={handleChange} value={text} id="textarea1" rows="8"></textarea>
  </div>
<button className="textbutoon"  onClick={handleClickUp}>Convert to uppercase</button>
<button className="darkbutoon"  onClick={toggleColor}>{btntog}</button>


  </div>
    );
}
