import React, { useEffect, useState } from 'react'
import Axios from "axios"

function Neworder() {
    const [users, setusers]=useState([])
    const [Patientname , setPatientname]=useState("")
    const [Age, setAge]=useState("")
    const [six, setsix]=useState("")
    const [numberofteeth, setnumberofteeth]=useState("")
    const [Toothcolor, setToothcolor]=useState("")
    const [tayp, settayp]=useState("")
    const [note, setnote]=useState("")
  


useEffect(()=>{
    Axios.get("http://localhost:3004/users")
 .then (res=>{
setusers(res.data)
 })},[])
 


const creat =()=>{
if( Patientname &&  Age  &&   six   &&    numberofteeth  &&   Toothcolor &&   tayp &&   note  ){



    Axios.post("http://localhost:3004/creat" ,{
        Patientname:Patientname,
        Age :Age,
        six :six,
        numberofteeth:numberofteeth,
        Toothcolor:Toothcolor,
        tayp :tayp,
        note :note })
  .then(res=> res.data) 
   }
 
}
  return (
 
   <div>   

<form >


<div className='col-md-6'>
                    <label  className="form-label" >Patient name</label>
                    <input type="text"  className="form-control  "onChange={e=>setPatientname (e.target.value)} id="validationDefault01" 
                     required />
                </div>

                <div className ='col-md-6'>
                    <label className="form-label ">Age</label>
                    <input type="text" className="form-control " onChange={e=>setAge (e.target.value)} id="validationDefault01" placeholder="age"
                         required />
                </div>
                <div className="mb-3 col-md-6">
            <label  className="form-label ">six</label>
            <select className="form-select form-select- mb-3 col-md-6 "onChange={e=>setsix (e.target.value)}>
          
                <option value="."></option>
                <option value="man">man</option>
                <option value="wman">wman</option>
            </select>
        </div>
        <div className="mb-3 col-md-6">
            <label  className="form-label "> number of teeth</label>
            <input type="text"  className="form-control  "  onChange={e=>setnumberofteeth (e.target.value)}id="Thenumberofteeth"
                placeholder="The number of teeth" />
        </div>
        <div className="mb-3 col-md-6">
            <label  className="form-label ">Toothcolor</label>
            <select  className="form-select " onChange={e=>setToothcolor (e.target.value)} aria-label="Default select example">
            <option value=""></option>
                <option value="A1">A1</option>
                <option value="A2">A2</option>
                <option value="A3">A3</option>
                <option value="A3,5">A3,5</option>
                <option value="A4">A4</option>
                <option value="B1">B1</option>
                <option value="B2">B2</option>
                <option value="B3">B3</option>
                <option value="B4">B4</option>
                <option value="C1">C1</option>
                <option value="C1">C1</option>
                <option value="C2">C2</option>
                <option value="C3">C3</option>
                <option value="C4">C4</option>
                <option value="D2">D2</option>
                <option value="D3">D3</option>
                <option value="D4">D4</option>
                <option value="BL1">BL1</option>
                <option value="BL2">BL2</option>
                <option value="BL3">BL3</option>
                <option value="BL4">BL4</option>
            </select>
        </div>
        <div className="mb-3 col-md-6">
            <label  className="form-label ">tayp</label>
            <select  className="form-select "onChange={e=>settayp (e.target.value)} aria-label="Default select example">
            <option value=""></option>
                <option value="VENEERS">VENEERS</option>
                <option value="ZIRCON">ZIRCON</option>
                <option value="P.F.M">P.F.M</option>
                <option value="IMPLAUT">IMPLAUT</option></select>
        </div>
        <div>
        <label  className="form-label ">note</label>
        <textarea className="form-control mt-5 " placeholder="Leave a comment here"id="floatingTextarea" onChange={e=>setnote (e.target.value)}></textarea>
    </div>   
    <button type="submit" className="btn btn-primary"onClick={creat}>send</button>
</form>



   </div>
  )
}

export default Neworder