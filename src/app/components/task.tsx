import { ITask } from "../types/task"

interface TaskProps {
  data: ITask,
  delete_: (id:number) => void,
  updateState: (id:number) => void,
}

export default function Task(props:TaskProps) {
  return(
    <li className="flex px-2 place-items-center">
      <div className="flex justify-between place-items-center w-full">
        <span>{props.data.title}</span>
        <span
          className={`cursor-pointer text-${props.data.isComplete? 'green-400' : 'red-400'}`}
          onClick={() => props.updateState(props.data.id)}
        >{props.data.isComplete ? ":)" : ":|"}</span>
      </div>
      <button className="p-2"onClick={() => props.delete_(props.data.id)}>X</button>
    </li>
  )
}