import { use, useEffect, useState } from "react";
import Quote from "./Quote";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";

const MainPage = ({user, onLogout}) => {
  const TODOS_KEY = "todos";
  const [todos, setTodos]=useState([]);
  //처음에 localstorage에 저장된 todos 값이 있으면 읽어와서 설정해야
  useEffect(()=>{
  const saved = localStorage.getItem(TODOS_KEY);  //문자열
  if(saved){ setTodos(JSON.parse(saved));}    //parse 문자열을-> 객체로 만듬
  },[]);

  //todos 가 변경되면 localstorage에 저장
  useEffect(()=>{
    const saved = JSON.stringify(todos);  //객체를 문자열로 만들기
    localStorage.setItem(TODOS_KEY,saved);
  },[todos]);

  const addTodo=(text)=>{
    const newTodo = {id:Date.now(), todo:text, done:false}; 
    setTodos([...todos, newTodo]);
  }
  const deleteTodo=(id)=>{
    const update = todos.filter((item)=>{
      return item.id !== id;
    });
    setTodos(update);
  }
  const toggleTodo = (id)=>{
    const update = todos.map((item)=>{
      return item.id === id ? {...item, done:!item.done} : item;
    });
    setTodos(update);
  }
  return (
    <div>
      <h2>{user}님 반가워요!</h2>
      <button onClick={onLogout}>로그아웃</button>
      <Quote />
      <TodoForm onAdd={addTodo}/>
      <TodoList todos={todos} onDelete={deleteTodo} onToggle={toggleTodo}/>
    </div>
  );
};

export default MainPage;