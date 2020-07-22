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
const initialFriend = {
    name: " ", 
    age: " ", 
    email: " "
}

const FriendForm = (props) => {
    const [friendData, setFriendData] = useState(initialFriend);
    
    const handleChange = e => {
        setFriendData({
            ...friendData, [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("/api/friends", friendData)
            .then(res => {
                props.updateFriends(res.data)
                setFriendData(initialFriend)
            })
            .catch(err => {
                console.log('Error', err)
            })
    }

    return (
        <>
            <h2>Add a Friend!</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="name"
                    value={friendData.name}
                    onChange={handleChange}
                    placeholder="Name..."
                />
                <input 
                    type="number"
                    name="age"
                    value={friendData.age}
                    onChange={handleChange}
                    placeholder="Age..."
                />
                <input
                    type="email"
                    name="email"
                    value={friendData.email}
                    onChange={handleChange} 
                    placeholder="Email..."
                />
                <button>Submit</button>
            </form>
        </>
    )
};

export default FriendForm;