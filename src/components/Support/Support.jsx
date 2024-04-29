import { useDispatch } from "react-redux";


const Support = () => {

    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.preventDefault();
        let action = {type: "SUPPORT_SUBMIT", payload: e.target.Support.value};
        dispatch(action);
        e.target.reset();
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