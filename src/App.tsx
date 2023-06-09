import styles from './App.module.css'
import './global.css'
import { Header } from './Components/Header'
import { Task } from './Task'
import { useEffect, useState } from 'react'
import { Item } from './types/Item'
import { ListItem } from './Components/ListItem'



const App = () =>{

  const LOCAL_STORAGE_KEY = "todo:savedTasks"
  const [list, setList] = useState<Item[]>([
   
  ]);

  function loadLocalStorage(){
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(saved){
      setList(JSON.parse(saved))
    }
  }

  useEffect(()=> {
    loadLocalStorage();
  },[])
  const handleAddTask = (taskTitle:string) =>{
    let newList = [...list];
    newList.push({
      id:list.length +1,
      title: taskTitle,
      isCompleted:false
    })
    setTaskAndSave(newList)
  }


  function setTaskAndSave(newTasks: Item[]){
    setList(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks))
  }
 

  function deleteTask(taskTitle: string){
    const newTasks = list.filter((task)=> task.title !== taskTitle)
    setTaskAndSave(newTasks)
  }

  function handleTaskChange(id: number, isCompleted: boolean){
    let newList = [...list]
    for( let i in newList){
      if(newList[i].id === id){
        newList[i].isCompleted = isCompleted      }
    }setTaskAndSave(newList)
  }


  return (
    <div>
  <Header onSubmit={handleAddTask}/>
   <div className={styles.wraper}></div>
<Task item={list}/>
    
<main >

 {list.map((item)=>(
  
   <ListItem 
   onDelete={deleteTask}
    key={item.id} 
    item={item}
    onChange={handleTaskChange}/>
 ))}
</main>
    </div>
  
  )
}

export default App

