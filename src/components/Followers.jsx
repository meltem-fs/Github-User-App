import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Followers = () => {
   const [followers, setFollowers] = useState([]);
  const username="meltem-fs"

  const url = `https://api.github.com/users/${username}/followers?per_page=100`;

 

  const getFollowers = async()=>{
    try {
      const { data } = await axios(url);
      console.log(data);
      setFollowers(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getFollowers();
  
  }, [])
  
  

  return (
    <div className='main'>
       {followers && followers.map((item) =>{
        return(
          <div className='card'>
             <img src={item.avatar_url} alt="" />
             <h4>{item.login} </h4>
             <a target="_blank" href={item.html_url}>
              <button>View Profile</button>
             </a>
          </div>
        )
       })}
    </div>
  )
}

export default Followers