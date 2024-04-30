import { useSelector } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Review = () => {

    const answers = useSelector(store => store.SurveyForm)
    const history = useHistory();

    const submitForm = () => {

        axios.post('/api/feedback', answers).then((r) => {
            history.push('/thank');
        }).catch((e) => {
            console.log('Error in POST request', e);
            alert('Something went wrong!');
        });
    };


    return (
        <>
            <h3>Review Your Feedback:</h3>
            
            <p>Feeling: {answers[0]}</p>
            <p>Understanding: {answers[1]}</p>
            <p>Support: {answers[2]}</p>
            <p>Comments: {answers[3]}</p>
            <br />
            <button data-testid="next" onClick={submitForm}>Submit Answers!</button>
        </>
    )
}

export default Review;