import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";

const Following = () => {
  const [following, setFollowing] = useState([]);
  const getfollowers = JSON.parse(localStorage.getItem("followers"));
  const user = JSON.parse(sessionStorage.getItem("userlogin"));

  const url = `https://api.github.com/users/${user}/following`;

  const getFollowing = async () => {
    try {
      const { data } = await axios(url);
      setFollowing(data);

      // console.log(data);
    } catch (error) {
      console.log("İkaz!!!");
    }
  };

  useEffect(() => {
    getFollowing();
  }, []);


  const bad = getfollowers.filter((follower) =>
    follower.login.includes(following.map((item) => item))
  );
  
 console.log('bad :>> ', bad);

  console.log('following', following)

  return (
    <>
    <NavBar/>
      
       <div>
        <button >kötüler</button>
        <button>sevmediklerimiz</button>
       </div>
      <div className="main">
        {following.map((item) => {
            return (
              <div className="card">
                <img src={item?.avatar_url} alt="" />
                <h4>{item?.login}</h4>

                <a href={item?.html_url} target="_blank">
                  <button>Gel Gör Beni</button>
                </a>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Following;
