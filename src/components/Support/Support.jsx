import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


const Support = () => {

    const dispatch = useDispatch()
    const history = useHistory();

    const handleClick = (e) => {
        e.preventDefault();
        let action = {type: "SUPPORT_SUBMIT", payload: Number(e.target.Support.value)};
        dispatch(action);
        history.push('/Comments');
    }

    return (
        <>
        <h2>How well are you being supported?</h2>
        <form onSubmit={handleClick}>
        <input data-testid="input" placeholder={"Answer"} type={"number"} name={"Support"}/>
        <button data-testid="next">Submit</button>
        </form>
        
        </>
    )

};

export default Support;