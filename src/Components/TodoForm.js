import { useState } from "react";


const TodoForm = ({onAdd}) => {
  const [task, setTask]=useState('');
  const handleSubmit=(e)=>{
    e.preventDefault();
    const trimed=task.trim();
    if(trimed){
      //할일(-> 배열로 만들거야) 텍스트를 mainpage(부모)에 전달
    onAdd(task);
    setTask('');  // 인풋에 value값을 ''빈값으로 만들어서 엔터->값 사라지게.
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
      type="text"
      value={task}
      onChange={(e)=>{setTask(e.target.value)}}
      placeholder="할일을 입력하세요"
      />
      <button type="submit">추가</button>
    </form>
  );
};

export default TodoForm;