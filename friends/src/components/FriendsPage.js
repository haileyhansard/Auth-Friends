import React, {useState, useEffect} from 'react';

import FriendForm from './FriendForm';
import FriendsList from './FriendsList';
import { axiosWithAuth } from '../utils/axiosWithAuth';


export default function FriendsPage(){
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/friends")
      .then(res => {
        setFriends(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <FriendForm updateFriends={setFriends} />
      <FriendsList friends={friends}/>
    </>
  )
};