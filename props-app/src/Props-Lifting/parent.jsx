import ChildOne from "./child1";
import ChildTwo from "./child2";
import ChildThree from "./child3";

const ParentLifting = () =>{
    const num= 10;

    return(
        <div>
            <h4>&times; Parent component from props lifting &times;</h4>
            <ChildOne number1={num}/>
            <ChildTwo number2={num}/>
            <ChildThree number3={num}/>
        </div>
    )
}

export default ParentLifting