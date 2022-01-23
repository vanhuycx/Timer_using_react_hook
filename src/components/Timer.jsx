import React,{useEffect, useState} from 'react';
import './timer.css'
const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    
    const toggle = () => {
      setIsActive(!isActive)
    };

    const reset = () => {
      setSeconds(0)
      setIsActive(false)
    };
    

    useEffect(() => {
        let interval = null
        if (isActive){
            interval = setInterval(()=> {
                setSeconds((seconds)=> seconds+1)
            },1000)
          
        }
        return () => clearInterval(interval);
    }, [isActive,seconds]);

    
    return (
        <div className="app">
          <div className="time">
            {seconds}s
          </div>
          <div className="row">
            <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
              {isActive ? 'Pause' : 'Start'}
            </button>
            <button className="button" onClick={reset}>
              Reset
            </button>
          </div>
        </div>
      );
    
};

export default Timer;
