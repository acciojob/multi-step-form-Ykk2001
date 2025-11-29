import React, { useState } from "react";
import './../styles/App.css';
import Step from "./Step";
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


