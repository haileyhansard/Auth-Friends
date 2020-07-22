import React from 'react';

const FriendsList = ({friends}) => {
    return (
        <div className="friends-list">
            {friends.map(friend => {
                return (
                    <div key={friend.id}>
                        <h3>{friend.name}</h3>
                        <p>{friend.age}</p>
                        <p>{friend.email}</p>
                    </div>
                )
            })}
        </div>
    )
};

export default FriendsList;