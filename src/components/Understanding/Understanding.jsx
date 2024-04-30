import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


const Understanding = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = (e) => {
        e.preventDefault();
        let action = {type: "UNDERSTANDING_SUBMIT", payload: Number(e.target.Understanding.value)};
        dispatch(action);
        history.push('/Support')
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