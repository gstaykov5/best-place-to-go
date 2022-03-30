import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../features/actions/actionAuth';

const Logout = props => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(logout())
    navigate('/Home', {replace: true});
  }, [])
  
  return (
    <div></div>
  )
}

export default Logout