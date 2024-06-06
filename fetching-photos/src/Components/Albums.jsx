import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'

const Albums = () =>{

    const [albums, setAlbums]=useState([])

    const fetchAlbums = async () =>{
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/albums');
            const data = await response.json()
            console.log('Data', data)
            setAlbums(data)
            
        }catch(e){
            console.log('Fetch Error :: ', e)
        }
    }

    useEffect(()=>{
        fetchAlbums()
    },[])

    
    return (
        <div>
           <center> <h1>&times;Albums &times;</h1></center>
            <ol>
                {albums.map((album)=>{
                    return (
                        <li key={album.id}>
                            <Link to={`/photos/${album.id}`}>{album.title}</Link>
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}

export default Albums