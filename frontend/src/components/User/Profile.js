import React , {Fragment, useEffect} from 'react'
import './Profile.css';
import { useSelector } from 'react-redux';
import Header from '../Header/Header';
import Loader from '../Loader/loader';
import MetaData from '../MetaData';
import {Link} from 'react-router-dom';

const Profile = ({ history }) => {

    const {user, isAuthenticated, loading} = useSelector((state)=> state.user);

    useEffect(() => {
      if(isAuthenticated === false){
        history.push("/account/login");
      }
    })
  return (
    <div>
      <Header />
     <Fragment>
       {loading ? (
         <Loader />
       ) : (
         <Fragment>
           <MetaData title={`${user.name}'s Profile`}/>
           <div className='profileContainer'>
             <div>
               <h1>My Profile</h1>
               <img></img>
               <Link to="/">Update Profile</Link>
             </div>
             <div>
               <h4>Email</h4>
               <p>{user.email}</p>
             </div>
             <div>
               <h4>Joined On</h4>
               <p>{String(user.createdAt).substring(0,10)}</p>
             </div>
           </div>
         </Fragment>
       )}
     </Fragment>
    </div>

  )
}

export default Profile