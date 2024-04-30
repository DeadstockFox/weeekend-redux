import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


const SurveyForm = (state=[], action) => {
    if (action.type === "FEELING_SUBMIT") {
        return [...state, action.payload];
    } else if (action.type === "UNDERSTANDING_SUBMIT") {
        return [...state, action.payload];
    } else if (action.type === "SUPPORT_SUBMIT") {
        return [...state, action.payload];
    }  else if (action.type === "COMMENTS_SUBMIT") {
        return [...state, action.payload];
    }   else if (action.type === "NEW_FORM") {
        return state = [];
    }
    return state;
}

const reduxStore = createStore(
    combineReducers({
        SurveyForm,
    }),
    applyMiddleware(logger)
);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={reduxStore}>
            <App />
        </Provider>
    </React.StrictMode>
);
