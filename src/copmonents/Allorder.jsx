import React, { useEffect, useState } from 'react'
import Axios from "axios"

function Allorder() {
  
  const [users, setusers]=useState([])
 const[num,setnum]=useState(0+1)
  useEffect(()=>{
     Axios.get("http://localhost:3004/users")
  .then (res=>{
setusers(res.data);
  }) 
  },[]);
  const creat =()=>{


  }
  return (
 <>
 
 {users.map(user =>{
return(
<div key={users.id}>
  <ul>
    <li>{ num  }</li>
<li>Patient Name:{user. Patientname}</li>
<li>Age: {user.Age}</li>
<li>Six:{ user.six}</li>
<li>Number of Teeth:{ user.numberofteeth*30}</li>
<li>Tooth Color:{user.Toothcolor}</li>
<li>Type:{user.tayp}</li>
<li>Note:{user.note}</li>


</ul>

</div>





)





 })}
 <div>



 </div>
 
 
 </>
  )
}

export default Allorder