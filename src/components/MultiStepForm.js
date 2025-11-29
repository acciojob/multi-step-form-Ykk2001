// import React from "react"
// export default function Step({step,formData,handleChange,nextStep,prevStep,handleSubmit})
// {
//   return (<>
//       <div className="card">

//         <h2>Step:{step}</h2>

//        {step==1 && (<div id="step1">
//           <label>First Name:</label>
//           <input id="first_name" value={formData.first_name} onChange={(e)=>handleChange(e)}></input>
//            <br></br> <br></br>
//           <label>Last Name:</label>
//           <input id="last_name" value={formData.last_name} onChange={(e)=>handleChange(e)}></input>
//        </div>)}

//        {step==2 && (<div id="step2">
//           <label>Car Model:</label>
//           <input id="model" value={formData.model} onChange={(e)=>handleChange(e)}></input>
//            <br></br> <br></br>
//           <label>Car Price:</label>
//           <input id="car_price" value={formData.car_price} onChange={(e)=>handleChange(e)}></input>
//        </div>)}

//        {step==3 && (<div id="step3">
//           <label>Card Info:</label>
//           <input id="card_info" value={formData.card_info} onChange={(e)=>handleChange(e)}></input>
//            <br></br> <br></br>
//           <label>Expiry Date:</label>
//           <input id="expiry_date" value={formData.expiry_date} onChange={(e)=>handleChange(e)}></input>
//        </div>)}
         
//          <br></br> <br></br>

//        <div className="buttons">
//             {step>1 && <button onClick={prevStep}>Previous</button>}{' '}
//             {step<3 && <button onClick={nextStep}>Next</button>}
//             {step==3 && <button onClick={handleSubmit}>Submit</button>}
//        </div>

//       </div>
       
//   </>)
// }






import React from "react";
const MultiStepForm = ({
  data,
  onChange,
  step,
  handlePrevious,
  handleNext,
  title,
}) => {
  const [input1, input2] = data[step];
  return (
    <form>
      <h3>{title}</h3>
      <div id="step1">
        {step + 1 === 1 && (
          <>
            <div className="input-div">
              <label htmlFor={input1.id}>{input1.label}:</label>
              <br />
              <input
                type={input1.type}
                id={input1.id}
                name={input1.name}
                onChange={(e) => onChange(e.target.value, 0)}
                value={input1.value}
              />
              <div>
                {input1.error && <p className="error">{input1.error}</p>}
              </div>
            </div>
            <div className="input-div">
              <label htmlFor={input2.id}>{input2.label}:</label>
              <br />
              <input
                type={input2.type}
                id={input2.id}
                name={input2.name}
                onChange={(e) => onChange(e.target.value, 1)}
                value={input2.value}
              />
              <div>
                {input2.error && <p className="error">{input2.error}</p>}
              </div>
            </div>
            <div className="buttons">
              <button type="button" onClick={handleNext}>
                Next
              </button>
            </div>
          </>
        )}
      </div>
      <div id="step2">
        {step + 1 === 2 && (
          <>
            <div className="input-div">
              <label htmlFor={input1.id}>{input1.label}:</label>
              <br />
              <input
                type={input1.type}
                id={input1.id}
                name={input1.name}
                onChange={(e) => onChange(e.target.value, 0)}
                value={input1.value}
              />
              <div>
                {input1.error && <p className="error">{input1.error}</p>}
              </div>
            </div>
            <div className="input-div">
              <label htmlFor={input2.id}>{input2.label}:</label>
              <br />
              <input
                type={input2.type}
                id={input2.id}
                name={input2.name}
                onChange={(e) => onChange(e.target.value, 1)}
                value={input2.value}
              />
              <div>
                {input2.error && <p className="error">{input2.error}</p>}
              </div>
            </div>
            <div className="buttons">
              <button type="button" onClick={handlePrevious}>
                Previous
              </button>

              <button type="button" onClick={handleNext}>
                Next
              </button>
            </div>
          </>
        )}
      </div>
      <div id="step3">
        {step + 1 === 3 && (
          <>
            <div className="input-div">
              <label htmlFor={input1.id}>{input1.label}:</label>
              <br />
              <input
                type={input1.type}
                id={input1.id}
                name={input1.name}
                onChange={(e) => onChange(e.target.value, 0)}
                value={input1.value}
              />
              <div>
                {input1.error && <p className="error">{input1.error}</p>}
              </div>
            </div>
            <div className="input-div">
              <label htmlFor={input2.id}>{input2.label}:</label>
              <br />
              <input
                type={input2.type}
                id={input2.id}
                name={input2.name}
                onChange={(e) => onChange(e.target.value, 1)}
                value={input2.value}
              />
              <div>
                {input2.error && <p className="error">{input2.error}</p>}
              </div>
            </div>
            <div className="buttons">
              <button type="button" onClick={handlePrevious}>
                Previous
              </button>

              <button type="button">Submit</button>
            </div>
          </>
        )}
      </div>
    </form>
  );
};

export default MultiStepForm;