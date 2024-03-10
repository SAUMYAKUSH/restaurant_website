import React, { useEffect, useState } from 'react'

function User({name}) {
    const[userInfo, setUserInfo] = useState(
        {
            login:"Dummy",
            location:"Default",
              
        }
    )
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData= async()=>{
        const data = await fetch("https://api.github.com/users/SAUMYAKUSH");
        const json = await data.json();
        
        setUserInfo(json)
    }
    // console.log(userInfo)
     const {login,location,avatar_url} = userInfo
  return (
    <div className='user-card'>
        <img src={avatar_url}/>
        <h2>Name: {login}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: saumyakushwaha803@gmail.com </h4>

    </div>
  )
}

export default User