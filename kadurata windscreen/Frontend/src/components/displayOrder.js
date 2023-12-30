import React,{useEffect,useState} from 'react'
import { getTodos } from "./api"


export default function DisplayOrder() {
    const [items, setItems] = useState([])

useEffect(() => {
  const fetchItems = async () => {
    const todos = await getTodos()
    setItems(todos)
  }
  fetchItems()
}, [])

console.log(items)
  return (
    <div>
      {items.map((val)=>{
        return(
        <div style={{backgroundColor:"#D1D0CE"}}> 
          <dl>    
          <dt>{val.VehicalCode}</dt>
            <dd>{val.Quantity}</dd>
            <dd>{val.ContactNum}</dd>
            <dd>{val.Address}</dd>
            <dd>{val.Service}</dd>
            </dl></div>
            )
        })}        
    </div>
  )
}
