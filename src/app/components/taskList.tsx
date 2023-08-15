'use client'

import { useState } from "react"
import { ITask } from "../types/task"
import Task from "./task"

import { deleteTask, insertTask, updateTaskState } from "../services"

export default function TaskList(props:{list:ITask[]}) {
  const [list, setList] = useState(props.list)
  const [newTask, setNewTask] = useState<ITask>({
    id:list.length,
    title: '',
    isComplete:false,
  })

  const delete_ = (id:number) => {
    setList(deleteTask(id, list))
  }

  const updateState = (id:number) => {
    setList(updateTaskState(id, list))
  }

  const insert = (task:ITask) => {
    setList(insertTask(task, list))
  }

  return (
      <div className="w-[30%] rounded-lg shadow-lg shadow-sky-200 p-4">
        <header className="group/input">
          <div className="flex justify-between">
            <input
              onChange={(e) => setNewTask({...newTask, title:e.target.value})}
              className="text-2xl cursor-pointer w-full"
              name="title"
              type="text"
              defaultValue={'New task'}
            />
            <button
              onClick={() => setList(insertTask(newTask, list))}
              className="invisible group-hover/input:visible transition"
            >
              Add
            </button>
          </div>
          <label className="text-gray-400 text-sm" htmlFor="title">you can edit the title {':)'}</label>
        </header>
        <div className=" border rounded-lg divide-y-2">
          {list.map((task) => (
            <Task updateState={updateState}  delete_={delete_}  key={task.id} data={task}/>
          ))}
        </div>
        <footer></footer>
      </div>
    )
}