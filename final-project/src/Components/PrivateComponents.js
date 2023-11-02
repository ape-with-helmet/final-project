import React from 'react'
import { Navigate, Outlet } from "react-router-dom";

function redir() {
  
}

const auth = () => {
  const authority = localStorage.getItem('loginData');
  console.log(authority)
  return authority ? <Outlet/> : <Navigate to = 'login'/>
}

export default auth