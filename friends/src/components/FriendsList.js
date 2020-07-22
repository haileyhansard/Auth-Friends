import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

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
    }) ;

    return (
        <div>
            Friends List is Here!
        </div>
    )
    
}

export default FriendsList;