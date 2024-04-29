import { useDispatch } from "react-redux";


const Understanding = () => {

    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.preventDefault();
        let action = {type: "UNDERSTANDING_SUBMIT", payload: e.target.Understanding.value};
        dispatch(action);
        e.target.reset();
    }

    return (
        <>
        <h2>How well are you understanding the content?</h2>
        <form onSubmit={handleClick}>
        <input data-testid="input" placeholder={"Answer"} type={"number"} name={"Understanding"}/>
        <button data-testid="next">Submit</button>
        </form>
        
        </>
    )

};

export default Understanding;