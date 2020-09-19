import React from 'react';
import './styles/swipebuttons.css'
import ReplayIcon from '@material-ui/icons/Replay'
import CloseIcon from '@material-ui/icons/Close'
import StartRateIcon from '@material-ui/icons/StarRate'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FlashOnIcon from '@material-ui/icons/FlashOn'
import IconButton from '@material-ui/core/IconButton'

export default function SwipeButtons() {

    return <div className="swipebuttonscontainer"  >
        <IconButton>
            <ReplayIcon fontSize="large" className="swipebutton_repeat" />
        </IconButton>
        <IconButton>
            <CloseIcon fontSize="large" className="swipebutton_close" />
        </IconButton>
        <IconButton>
            <StartRateIcon fontSize="large" className="swipebutton_startrate" />
        </IconButton>
        <IconButton>
            <FavoriteIcon fontSize="large" className="swipebutton_favorite" />
        </IconButton>
        <IconButton>
            <FlashOnIcon fontSize="large" className="swipebutton_flashon" />
        </IconButton>
    </div>
}


