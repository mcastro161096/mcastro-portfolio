import React from 'react';
import Avatar from '@mui/material/Avatar';
import avatar from '../../static/images/avatar/avatar.jpg';

function Home() {
    return (
        <div>
            <Avatar alt="Matheus Castro" src={avatar} sx={{width:200, height:200, position:"revert"}}  />

            <p>teste</p>
        </div>
    );
}

export default Home;