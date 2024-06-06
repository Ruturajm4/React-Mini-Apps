import { useRef, useState, useEffect } from "react"

const Search = () =>{

    const [search, setSearch]=useState('')
    const searchRef = useRef();

   
    useEffect(()=>{
        console.log('SearchRef : ',searchRef);
        searchRef.current.focus();//focuses cursor on the textbox when page onloads initially
    },[])

    return(
        
            <section>
                <center>
                    <h1>Google</h1>
                    <div>
                        <input ref={searchRef} value={search}
                        onChange={(e)=>{
                            console.log(e.target.value)
                            setSearch(e.target.value) //takes the entered value from textbox and stores to search varaible
                           }}
                            
                            title="search"
                            name="search"
                            placeholder="Search Google" 
                        />
                        
                    </div>
                </center>
            </section>
        
    )

}
export default Search