import { useState } from "react"
import {useDispatch,useSelector} from "react-redux"

import "./todos.css"
import { AddTodo,DeleteOne,ClearAll } from "../action/index"
const Todos=()=>{
    const [todo,setTodo]=useState("")
    const dispatch =useDispatch()
    const lists=useSelector((state)=>state.todoReducers.list)
    // console.log(lists)
    return(
        <>
        <div className="main-container">
            <h1 id="todo-heading">My todo list</h1>
            <div>
            <input id="new-task" type="text" placeholder="add new tasks" value={todo}
            onChange={(e)=>setTodo(e.target.value)}
            />
            <button id="add-new-btn" onClick={()=>dispatch(AddTodo(todo),setTodo(""))}>Add</button>
            </div>
            <div className="showitems">
                {lists.map(ele=>{
                    return(
                        <div className="task-box" key={ele.id}>
                            <p className="todo-item">{ele.data}</p><i id="delete-btn" className="fa fa-trash-o" aria-hidden="true" 
                            onClick={()=>dispatch(DeleteOne(ele.id))}></i>
                        </div>
                    )
                })}
            </div>
            <button onClick={()=>dispatch(ClearAll())} id="clear-all">Clear All</button>
        </div>
        </>
    )
}
export default Todos