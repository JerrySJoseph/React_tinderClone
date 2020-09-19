import React from 'react';
import './styles/navbar.css'
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton'
import ForumIcon from '@material-ui/icons/Forum';

export default function NavBar() {
    return <div className="header">
        <IconButton>
            <PersonIcon fontSize="large" />
        </IconButton>
        <img className="header_logo" src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" />
        <IconButton>
            <ForumIcon fontSize="large" />
        </IconButton>
    </div>
}

