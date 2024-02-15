import PropTypes from 'prop-types';
import { useState } from 'react';

const Checkoutstepper = ({ stepsconfig = [] }) => {
const[currentStep,setCurrentstep]=useState(1);
const[isComplete,setIsComplete]=useState(false);

    if(!stepsconfig.length){
        return <></>
    }
    const handleNext=()=>{ 
        setCurrentstep((prevStep)=>{
            if(prevStep===stepsconfig.length){
                setIsComplete(true);
                return prevStep;
            }else{
                return prevStep+1;
            }
        })
    };
    const ActiveComponent = stepsconfig[currentStep - 1]?.Components;
  return (
    <>
    <div className='stepper'>
      {stepsconfig.map((step, index) => {
        return (
          <div key={step.name} 
          className={`step ${currentStep>index+1||isComplete?"complete":""} ${currentStep===index+1?"active":""}`}>
            <div className='step-number'>{currentStep>index + 1||isComplete?(<span>&#10003;</span>):(index+1)}</div>
            <div className='step-name'>{step.name}</div>
          </div>
        );
      })}

      <div className='progress-bar'>
        <div className='progress'></div>
      </div>
    </div>

    {ActiveComponent && <ActiveComponent />}
    
    {!isComplete&&(
    <button className='btn' onClick={handleNext}>{currentStep===stepsconfig.length?"Finish":"Next"}</button>)}
    </>
  );
};

Checkoutstepper.propTypes = {
  stepsconfig: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      Components: PropTypes.func.isRequired
    }).isRequired
  ).isRequired
};

export default Checkoutstepper;
