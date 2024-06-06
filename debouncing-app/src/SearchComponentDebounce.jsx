import { useRef, useState, useEffect } from "react"

const debounce = (fn, delay) =>{

    let timeoutId

    return function(...args){
        if(timeoutId)
            clearTimeout(timeoutId)
        
 
        timeoutId=setTimeout(() => fn(...args), delay);
    }
}

const SearchDebouncing = () =>{

    const [search, setSearch]=useState('')

   //function defined
    const searchText = (searchText) =>{
        console.log('Searched text : ', searchText);
    }
    
    //return function (arg)-> stored in debounceSearch variable
    const debounceSearch = useRef(debounce(searchText, 5000)).current;

    useEffect(()=>{
        
            console.log('UseEffect got triggered')
            debounceSearch(search)
        
    },[search])

    return(
        
            <section>
                <center>
                    <h1>Google</h1>
                    <div>
                        <input value={search}
                            onChange={(e)=>{
                            //takes the entered value from textbox and stores to 'search' varaible,
                            //using updater function 'setSearch'
                            setSearch(e.target.value) 
                            }}
                            
                            title="search"
                            name="search"
                            placeholder="Search Googleee" 
                        />
                        
                    </div>
                </center>
            </section>
        
    )

}

export default SearchDebouncing