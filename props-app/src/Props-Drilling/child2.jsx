import ChildThree from './child3'

const ChildTwo = (props) =>{
    return(
        <div>
                <h4>Child Two {props.number}</h4>
                <ChildThree number3={props.number}/>
        </div>
    )
}

export default ChildTwo;