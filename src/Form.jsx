import React from 'react';
import {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

const Form=()=>{
    const [UserName,setUserName]=useState("")
    const [newuserDetails,setnewuserDetails] = useState("")
    const notify = () => toast("submitted successfully");
    const getUserName=(event)=>{
        setUserName(event.target.value)

        }
    const userDetails=()=>{
        setnewuserDetails(UserName)
        notify();
        }

    return(
        <>
        <section className="FormSection">
        <div className="Input">
            <h3>{newuserDetails}</h3>
            <ToastContainer/>
            <input typr="text" placeholder="Enter your name.." onChange={getUserName}/>
            <br/><br/>
            <button onClick={userDetails}>Submit</button><br/><br/>
            </div>
            </section>
            </>
            )
    }
export default Form;