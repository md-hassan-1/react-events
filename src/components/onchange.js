// import './App.css';
import React from 'react'
import {useState} from 'react'


export default function Onchange(){

    let [country,Setcountry] = useState('india')
    console.log(country)
    let eventhandel = (e) =>{
        Setcountry(e.target.value)
    }


    let[skills,setskills]=useState(["photoshope"])
    let handelevent=(e)=>{
        let value = e.target.value
        let checked = e.target.checked
        if(checked){
            setskills([...skills,value])
        }else{
            setskills(skills.filter((e) => (e !==value)))

        }            
    }
    let [gender,setgander]=useState('')
    let  handelradio = (e)=>{
        let value = e.target.value
        setgander(value)
    }
  return (
    <div>
        <h1 >{country}</h1>
        <select onChange={eventhandel} >
            <option value={""}>india</option>
            <option value={"japan"}>japan</option>
            <option value={"america"}>america</option>
            <option value={"nepal"}>nepal</option>
            <option value={"pakistan"}>pakistan</option> 
            <option value={"unite state"}>unite state</option>
            <option value={"koriya"}>koriya</option>
        </select>

        <hr/>
    <h1>{skills.join(", ")}</h1>
   
        <ul>
            <li>
                <label><input type='checkbox' value={"html"} onChange={handelevent}/>html</label>
            </li>          
            <li>
                <label><input  type='checkbox' value={"css"}onChange={handelevent}/>css</label>
            </li>
            <li>
                <label><input type='checkbox' value={"javasript"} onChange={handelevent}/>javasript</label>
            </li>
            <li>
                <label><input type='checkbox' value={"bootstrap"}  onChange={handelevent} />bootstrap</label>
            </li>
            <li>
                <label><input type='checkbox' value={"jQuery"} onChange={handelevent}/>jQuery</label>
            </li>
            <li>
                <label><input type='checkbox' value={"react"} onChange={handelevent}/>react</label>
            </li>
        </ul>

        <hr/>

        <h1>{gender}</h1>

       <label><input type='radio' value={'male'} name='gander' onChange={handelradio}/>male</label> 
       <label><input type='radio' value={'female'} name='gander'onChange={handelradio}/>female</label> 
    </div>
  )
}
