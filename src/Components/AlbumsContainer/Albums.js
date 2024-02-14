import React, {useEffect, useState} from 'react';
import {albumsService} from "../../Services/AlbumsService";
import Album from "./Album";

const Albums = () => {
    const [albums, setAlbums] = useState([])
    useEffect(() => {
        albumsService.getAll().then(({data})=>setAlbums(data))
    }, []);
    return (
        <div>
            {albums.map(album=> <Album album={album} key={album.id}/>)}
        </div>
    );
};

export default Albums;