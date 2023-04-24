import styles from './ListItem.module.css'
import { Trash } from 'phosphor-react'
import { Item } from '../../types/Item'
import { useState } from 'react'


type Props = {
  item: Item;
  onDelete:(taskId: string) => void,
  onChange:(id: number, isCompleted: boolean) => void
}

export const ListItem = ({item, onDelete, onChange}:Props) =>{

  
  return(<>

    <div className={styles.list}>
     <input 
     type='checkbox' 
     checked={item.isCompleted} 
     onChange={e => onChange(item.id, e.target.checked)}
     className={styles.checkContainer}>
     
      
     
    </input>
  <p className={item.isCompleted ? styles.done : styles.toDone}>{item.title}</p>

    <button onClick={()=> onDelete(item.title)} className={styles.deleteButton}><Trash size={20}/></button>

</div> </>)
}