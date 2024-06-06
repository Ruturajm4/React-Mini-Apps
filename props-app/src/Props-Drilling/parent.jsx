import ChildOne from './child1'

const Parent = () =>{

    
    const num = 5

    return(
        <div>
            <h4>&times; Parent component from props-drilling &times;</h4>
            
           
            <ChildOne number={num} />
        </div>
    )
}

export default Parent