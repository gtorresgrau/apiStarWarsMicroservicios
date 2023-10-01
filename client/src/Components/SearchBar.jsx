import React from 'react';
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import {getCharacterByName } from '../Actions/index.js'
import Style from './Styles/Nav.module.css'


export default function SearchBar({setPage}) {

  const dispatch = useDispatch();
  const [input, setInput] = useState("")

const handlerOnchange = (e) => {
  console.log(e)
  setInput(e.target.value)
};


const handleSubmit=(e) =>{
  e.preventDefault();
  setPage(1);
  dispatch(getCharacterByName(input))
  setInput('')
}

  return ( 
    <div>
      <form onSubmit={handleSubmit}>
        <input className={Style.inputS} name='input' onChange={handlerOnchange} type='text' placeholder="Character...." value={input} autoComplete='off'/>
        <input className={Style.btn} type="submit" value="SEARCH" />
      </form>
    </div>
  )
};  