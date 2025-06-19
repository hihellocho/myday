import { useState } from "react";

const LoginForm = ({onLogin}) => {
  const [user, setUser]=useState('');

  const handleSubmit =(e)=>{
    e.preventDefault();
    const trimed = user.trim();
    if( trimed ){  // 빈값이 아니라면
        onLogin(user); // 부모에게 데이터 전송
        setUser('');
    }
  }
  return (
    <form onSubmit={handleSubmit} className="loginform">
      <h2>이름을 입력해 주세요</h2>
      <input type="text"
        value={user}
        onChange={(e)=>{setUser(e.target.value)}}
        />
      <button type="submit">LOGIN</button>
    </form>
  );
};

export default LoginForm;

// 이름있으면 로컬스토리지에 저장하고, 로컬스토리지에서 저장된 값 가져와야
// -> App.js에서 관리 해줘야 함
// 이름 없으면 로그인창이 나와야