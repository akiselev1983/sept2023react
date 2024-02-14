import React from 'react';

const Album = ({album}) => {
    const {userId, id, title} = album

    return (
        <div>
            <div>UserID: {userId}</div>
            <div>ID: {id}</div>
            <div>TITLE : {title}</div>
            <hr/>
        </div>
    );
};

export default Album;