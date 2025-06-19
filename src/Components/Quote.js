//명언나오는 거 만들기

import { useEffect, useState } from "react";

const quotes =[
  "삶이 있는 한 희망은 있다.",
  "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
  "언제나 현재에 집중할 수 있다면 행복 할 것이다.",
  "진정으로 웃으려면 고통을 참아야 하며, 나아가 고통을 즐길 줄 알아야 한다.",
  "신은 용기있는자를 결코 버리지 않는다",
  "피할 수 없으면 즐겨라.",
  "먼저 핀 꽃은 먼저 진다. 남보다 먼저 공을 세우려고 조급히 서둘 것이 아니다.",
  "한번의 실패와 영원한 실패를 혼동하지 마라.",
  "계단을 밟아야 계단 위에 올라설 수 있다.",
  "1 퍼센트의 가능성, 그 것이 나의 길이다."
];

const Quote = () => {
  const [quote, setQuote]=useState('');
  // 랜덤하게 명언 추출
  // 랜덤값은 0~1 : 0~quotes.length  소수점이하는 버리고 0=0, 1은 * 곱하기로
  useEffect(()=>{
    const random =Math.floor(Math.random()*quotes.length);
    setQuote(quotes[random]);
  },[]);
  
  return (
    <div className="quote">
      오늘의 명언 : "{quote}"
    </div>
  );
};

export default Quote;