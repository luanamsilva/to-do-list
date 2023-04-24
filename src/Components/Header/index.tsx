import styles from './Header.module.css'
import todologo from '../../assets/todologo.svg'
import {PlusCircle} from 'phosphor-react'
import { useState, FormEvent, ChangeEvent, InvalidEvent } from 'react'

type Props = {
  onSubmit: (taskName: string)=> void
}
export const Header = ({onSubmit}:Props) =>{
  const [newInputTask, setNewInputTask] = useState('');
  const [taskCreate, setTaskCreate] = useState([] as string[]);

  
   function handleInputNewTask (event: ChangeEvent <HTMLInputElement>){
    event.target.setCustomValidity("")
    setNewInputTask(event.target.value)
    
   
  }

  function handleInputInvalid (event: InvalidEvent <HTMLInputElement> ){
    event.target.setCustomValidity("Campo obrigatório")
  }

  function handleCreate (event: FormEvent <HTMLFormElement> ){
   event.preventDefault();
   setTaskCreate([...taskCreate, newInputTask]);
   setNewInputTask('')
   onSubmit(newInputTask)
  }
  return(
    <>
   
    <header className={styles.header}>
    <img src={todologo} alt="logo" />

 <form  className={styles.taskArea} onSubmit={handleCreate} action="">
    
    <input className={styles.inputArea} 
    type="text" 
    placeholder='Adicione uma nova tarefa' 
    value={newInputTask}
    onChange={handleInputNewTask}
    onInvalid={handleInputInvalid}
    required
    />
    <button type='submit' value="Criar" >
      Criar 
      <PlusCircle size={20}/>
      </button>
      <div>
      
      </div>
        </form> </header>
   </>)
  
}