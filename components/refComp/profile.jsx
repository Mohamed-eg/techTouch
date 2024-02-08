'use client'
import React from 'react'
import { useEffect,useState } from 'react';

const Profile = () => {
  const url = window.location.href;
  const parts = url.split('/');
  const userId = parts[parts.length - 1];
  const [user, setUserData] = useState(null);

  const fetchUsed = async (userId) => {
    console.log(userId)
    try {
      const response = await axios.get(`http://129.146.110.127:3000/gen?coll=users&id=${userId}`);
      return response.data
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };
  useEffect(()=>{
fetchUsed(userId).then((res)=>{console.log(res)
  setUserData(res)})
  },[])
  return (
    <div className='mt-[200px]'>
      {user?`hallo${userId} ${user.name}`:null}
    </div>
  )
}

export default Profile
