import React from 'react'
import './SongPreview.css'
import songIcon from '../../../assets/songicon.png';
import {Button} from 'react-bootstrap'
function SongPreview(props) {
    return (
        <div className="song-preview">
            <img className="song-icon"src={songIcon} alt="icon-song" />
            <div className="song">
                <p>{props.title} Fetched From Link {props.duration}</p>
            </div>
            <Button className="remove-song-button" variant="primary">REMOVE</Button>
        </div>
        
    )
}

export default SongPreview