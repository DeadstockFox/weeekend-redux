    import { useHistory } from "react-router-dom";
    import { useDispatch } from "react-redux";

    const Thank = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const resubmit = () => {
        let action = {type: "NEW_FORM"}
        dispatch(action);
        history.push('/')
    }
    

    return (
        <>
        <p>Thanks for the feedback!</p>
        <button data-testid="next" onClick={resubmit}>Submit Another Survey?</button>
        </>
    )
}
export default Thank;