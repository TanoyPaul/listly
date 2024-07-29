import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import icon from "../public/todolist.webp";
import { useRef } from "react";
import { useState } from "react";
// Till 43 mins 🙌
function TodoApp() {
  const [todos, setTodos] = useState(localStorage.getItem("TodoList") ? JSON.parse(localStorage.getItem("TodoList")) : []);
  const inputRef = useRef();
  const add = () => {
    const inputTodo = inputRef.current.value.trim();
    if(inputTodo === "" ){
      inputRef.current.placeholder = "Please enter a todo to get it ...";
      return null;
    }
    // About each todo
    const newTodo = {
      id: Date.now(),
      text: inputTodo,
      isComplete: false
    };
    setTodos(
      (prevTodo) => [...prevTodo, newTodo]

    )
    inputRef.current.value = "";
  };
  const deleteTodo = (id)=> {
    let newTodoList = todos.filter(
      (todo) => todo.id !== id
    )
    setTodos(newTodoList)
  }
  const toggleTask = (id) => {
    setTodos(
      (prevTodos) => {
        return prevTodos.map(
          (todo) => {
            if(todo.id === id){
              return {...todo, isComplete: !todo.isComplete}
            }
            return todo
          }
        )
      }
    )
  }
// Local Storage
  useEffect(
    () => {
      localStorage.setItem("TodoList", JSON.stringify(todos));
    }, [todos]
  )

  // Alternative Method

  // const deleteTodo = (id)=> {
  //   setTodos(
  //     (prevTodos) => {
  //       return prevTodos.filter(
  //         (todo) => todo.id !== id
  //       )
  //     }
  //   )
  // }

  
  return (
    <>
      <div className="header ">
        <div className="heading flex items-center justify-between gap-12">
          <img src={icon} alt="" className="md:w-20 md:h-20 w-12 h-12 object-cover object-center rounded-md" />
          <h2 className=" text-3xl font-semibold text-[#5FD15F] shadow-xl w-full py-8 flex justify-center">ListlY</h2>
          <img src={icon} alt="" className="md:w-20 md:h-20 w-12 h-12 object-cover object-center rounded-md" />
        </div>
        <div className="inputBox w-full py-8 flex justify-around lg:justify-center md:gap-16 gap-4">
          <input
            ref={inputRef}
            type="search"
            className="lg:w-[50%] w-[80%] px-6 py-3 border-none outline-none rounded-lg"
            placeholder="Enter your todo here ..."
          />
          <button onClick={add} className="bg-[#5FD15F] text-white py-3 px-6 md:px-8 whitespace-nowrap rounded-lg hover:bg-[#44b344]">
            Add Todo
          </button>
        </div>
      </div>
      <div className=" md:my-6 border p-6 border-slate-100 flex flex-col justify-between gap-6 rounded-md">
        {
          todos.map(
            (item, index) => {
             return <TodoItem key={index} todo={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggleTask} />
             ;
            }
            
          )
        }
      </div>
    </>
  );
}

export default TodoApp;
