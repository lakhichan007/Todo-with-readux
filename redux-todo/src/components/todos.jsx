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
            <h1>My todo list</h1>
            <input id="new-task" type="text" placeholder="add new tasks" value={todo}
            onChange={(e)=>setTodo(e.target.value)}
            />
            <button onClick={()=>dispatch(AddTodo(todo),setTodo(""))}>add</button>
            <div className="showitems">
                {lists.map(ele=>{
                    return(
                        <div key={ele.id}>
                            <p>{ele.data}</p><i className="fa fa-trash-o" aria-hidden="true" 
                            onClick={()=>dispatch(DeleteOne(ele.id))}></i>
                        </div>
                    )
                })}
            </div>
            <button onClick={()=>dispatch(ClearAll)} id="clear-all">Clear All</button>
        </div>
        </>
    )
}
export default Todos