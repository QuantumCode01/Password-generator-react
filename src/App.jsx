
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useCallback, useEffect, useState } from 'react';
import './App.css'

function App() {
      const [Password, setPassword]=useState("");
      const [Length,setLength]=useState(8);
      const [numberAllowed, setnumberAllowed]=useState(false);
      const [characterAllowed, setcharacterAllowed]=useState(false);

     const passwordGenerator=useCallback(()=>{
      let string="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      let numstring="123456789";
      let charstring="!#$%&()*+";
      let pass="";
      if (numberAllowed) {
        string += numstring; // Numbers are added
      }
      if (characterAllowed) {
        string += charstring; // Special characters are added
      }
      
            
      for (let i=0;i<Length;i++){
      
          let index=parseInt(Math.random()*string.length);
          pass+=string[index];
      }
      setPassword(pass);
     },[Length,numberAllowed,characterAllowed,setPassword ])

    useEffect(()=>{
      passwordGenerator();
    },[Length,numberAllowed,characterAllowed,passwordGenerator])
    
    const copyToClipboard = () => {
      navigator.clipboard.writeText(Password) // Copy the password
        .then(() => {
          console.log("Password copied to clipboard!"); // Success
          alert("Password copied to clipboard!"); // Optional: Notify user
        })
        .catch((error) => {
          console.error("Failed to copy password: ", error); // Handle errors
        });
    };
  
  

  return (
    <>
    <div className="box w-100 d-flex justify-content-center mt-5 position-relative z-3">
        <div className="outer-container border border-1 rounded w-75 p-4 ">
            <h1 className="text-center">Password Generator</h1>
            <div className='row justify-content-center '>
              <div className='col-9 col-md-7 px-0 border '>
                <input className="w-100 py-2 px-2" type="text" name="password" id="password" placeholder="Password" value={Password} readOnly/>
              </div>
              <div className='col-3 col-md-2 px-0 '>
                <Button className="py-2 w-100 px-md-3 px-0 fs-5 fw-bold rounded-0" variant="primary" onClick={copyToClipboard}>Copy</Button>
              </div>
            </div>
            <div className='row justify-content-center mt-3'>
              <div className='col-md-3 col-lg-3  px-0 d-flex'>
                <input className="w-50 py-2" type="range" min="6" max="40"name="length" id="length" placeholder="Password"  onChange={(e)=>{setLength(e.target.value)}} readOnly/>
                <label htmlFor="length" className='fs-md-5 fs-6 fw-bold ms-3' >Length({Length})</label>
              </div>
              <div className='col-md-3 col-lg-2 px-0 d-flex align-items-center'>
                <input type="checkbox" id="Number" defaultChecked={numberAllowed} onChange={(e)=>{setnumberAllowed(e.target.checked)
                console.log(numberAllowed)
                }} />
                <label htmlFor="Number" className='fs-md-5 fs-6 fw-bold ms-3'>Number</label>
              </div>
              <div className='col-md-3 col-lg-2 px-0 d-flex align-items-center'>
                <input type="checkbox" id="Character" defaultChecked={characterAllowed} onChange={(e)=>{setcharacterAllowed(e.target.checked)
                      console.log(characterAllowed)
                }} />
                <label htmlFor="Character" className='fs-md-5 fs-6 fw-bold ms-3'>Character</label>
              </div>
            </div>
        </div>
    </div>
   
    </>
  )
}

export default App
