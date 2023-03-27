import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SpatialAudioOffIcon from '@mui/icons-material/SpatialAudioOff';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import AlbumIcon from '@mui/icons-material/Album';

export const navbarItems = [
    {
        id: 1,
        icon: <HomeIcon />,
        name: 'Home',
        route: 'home'
    },

    {
        id: 2,
        icon: <SpatialAudioOffIcon />,
        name: 'Artists',
        route: 'artists'
    },

    {
        id: 3,
        icon: <QueueMusicIcon />,
        name: 'Songs',
        route: 'songs'
    },

    {
        id: 4,
        icon: <AlbumIcon />,
        name: 'Genres',
        route: 'genres'
    }
]