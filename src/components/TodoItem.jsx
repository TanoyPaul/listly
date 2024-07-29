import React from 'react';
import green_tick from '../public/green-tick.webp';
import trash from '../public/delete.png'
import unchecked from '../public/unchecked.png'

function TodoItem({todo, id, isComplete, deleteTodo, toggle }) {
  return (
    <>
    <div className='flex justify-between items-center bg-[#FEFEFE] py-4 px-6 rounded-md'>
        <div onClick={() => {toggle(id)}} className='cursor-pointer w-full flex justify-start gap-8'>
        <img src={isComplete ? green_tick : unchecked} alt="" className='w-7 cursor-pointer rounded-full'/>
        <p className={`text-xl ${isComplete ? "line-through" : ""}`}>{todo}</p>
        </div>
        <img onClick={() => {deleteTodo(id)}} src={trash} alt="" className='w-6 cursor-pointer'/>
    </div>
    </>
  );
}

export default TodoItem;
