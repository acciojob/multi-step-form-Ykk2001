// import React, { useState } from "react";
// import './../styles/App.css';
// import Step from "./Step";
// const App = () => {
//   const[step,setStep]=useState(1);
//   const [formData,setFormData]=useState({
//    first_name:'',
//    last_name:'',
//    model:'',
//    car_price:'',
//    card_info:'',
//    expiry_date:''
//   })

//   function handleChange(e)
//   {
//    setFormData({...formData,[e.target.id]:e.target.value});
//   }

//   function nextStep()
//   {
//     if(step<3)
//     {
//       setStep(prev=>prev+1);
//     }
//   }

//   function prevStep()
//   {
//    if(step>1)
//    {
//     setStep(prev=>prev-1)
//    }
//   }
  
//   function handleSubmit(e)
//   {
//     e.preventDefault();
//     if(formData.first_name.trim()=='' ||formData.last_name.trim()==''||formData.model.trim()=='' ||formData.car_price==''|| formData.card_info.trim()==''||formData.expiry_date.trim()=="")
//     {
//       alert("Please fill all the form fields.")
//       return
//     }
//    console.log("Form Submitted Successfully!");
//    console.log(formData);
//   }

//   return (
//     <div>
//         <Step step={step}
//          formData={formData}
//          handleChange={handleChange}
//          nextStep={nextStep}
//          prevStep={prevStep}
//          handleSubmit={handleSubmit}
//         />
//     </div>
//   )
// }//App

// export default App


import React, { useCallback, useEffect, useState } from "react";
import "./../styles/App.css";
import MultiStepForm from "./MultiStepForm";

const App = () => {
  const [step, setStep] = useState(0);
  const [form, setForm] = React.useState([
    [
      {
        value: "",
        type: "text",
        id: "first_name",
        label: "First Name",
        error: "",
        name: "firstName",
      },
      {
        value: "",
        type: "text",
        id: "last_name",
        label: "Last Name",
        error: "",
        name: "lastName",
      },
    ],
    [
      {
        value: "",
        type: "text",
        id: "model",
        label: "Model",
        error: "",
        name: "model",
      },
      {
        value: "",
        type: "text",
        id: "car_price",
        label: "Car Price",
        error: "",
        name: "car_price",
      },
    ],
    [
      {
        value: "",
        type: "text",
        id: "card_info",
        label: "Card Number",
        error: "",
        name: "card_number",
      },
      {
        value: "",
        type: "text",
        id: "expiry_date",
        label: "Expiry Date",
        error: "",
        name: "expiry_date",
      },
    ],
  ]);

  const getError = (name, value) => {
    if (name === "card_number" && value.length !== 12) {
      return "Credit Card Number must be 12 digit long";
    }
    if (
      name === "expiry_date" &&
      (value.split("/").length !== 2 ||
        (value.split("/").length === 2 &&
          !value
            .split("/")
            .every(
              (num) => parseInt(num) > 0 && num.length <= 2 && num.length > 0
            )))
    ) {
      return "Expiry Date must be in MM/YY format";
    }

    return "";
  };

  const handleChangeInput = useCallback(
    (value, index) => {
      setForm((prevForm) => {
        const updated = [...prevForm];
        const currentStep = [...updated[step]]; // make sure we clone inner array too
        currentStep[index] = {
          ...currentStep[index],
          value,
          error: step === 2 ? getError(currentStep[index].name, value) : "",
        };
        updated[step] = currentStep;
        return updated;
      });
    },
    [step]
  );

  const handlePrevious = () => {
    setStep((prev) => {
      if (prev === 0) return prev;
      else return prev - 1;
    });
  };
  const handleNext = () => {
    const item = form[step];
    if (item.some((input) => !input.value.trim())) return;
    setStep((prev) => {
      if (prev === form.length - 1) return prev;
      else return prev + 1;
    });
  };
  function getTitle(step) {
    if (step === 0) {
      return "Customer Details";
    } else if (step === 1) {
      return "Car Details";
    } else if (step === 2) {
      return "Payment Details";
    }
  }
  return (
    <div>
      {/* Do not remove the main div */}
        <MultiStepForm
          data={form}
          onChange={handleChangeInput}
          step={step}
          handlePrevious={handlePrevious}
          handleNext={handleNext}
          title = {getTitle(step)}
        />
    </div>
  );
};

export default App;