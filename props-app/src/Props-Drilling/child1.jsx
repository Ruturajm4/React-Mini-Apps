import ChildTwo from './child2'

const ChildOne = (props) =>{
    return(
        <div>
            <h4>Child One - {props.number}</h4>
            <ChildTwo number={props.number}/>
        </div>
    )
}

export default ChildOne