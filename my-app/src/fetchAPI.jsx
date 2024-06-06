import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
const Albums = () =>{

    const [data, setData]=useState([]);

    const fetchAPI = async () =>{
        const resp = await fetch('https://jsonplaceholder.typicode.com/albums')
        const data = await resp.json()
        console.log(resp);

        setData(data);
    }

    useEffect(()=>{
        fetchAPI()
    },[])

    return (
        <div>
            <h4>&times; Albumsccccasdasa &times;</h4>
            <ol>
                {data.map((albums)=>{
                    return (
                        <li key={albums.id}>
                            {albums.title}
                        </li>
                    )
                })}
            </ol>
            
        </div>
    )

}

export default Albums