import React, { useState,useEffect } from 'react'
import axios from 'axios'

export default function Profile() {

    const [user,setUser] = useState("None")

        useEffect(()=>{
            axios
            .get("http://localhost:8080/getall")
            .then((res)=>setUser(res.data));
        },[user]);

  return (
    <>
        <h1>Demo</h1>
        {user.map((post)=>{
            const {_id,email,password,mobile}=post;
            return(     
            <div className='card' key={_id}>
                <h2>{email}</h2>
                <h2>{password}</h2>
                <h2>{mobile}</h2>
            </div>
            )
        })}    
    </>
  )
}
