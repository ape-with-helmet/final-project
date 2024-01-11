//import { get } from "mongoose";
import React, { useEffect, useState, useRef } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import './Profilepage.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar'

const auth = localStorage.getItem('loginData');

function AddProduct() {
    const [admin, setAdmin] = useState(false);

    useEffect(()=>{     
        submit();
    })
    let submit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:8080/userFind", {
                auth
            })
            console.log("first")
            setAdmin(response.data.admin)
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        entering stuff
                    </div>
                    <div className="col-6">

                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProduct