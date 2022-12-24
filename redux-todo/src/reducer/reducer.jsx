
const initialData={
    list:[]
}
const todoReducers=(state=initialData,action)=>{
    switch(action.type){
        case "Addnew":
            const {id,data}=action.payload;
             return{
                ...state,
                list:[...state.list,{
                    data,
                    id
                }]
             }

        case "Delete":
            const newList=state.list.filter((ele)=>ele.id!=action.id) 
            
                return{
                    ...state,
                    list:newList
                }
        
        case "ClearAll":

        return{
            ...state,
            list:[]
        }
        default:return state     
    }
}
export default todoReducers