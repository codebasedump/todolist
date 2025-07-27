import Todolist from './Components/Todolist';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {v4 as uuidv4} from 'uuid'
import { useEffect, useRef, useState } from 'react';

function App() {
 
  const [todolist, settodolist] = useState([]);
  const userefer = useRef();

  useEffect(() => {
   const localVal = localStorage.getItem('TODOLIST');
   if (localVal && localVal !== 'undefined') {
    settodolist(JSON.parse(localVal))
   }  
  },[])

  useEffect(() => {
    if(todolist.length > 0)
    localStorage.setItem('TODOLIST', JSON.stringify(todolist));
  },[todolist])

  const handlelist = ()=>{
      const addlist = userefer.current.value;
      const addtodolist = [...todolist];
      addtodolist.push({
        id: uuidv4(),
        desc: addlist,
        checked: false
      })
      addlist.length > 0 ? settodolist(addtodolist) : alert("Description is not added!")
      //settodolist(addtodolist);
      userefer.current.value = '';
  }

  const onchangecheckbox = (id) => {
      const addtodolist = [...todolist];
      const datachecking = addtodolist.find(todo => todo.id === id);
      datachecking.checked = !datachecking.checked
      settodolist(addtodolist)
  }

  const deletelist = () =>{
    const deletelist = [...todolist];
    const deletecheckedlist = deletelist.filter(todo => !todo.checked);
    settodolist(deletecheckedlist);
  }

  return (
    <div className="App">
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='form_listcontrol'>
              <p>{todolist.length} Total List Counts</p>
              <p>{todolist.filter((todo) => !todo.checked).length} Total Checked List Counts</p>
              <input className='form-control' ref={userefer}/>
              <button className='btn btn-success' onClick={handlelist}>Add List</button>
              <button className='btn btn-danger' onClick={deletelist}>Delete list</button>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
              <Todolist todolist={todolist} onchangecheckbox={onchangecheckbox}></Todolist>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;