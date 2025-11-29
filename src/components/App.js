import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const[step,setStep]=useState(1);
  const [formData,setFormData]=useState({
   first_name:'',
   last_name:'',
   model:'',
   car_price:'',
   card_info:'',
   expiry_date:''
  })

  function handleChange(e)
  {
   setFormData({...formData,[e.target.id]:e.target.value});
  }

  function nextStep()
  {
    if(step<3)
    {
      setStep(prev=>prev+1);
    }
  }

  function prevStep()
  {
   if(step>1)
   {
    setStep(prev=>prev-1)
   }
  }
  
  function handleSubmit(e)
  {
    e.preventDefault();
    if(formData.first_name.trim()=='' ||formData.last_name.trim()==''||formData.model.trim()=='' ||formData.car_price==''|| formData.card_info.trim()==''||formData.expiry_date.trim()=="")
    {
      alert("Please fill all the form fields.")
      return
    }
   console.log("Form Submitted Successfully!");
   console.log(formData);
  }

  return (
    <div>
        <Step step={step}
         formData={formData}
         handleChange={handleChange}
         nextStep={nextStep}
         prevStep={prevStep}
         handleSubmit={handleSubmit}
        />
    </div>
  )
}//App

export default App


function Step({step,formData,handleChange,nextStep,prevStep,handleSubmit})
{
  return (<>
      <div className="card">

        <h2>Step:{step}</h2>

       {step==1 && (<div id="step1">
          <label>First Name:</label>
          <input id="first_name" value={formData.first_name} onChange={(e)=>handleChange(e)}></input>
           <br></br> <br></br>
          <label>Last Name:</label>
          <input id="last_name" value={formData.last_name} onChange={(e)=>handleChange(e)}></input>
       </div>)}

       {step==2 && (<div id="step2">
          <label>Car Model:</label>
          <input id="model" value={formData.model} onChange={(e)=>handleChange(e)}></input>
           <br></br> <br></br>
          <label>Car Price:</label>
          <input id="car_price" value={formData.car_price} onChange={(e)=>handleChange(e)}></input>
       </div>)}

       {step==3 && (<div id="step3">
          <label>Card Info:</label>
          <input id="card_info" value={formData.card_info} onChange={(e)=>handleChange(e)}></input>
           <br></br> <br></br>
          <label>Expiry Date:</label>
          <input id="expiry_date" value={formData.expiry_date} onChange={(e)=>handleChange(e)}></input>
       </div>)}
         
         <br></br> <br></br>

       <div className="buttons">
            {step>1 && <button onClick={prevStep}>Previous</button>}{' '}
            {step<3 && <button onClick={nextStep}>Next</button>}
            {step==3 && <button onClick={handleSubmit}>Submit</button>}
       </div>

      </div>
       
  </>)
}