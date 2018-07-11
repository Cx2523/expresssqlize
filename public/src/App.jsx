import React from 'react';
import ReactDOM from 'react-dom';
import Data from './react-components/Data.jsx';
import ExerciseForm from './react-components/NewExerciseForm.jsx'; 

const App = () => {
    return (
        <div>
            <Data />
            <ExerciseForm />
        </div>
    )
}

export default App;