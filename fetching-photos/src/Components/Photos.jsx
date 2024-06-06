import {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom';

const Photos = () =>{
    const {albumId}=useParams();

    console.log('useParams albumId : ',useParams())

    const [photos,setPhotos]=useState([])

    const fetchPhotos = async ()=>{
        const resp=await fetch('https://jsonplaceholder.typicode.com/photos')

        
        const data=await resp.json();
        const filteredData = data.filter((item)=> item.albumId === parseInt(albumId))
        //console.log('Data from photos : ',data)
        setPhotos(filteredData)

    }

    useEffect(()=>{
        fetchPhotos()
    },[])

    return(
        <div>
            <h1 sx={{display : 'flex'}}>Photos Of Albums : {albumId}</h1>
            <Link to='/'>Back</Link><br></br>

            {photos.map((photo)=>{
                return (
                    <img width='100px' height='100px' key={photo.id} src={photo.url} alt={photo.title} />
                )
            })}
        </div>
    )
}

export default Photos