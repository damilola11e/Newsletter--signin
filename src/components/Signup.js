import React, { useRef, useState } from 'react'
import desktop from '../images/desktop.svg'
import list from '../images/list.svg'
import mobile from '../images/mobile.svg'
import sucesss from '../images/success.svg'
import './Signup.css'

function Signup(){
    const [errorEmail , setErrorEmail]=useState('');
    const [isActiveError, setIsActiveErrror]=useState(false);
    const [showState,setShowState]=useState(false);
    const inputRefEmail=useRef(null);  
    
    function isvalidEmail(email){
       return /\S+@\S+\.S+\.\S+/.test(email);
    }
    const switchToSignUp=()=>{
        setShowState(false);

    }
    const currentEmailValue=()=>{
        return inputRefEmail.current.value;
    }
    const submitEmail=(event)=>{
        event.preventDefault();
                    if(inputRefEmail.current.value===''|| isvalidEmail(inputRefEmail.current.value)){;
                    setErrorEmail('valid Email is required');
                    setIsActiveErrror(true);
                    setShowState(false);
                }
                else{
                    setErrorEmail('')
                    setIsActiveErrror(false);
                    setShowState(true);
                    }
                }
    const thankState=()=>{
        return (
            <div className='container-thank'>
                <div>
               <div><img src={sucesss} alt='success'></img></div> 
               <h1>Thanks for Subscribing</h1>
                <p> A confrimation has been sent to the email <span>{currentEmailValue()}</span>. please Open it up and click on the button to confirm your subscription.</p>
                </div>
                <button onClick={switchToSignUp}> Dismiss Message</button>
            </div>
        )
    }

    const SignupState=()=>{
        return(
         <div className='container-signup'>
            <div className='side'> 
                <h1>Stay updated!</h1>
                <p> Join 60,000+ product managers receiving monthly updates on:</p>
                <div className='list-box'>
                        <div className='single-list'>
                            <img src={list}  alt='desktop'></img> 
                            <p>Produt discovry and build what matters</p>
                        </div>
                        <div className='single-list'>
                            <img src={list}  alt='desktop'></img> 
                            <p>Measuring to ensure updates are sucess</p>
                        </div>
                        <div className='single-list'>
                            <img src={list}  alt='desktop'></img> 
                            <p>and so more</p>
                        </div>
                </div>
                <div className='form'>
                        <div className='label-box'>
                        <div className='label-state' ref={inputRefEmail}>email Adrress</div>
                        <div className='error-state'>{errorEmail}</div>
                </div>
            <input
            ref={inputRefEmail}
            type='Email'
            placeholder='email@company.com'
            style={{
                borderColor: isActiveError ? 'hsl(4,100%,67%)':'',
                backgroundColor:isActiveError ? 'hsl(4,100%,67% 0.2)':'',
                color:isActiveError ?'hsl(4,100%,67%)' :'',
            }}
            />
            <button onClick={submitEmail}>Subscribe to Monthly Newsletter</button>
            </div>
            </div>
             <picture className='side'>
            <source media='(max-width:950px)' srcSet={mobile}/>
            <img src={desktop} alt='desktop'/>
            </picture>
            </div>   
        )
    }
  return (
      <div className='main' >
        {showState ? <div>{thankState()}</div> :<div>{SignupState()}</div>}
      </div>
  )
}

export default Signup;