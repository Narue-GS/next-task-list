import { ITask } from "./types/task";


export function deleteTask(id:number, list:ITask[]):ITask[]{
  return list.filter(i => i.id != id)
}

export function updateTaskState(id:number, list:ITask[]) :ITask[] {
  return list.map(i => {
    i.id == id ? i.isComplete = !i.isComplete : {}
    return i
  })
}

export function insertTask(task:ITask, list:ITask[]) {
  return [...list, task]
}