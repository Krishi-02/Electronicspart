import React , {useEffect} from 'react'
import './Profile.css';
import { useSelector } from 'react-redux';
import Header from '../Header/Header';

const Profile = () => {

    const {user, isAuthenticated, loading} = useSelector((state)=> state.user);
  return (
    <div>
      <Header />
      <h1>Profile</h1>
    </div>

  )
}

export default Profile