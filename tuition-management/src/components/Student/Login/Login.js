import React, {useContext,useRef,useState} from 'react'
import {link} from 'react-router-dom'
import './login.css';
import axios from 'axios';
import {toast} from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import logo from './gb.png';
import { Context } from 'react';

const Login =()=>{
    const navigate=useNavigate()
            const emailRef=useRef();
            const passRef=useRef();

    const {dispatch,isFetching}=useContext(Context);

const handleSubmit=async()=>{
    dispatch({type :'LOGIN_START'});
    const loginCred={
        email:emailRef.current.value,
        password:passRef.current.value,
    }
    console.log('inside submit');
}
}