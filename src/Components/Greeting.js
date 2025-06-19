

const Greeting = () => {
    const greetingHours = new Date().getHours();
    let greetingMsg='';
    if(greetingHours >= 6 && greetingHours < 12){
      greetingMsg ='상쾌한 아침입니다!'
    }else if(greetingHours >= 12 && greetingHours < 18){
      greetingMsg ='기분 좋은 오후입니다!'
    }else{
      greetingMsg ='편안한 저녁입니다!'
    };
    
  return (
    <h2>
      {greetingMsg}
    </h2>
  );
};

export default Greeting;