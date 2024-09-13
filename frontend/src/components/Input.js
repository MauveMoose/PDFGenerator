//useState reprints the page each time a change is made


//Function to make an input field. 
//It takes "props" as an input when called. 
//It makes a label out of the value called "props.label" that was input
//The text input field will have placeholder text. This placeholder will also be input when the funciton is called.
function Input({label, value, handleChange}) {
  
  //Function that handles every 

    return(
      <div>
        <label>Enter {label}</label>
        <input type="text" onChange={handleChange} name= {label} value={value}></input><br></br>
      </div>
    );
  }

  export default Input;