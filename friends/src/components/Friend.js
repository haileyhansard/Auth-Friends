import React from 'react';

const Friend = ({ name, age, email, id, setFriends, friends }) => {
    setFriends(friends.filter(friend => friend.id !== id))

    return(
        <div>
            <h4>{name}</h4>
            <p>{age}</p>
            <p>{email}</p>
        </div>
    )
};

export default Friend;