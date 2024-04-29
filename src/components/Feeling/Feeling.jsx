import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


const Feeling = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = (e) => {
        e.preventDefault();
        let action = {type: "FEELING_SUBMIT", payload: e.target.Feeling.value};
        dispatch(action);
        history.push('/Understanding');
    }

    return (
        <>
        <h2>How are you feeling?</h2>
        <form onSubmit={handleClick}>
        <input data-testid="input" placeholder={"Answer"} type={"number"} name={"Feeling"}/>
        <button data-testid="next">Submit</button>
        </form>
        
        </>
    )

};

export default Feeling;