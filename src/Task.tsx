import styles from './Task.module.css'
import { Item } from './types/Item'
import { Note } from 'phosphor-react'

type Props = {
  item: Item[],
}


export const Task = ({item}:Props)=>{
const tasksQuantity = item.length;

const tasksDone = item.filter((task)=> task.isCompleted).length

  return(

<div className={styles.tasksContainer}>
  <header className={styles.header}>
        <div>
           <p>Tarefas criadas</p>
           <span>{tasksQuantity}</span>
           </div>
        
        <div>
           <p>Tarefas concluídas</p>
           <span>{tasksDone} de {tasksQuantity}</span>
    </div>
  
  </header>
  {tasksQuantity <= 0 &&(
      <div className={styles.emptyTask}>
         <Note size={50}/>
         <p>Você ainda não possui tarefas cadastradas</p>
       
      </div>
    )}
</div>

  )
}