import {useState, useEffect} from 'react'

const FetchAPI = () =>{

    const [photos, setPhotos] =useState([]);
    const [loading, setLoading]=useState(true);

    const fetchAPI = async () =>{
        const resp = await fetch('https://jsonplaceholder.typicode.com/photos');
        const data = await resp.json();
        setPhotos(data)
        setLoading(false)
    }

    useEffect(()=>{
        fetchAPI()
    },[])

    return(
        <div>
            {loading?<center><p>Loading...</p></center>:
                (photos.map((photo)=>{
                    return (
                        <div key={photo.id} sx={{display: 'flex'}}>
                            <p>{photo.title}</p>
                            <img alt={photo.title} width='100px' height='100px' src={photo.url} />
                        </div>
                    )
                }))
            }
        </div>
    )
}

export default FetchAPI