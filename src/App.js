
import './App.css';
import React from 'react'
import UserData from './components/UserData'
import Button from '@material-ui/core/Button'
import  ButtonGroup  from '@material-ui/core/ButtonGroup'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox'

function CheckboxExample (){
  const [checked,setChecked]= React.useState(true);
  return(
    <div>
      Test
      <Checkbox  checked={checked} 
      onChange={(e)=>setChecked(e.target.checked)}
      inputProps={{
        
      }}
      disabled
      >API</Checkbox>
    </div>
  )
}

export default function App() {
  return (
    <div>
      <UserData />
     
     
    </div>
    
  )
}