import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutInitiate } from '../redux/actions';
import { Link} from "react-router-dom";



const Home = () => {

  
  const {currentUser} = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleAuth = () =>{
    if(currentUser){
      dispatch(logoutInitiate());
    }
  }

 

  return (
    <div> 
       <h2>Welcome to Our Site</h2>
       <br />
       <Link to="/login">
       <button className='btn btn-danger' onClick={handleAuth}>Logout</button>
       </Link>     
    </div>
  )
}

export default Home
