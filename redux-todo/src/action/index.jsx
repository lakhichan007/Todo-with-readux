export const AddTodo=(data)=>{
    return{
        type:"Addnew",
        payload:{
            data:data,
            id:new Date().getTime().toString()
        }
    }
}

export const DeleteOne=(id)=>{
    return{
        type:"Delete",
        id
    }

}
export const ClearAll=()=>{
    return{
        type:"ClearAll"
    }
}