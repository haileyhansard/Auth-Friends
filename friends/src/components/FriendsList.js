import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import FriendForm from './FriendForm';
import Friend from './Friend';

const FriendsList = () => {
    const [ friends, setFriends ] = useState([]);

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
        <div className="friends-list">
            Add a Friend!
            <FriendForm friends={friends} setFriends={setFriends} />
            {friends.map(friend => {
                return <Friend {...friend} friends={friends} setFriends={setFriends} />
            })}
        </div>
    )
    
};

export default FriendsList;