import React from 'react';

function UserCard (props) {
  const {user} = props;
  return (
    <div>
      <img src={user.profilePicture} alt=""/>
    </div>
  );
}

export default UserCard;

