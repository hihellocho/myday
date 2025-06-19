import { useEffect, useState } from "react";
import "./App.scss";
import LoginForm from "./Components/LoginForm.js";
import Time from "./Components/Time.js";
import MainPage from "./Components/MainPage.js";
import Weather from "./Components/Weather.js";

// import bgImg from "./images/img-01.png";

const App = () => {
  const USER_KEY="user_name";
  const [user, setUser]=useState('');
  // 처음에 시작하자마자 user_name을 읽어와야 함
  useEffect(()=>{
    const saved = localStorage.getItem(USER_KEY);
    if(saved){ setUser(saved); }},[]);

  const handleLogin=(data)=>{
    localStorage.setItem(USER_KEY,data);
    setUser(data);
  }
  const handleLogout =()=>{
    localStorage.removeItem(USER_KEY);
    setUser('');
  }
  return (
    <div className="app">
      {/* <img src="./images/img-02.jpeg" alt="이미지2"/> */}
      {/* <img src={`${process.env.PUBLIC_URL}/images/img-02.jpeg`} alt="이미지2" /> */}
      {/* <img src={bgImg} alt="이미지1" /> */}
      {/* <ImageRandom /> */}
      <Weather />
      <Time />
      {
        user ? 
        (<MainPage
          user={user}
          onLogout={handleLogout}/>) : (<LoginForm onLogin={handleLogin}/>)
      }
    </div>
  );
};

export default App;