import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector}  from 'react-redux';
import {useNavigate, Link} from "react-router-dom";
import "./Login.css";
import { loginInitiate } from '../redux/actions';


const Login = () => {
  const [state, setState] = useState({
    email:"",
    password:"",
  });
  const {email,password} = state;
  const {currentUser} = useSelector(state => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(()=>{
    if(currentUser){
      navigate.push("/");
    }
  },[currentUser,navigate])

  
  
  const handleSubmit = (e) => {
   e.preventDefault();
   if(!email || !password){
    return;
   }
   dispatch(loginInitiate(email,password));
   setState({email:"", password:""});
  };
  const handleChange = (e) => {
    let {name,value}=e.target;
    setState({...state, [name]:value})
  };

  return (
    <div>
       <div id="logreg-forms">
        <form className='form-signin' onSubmit={handleSubmit}>
          <h1 className='h3 mb-3 font-weight-normal' style={{textAlign:"center"}}>
            LogIn
          </h1>
         
          <input type='email' id='inputEmail' className='form-control' placeholder='Email Address' name='email' onChange={handleChange} value={email} required />
          <input type='password' id='inputPassword' className='form-control' placeholder='password' name='password' onChange={handleChange} value={password} required />
          <Link to ="/" >
          <button className='btn btn-secondary btn-block' type='submit'>LogIn</button></Link> 
          <hr />
          <p>Don't have an account</p>
          <Link to="/signup">
          <button className='btn btn-primary btn-block' type='button' id="btn-signup">
             <i className='fas fa-user-plus'></i> Sign up new Account
             </button>
          </Link>
        </form>
       </div>
    </div>
  )
}

export default Login
