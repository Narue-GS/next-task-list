import { ITask } from "../types/task";
import TaskList from "./taskList";

export default function TaskContainer() {
  const req:ITask[] = [
    {id:0,title:"task", isComplete:false},
    {id:1,title:"task", isComplete:false},
    {id:2,title:"task", isComplete:false},
  ]
  return (
      <section className="flex justify-center pt-20">
        <TaskList list={req}/> 
      </section>
    )
}