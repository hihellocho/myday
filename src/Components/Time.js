import { useEffect, useState } from "react";

const Time = () => {
  const [time, setTime]=useState(new Date());
  useEffect(()=>{
    const intervalID = setInterval(()=>{
      setTime(new Date());
    }, 1000);
    const closeEffect = ()=>{
      clearInterval(intervalID);
    }
    return closeEffect;
  },[]);
  return (
    <div className="time">
      {time.toLocaleTimeString('en-US',{
        hour: '2-digit',
        minute :'2-digit',
        second : '2-digit',
        hour24: true
      })}
      {/* {time.toLocaleTimeString('ko-KR',{
        hour: '2-digit',
        minute :'2-digit',
        second : '2-digit',
        hour24: true
      })} */}
    </div>
  );
};

export default Time;