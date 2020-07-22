import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

// Create a form to collect data for a new friend
// Make a POST request to add a friend to the database
// Each friend item that is in the friends array should have the following format:
// {
//     id: 1,
//     name: 'Joe',
//     age: 24,
//     email: 'joe@lambdaschool.com'
// }

const FriendForm = ({friends, setFriends}) => {
    const [addFriend, setAddFriend] = useState({ name: "", age: "", email: ""});

    const submitFriend = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("/api/friends", addFriend)
            .then(res => setAddFriend(res.data))
            .catch(err => console.log(err))

            setAddFriend({name: "", age: "", email: ""});
    }

    const handleChange = e => {
        setAddFriend({
            ...addFriend,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <form onSubmit={submitFriend}>
            <input 
                type="text"
                name="name"
                placeholder="Name..."
                value={addFriend.name}
                onChange={handleChange}
            />
            <input 
                type="text"
                name="age"
                placeholder="Age..."
                value={addFriend.age}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                placeholder="Email..."
                value={addFriend.email}
                onChange={handleChange} 
            />
            <button>Submit</button>
        </form>
    )

};

export default FriendForm;