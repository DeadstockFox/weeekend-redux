import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


const Comments = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = (e) => {
        e.preventDefault();
        let action = {type: "COMMENTS_SUBMIT", payload: e.target.Comments.value};
        dispatch(action);
        history.push('/Review')
    }

    return (
        <>
        <h2>Any comments you'd like to give us?</h2>
        <form onSubmit={handleClick}>
        <input data-testid="input" placeholder={"Answer"} type={"text"} name={"Comments"}/>
        <button data-testid="next">Submit</button>
        </form>
        
        </>
    )

};

export default Comments;